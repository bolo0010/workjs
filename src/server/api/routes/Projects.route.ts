import {Router} from "express";
import passport from "passport";
import {ProjectData} from "../../../types/custom";
import Projects from "../../database/models/Projects.model";

export const projects = Router();

//create new project
projects.post('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
    const {
        name,
        description,
        demo_link,
        dev_link
    } = req.body as ProjectData;

    const {sub} = req.user as { sub: string }

    if (!name || !description || !demo_link || !dev_link) return res.status(400).json({
        success: false,
        message: 'Uzupełnij wszystkie pola.'
    });

    try {
        await Projects.create({
            name, description, demo_link, dev_link, id_student: sub
        })
        res.status(200).json({
            success: true,
            message: 'Projekt został dodany.'
        });
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: 'Wystąpił błąd, spróbuj ponownie później.'
        });
    }
})
    //get student projects
    .get('/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
        const {id} = req.params;

        try {
            const projects = await Projects.findAll({
                attributes: ['id', 'name', 'description', 'demo_link', 'dev_link'],
                where: {
                    id_student: id
                }
            })
            res.status(200).json(projects);
        } catch (error: any) {
            console.error(error.message);
            res.status(500).json({
                success: false,
                message: 'Wystąpił błąd, spróbuj ponownie później.'
            });
        }
    })