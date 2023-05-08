import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tab} from "react-bootstrap";
import {ProjectInProfile, StudentProjectsProps} from "../../../types/interfaces";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import Message from "../partials/Message/Message";

const Projects = ({id}: StudentProjectsProps) => {
    const [projects, setProjects] = useState<ProjectInProfile[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        getProjects();
    }, [id])
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

    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000}/> : null}
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
                                                <Card.Title>{project.name}</Card.Title>
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