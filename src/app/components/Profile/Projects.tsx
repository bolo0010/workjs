import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tab} from "react-bootstrap";
import {ProjectInProfile, ResponseMessage, StudentProjectsProps} from "../../../types/interfaces";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import Message from "../partials/Message/Message";
import {AccountType} from "../../../types/enums";
import YesNo from "../partials/YesNo/YesNo";

const Projects = ({id, changed}: StudentProjectsProps) => {
    const [projects, setProjects] = useState<ProjectInProfile[]>([]);
    const [accountType, setAccountType] = useState<AccountType | null>(null);
    const [showYesNoModal, setShowYesNoModal] = useState<boolean>(false);
    const [deletingProjectId, setDeletingProjectId] = useState<number | null>(null);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        getProjects();

        const {account_type} = JSON.parse(sessionStorage.getItem('user') as string);
        setAccountType(account_type);
    }, [id, changed])

    const getProjects = async () => {
        if (!id) return;

        try {
            const response: AxiosResponse<ProjectInProfile[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/projects/${id}`,
                withCredentials: true,
            })
            if (response.status === 200)
                setProjects(response.data)
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }
    const handleCloseYesNoModal = (decision: boolean) => {
        setShowYesNoModal(false);
        setDeletingProjectId(null);

        if (decision && deletingProjectId) deleteProject(deletingProjectId);
        else return;
    }

    const deleteProject = async (id_project: number) => {
        if (!id) return;

        try {
            const response: AxiosResponse<ResponseMessage> = await axios({
                method: 'DELETE',
                url: `${API_URL}api/projects/${id_project}`,
                withCredentials: true,
            })
            if (response.status === 200) {
                setMessage(response.data.message);
                getProjects();
            }
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }

    return (
        <>
            {message ? <Message message={message} setMessage={setMessage} title='Informacja' time={5000}/> : null}
            <YesNo handleClose={handleCloseYesNoModal} show={showYesNoModal} title={'Ostrzeżenie'}
                   text={'Czy chcesz usunąć ten projekt?'}/>
            <div className="projects">
                <Tab.Container>
                    <Row className='w-100'>
                        <Col>
                            <h2>Moje projekty</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                projects.length > 0 ?
                                    projects.map(project => (
                                        <Card className='w-100 my-3' key={`project_in_profile_${project.id}`}>
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <Card.Title>{project.name}</Card.Title>
                                                    {
                                                        accountType === AccountType.student ?
                                                            <button className='btn-close'
                                                                    onClick={() => {
                                                                        setDeletingProjectId(project.id);
                                                                        setShowYesNoModal(true);
                                                                    }
                                                                    }></button> : null
                                                    }
                                                </div>
                                                <Card.Text>
                                                    {project.description}
                                                </Card.Text>
                                                <Card.Link href={project.demo_link} target='_blank'>Wersja
                                                    demonstracyjna</Card.Link>
                                                <Card.Link href={project.dev_link}
                                                           target='_blank'>Repozytorium</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    )) : null
                            }
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default Projects;