import {Router} from "express";
import Users from "../../database/models/Users.model";
import StudentData from "../../database/models/StudentData.model";
import RecruiterData from "../../database/models/RecruiterData.model";
import Projects from "../../database/models/Projects.model";
import Technologies from "../../database/models/Technologies.model";
export const users = Router();
users.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll({
            include: [
                {
                    model: StudentData,
                    include: [
                        {
                            model: Technologies
                        }
                    ]
                },
                {
                    model: RecruiterData
                },
                {
                    model: Projects
                }
            ]
        });
        res.json(users);
    } catch (e) {
        next(e);
    }
})