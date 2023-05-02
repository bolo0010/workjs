import React, {useState} from "react";
import {Card, Col, Row, Tab} from "react-bootstrap";
import {ProjectInProfile} from "../../../types/interfaces";

const Projects = () => {
    const [projects, setProjects] = useState<ProjectInProfile[]>([{
        id: 1,
        name: "Projekt 1",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
        demo_link: "https://github.com/",
        dev_link: "https://github.com/"
    }]);

    return (
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
                            projects.map(project => (
                                <Card className='w-100 my-3' key={`project_in_profile_${project.id}`}>
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        <Card.Link href={project.demo_link} target='_blank'>Wersja demonstracyjna</Card.Link>
                                        <Card.Link href={project.dev_link} target='_blank'>Repozytorium</Card.Link>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Projects;