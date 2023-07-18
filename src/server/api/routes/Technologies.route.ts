import {Request, Response, Router} from "express";
import Technologies from "../../database/models/Technologies.model";
import passport from "passport";
import StudentDataTechnologies from "../../database/models/StudentDataTechnologies.model";
import {StudentDataTechnologiesModel} from "../../../types/interfaces";
import DatabaseConnection from "../../database/connection";

export const technologies = Router();

//get student technologies
technologies.get('/:id', passport.authenticate('jwt', {session: false}), async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const technologies = await StudentDataTechnologies.findAll({
            attributes: ['id', 'id_technology', 'knowledge', 'skills'],
            where: {id_student_data: id},
            include: [
                {
                    model: Technologies,
                    attributes: ['name']
                }
            ]
        });
        res.status(200).json(technologies);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: 'Wystąpił błąd, spróbuj ponownie później.'
        });
    }
})
    //update students technologies
    .patch('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {technologies, id_student_data}: {
            technologies: StudentDataTechnologiesModel[],
            id_student_data: string
        } = req.body

        const transaction = await DatabaseConnection.transaction();
        try {
            await StudentDataTechnologies.destroy({
                where: {id_student_data},
                transaction
            })
            await StudentDataTechnologies.bulkCreate(technologies, {
                transaction
            });
            await transaction.commit();
            res.status(200).json({
                success: true,
                message: 'Technologie studenta zostały zaktualizowane.'
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
    //get all technologies
    .get('/', async (req, res) => {
        try {
            const technologies = await Technologies.findAll();
            res.status(200).json(technologies);
        } catch (error: any) {
            console.error(error.message);
            res.status(500).json({
                success: false,
                message: 'Wystąpił błąd, spróbuj ponownie później.'
            });
        }
    })

