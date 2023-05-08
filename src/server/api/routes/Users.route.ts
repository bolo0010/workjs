import {Request, Response, Router} from "express";
import Users from "../../database/models/Users.model";
import {Op} from "sequelize";
import {genPassword} from "../../config/jwt";
import {AccountType} from "../../../types/enums";
import StudentData from "../../database/models/StudentData.model";
import StudentDataModel from "../../database/models/StudentData.model";
import RecruiterData from "../../database/models/RecruiterData.model";
import StudentDataTechnologies from "../../database/models/StudentDataTechnologies.model";
import {PostDataCreateUser, StudentDataTechnologiesModel, StudentEditProfileData} from "../../../types/interfaces";
import passport from "passport";
import DatabaseConnection from "../../database/connection";
import Technologies from "../../database/models/Technologies.model";
import Projects from "../../database/models/Projects.model";

export const users = Router();

//create user
users.post('/', async (req: Request, res: Response) => {
    const {
        first_name,
        second_name,
        email,
        phone_number,
        account_type,
        password,
        university,
        field,
        about,
        work_experience,
        certificates,
        practices,
        courses,
        activities,
        hobby,
        languages,
        expected_graduation_date,
        organisation,
        position,
        organisation_link,
        technologies
    }: PostDataCreateUser = req.body;

    if (!first_name || !second_name || !email || !phone_number || !account_type || !password) {
        res.status(400).json({
            success: false,
            message: 'Uzupełnij wymagane pola dotyczące podstawowych danych.'
        });
        return;
    }

    if (phone_number.length !== 9) {
        res.status(400).json({
            success: false,
            message: 'Numer telefonu powinien składać się z 9 cyfr.'
        });
        return;
    }

    const reg = new RegExp('^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,}$');
    if (!email.match(reg)) {
        res.status(400).json({
            success: false,
            message: 'Adres email jest niepoprawny.'
        });
        return;
    }

    const unique = await Users.findOne({
        where: {
            [Op.or]: [{email}, {phone_number}]
        }
    });

    if (unique) {
        res.status(400).json({
            success: false,
            message: 'Użytkownik z podanym numerem telefonu lub adresem email już istnieje.'
        });
        return;
    }

    if (account_type === AccountType.student) {
        if (!university || !field || !about) {
            res.status(400).json({
                success: false,
                message: 'Uzupełnij wymagane pola dotyczące danych użytkownika.'
            });
            return;
        }
    } else if (account_type === AccountType.recruiter) {
        if (!organisation || !position || !organisation_link) {
            res.status(400).json({
                success: false,
                message: 'Uzupełnij wymagane pola dotyczące danych użytkownika.'
            });
            return;
        }
    }

    const saltHash = genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    try {
        let id_student_data: string | null = null;
        let id_recruiter_data: string | null = null;

        switch (account_type) {
            case AccountType.student:
                const studentData = await StudentData.create({
                    university,
                    field,
                    about,
                    work_experience,
                    certificates,
                    practices,
                    courses,
                    activities,
                    hobby,
                    languages,
                    expected_graduation_date,
                })
                if (technologies) {
                    const studentDataTechnologies: StudentDataTechnologiesModel[] = technologies.map(technology => ({
                        id_student_data: studentData.id,
                        id_technology: technology.id_technology,
                        skills: technology.skills,
                        knowledge: technology.knowledge
                    }))
                    console.log(studentDataTechnologies)
                    await StudentDataTechnologies.bulkCreate(studentDataTechnologies);
                }
                id_student_data = studentData.id;
                break;
            case AccountType.recruiter:
                const recruiterData = await RecruiterData.create({
                    organisation,
                    position,
                    organisation_link
                })
                id_recruiter_data = recruiterData.id;
                break;
        }

        await Users.create({
            email,
            hash,
            salt,
            first_name,
            second_name,
            phone_number,
            account_type,
            id_student_data,
            id_recruiter_data
        });
        res.status(200).json({
            success: true,
            message: 'Zarejestrowano pomyślnie.'
        });
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: 'Wystąpił błąd, spróbuj ponownie później.'
        });
    }
})
    //update user with student data
    .patch('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {sub} = req.user as { sub: string };
        const {
            email,
            phone_number,
            id_student_data,
            student_data: {
                university,
                field,
                about,
                work_experience,
                certificates,
                practices,
                courses,
                activities,
                hobby,
                languages,
            }
        }: StudentEditProfileData = req.body;
        const transaction = await DatabaseConnection.transaction();
        try {
            await Users.update({email, phone_number}, {
                where: {
                    id: sub
                },
                transaction
            })
            await StudentData.update({
                university,
                field,
                about,
                work_experience,
                certificates,
                practices,
                courses,
                activities,
                hobby,
                languages,
            }, {
                where: {
                    id: id_student_data
                },
                transaction
            })
            await transaction.commit();
            res.status(200).json({
                success: true,
                message: 'Dane zostały zaktualizowane.'
            });
        } catch (error: any) {
            await transaction.rollback();
            console.error(error.message);
            res.status(500).json({
                success: false,
                message: 'Wystąpił błąd, spróbuj ponownie później.'
            });
        }
    })
    //get all students for recruiter
    .get('/all', passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {account_type} = req.user as { account_type: AccountType };

        if (account_type !== AccountType.recruiter) {
            res.status(401).json({
                success: false,
                message: 'Nie posiadasz uprawnień do przeglądania listy studentów.'
            });
            return;
        }

        try {
            const students = await Users.findAll({
                attributes: ['id', 'first_name', 'second_name'],
                where: {
                    account_type: AccountType.student,
                },
                include: [
                    {
                        model: StudentData,
                        attributes: ['university', 'field'],
                        include: [{
                            model: Technologies,
                            attributes: ['name'],
                            through: {attributes: []}
                        }]
                    },
                    {
                        model: Projects,
                        attributes: ['id'],
                    }

                ]
            })
            res.status(200).json(students)
        } catch (error: any) {
            console.error(error.message);
            res.status(500).json({
                success: false,
                message: 'Wystąpił błąd, spróbuj ponownie później.'
            });
        }
    })
    //get user with student data
    .get('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {id} = req.params;
        try {
            const response = await Users.findOne({
                attributes: ['id_student_data', 'first_name', 'second_name', 'phone_number', 'email'],
                where: {
                    id
                },
                include: [
                    {
                        model: StudentDataModel,
                        attributes: ['university', 'field', 'about', 'work_experience', 'certificates', 'practices', 'courses', 'activities', 'hobby', 'languages', 'expected_graduation_date']
                    }
                ]
            });
            if (response) res.status(200).json(response);
            else res.status(400).json({
                success: false,
                message: 'Student nie został odnaleziony.'
            });
        } catch (error: any) {
            console.error(error.message);
            res.status(500).json({
                success: false,
                message: 'Wystąpił błąd, spróbuj ponownie później.'
            });
        }
    })