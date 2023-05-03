import {Accordion, Card, Col, Row, Tab} from "react-bootstrap";
import React, {useState} from "react";
import {StudentProfileProps, TechnologyInProfile} from "../../../types/interfaces";

const StudentProfile = ({id}: StudentProfileProps) => {
    const [technologies, setTechnologies] = useState<TechnologyInProfile[]>([
        {
            id: 1,
            name: 'React',
            knowledge: 3,
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentiumvoluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sintoccaecati cupiditate non provident, similique sunt in culpa qui officia deseruntmollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et"
        }
    ]);

    return (
        <Tab.Container>
            <Row className='w-100'>
                <Col>
                    <h2>Artur Masłowski</h2>
                </Col>
                <Col className='text-end'>
                    <h2>Uniwersytet Łódzki</h2>
                </Col>
            </Row>
            <Row className='w-100'>
                <Col>
                    <div>Adres email: <span className='fw-bold'>abc@wp.pl</span></div>
                </Col>
                <Col className='text-end'>
                    <h5>Informatyka Ekonomiczna</h5>
                </Col>
            </Row>
            <Row className='w-100'>
                <Col>
                    <div>Numer telefonu: <span className='fw-bold'>123123123</span></div>
                </Col>
                <Col className='text-end'>
                    <div>Planowana data ukończenia studiów: <span className='fw-bold'>30-10-2024</span></div>
                </Col>
            </Row>
            <Row className='w-100 mt-3'>
                <Col className='profile__border-bottom'>
                    <h4>Sekcja #1</h4>
                </Col>
            </Row>
            <Row className='w-100 my-4'>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>O mnie</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                                rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                                recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Doświadczenie zawodowe</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='w-100 mt-3'>
                <Col className='profile__border-bottom'>
                    <h4>Sekcja #2</h4>
                </Col>
            </Row>
            <Row className='w-100 my-4'>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Certyfikaty</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Praktyki</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Kursy</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='w-100 mt-3'>
                <Col className='profile__border-bottom'>
                    <h4>Sekcja #3</h4>
                </Col>
            </Row>
            <Row className='w-100 my-4'>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title className='mb-3'>Znane technologie</Card.Title>
                            <Accordion>
                                {
                                    technologies.map(technology => (
                                        <Accordion.Item eventKey={technology.id.toString()}
                                                        key={`technology_in_profile_${technology.id}`}>
                                            <Accordion.Header>{technology.name}</Accordion.Header>
                                            <Accordion.Body>
                                                <span className='fw-bold fs-5'>W skali od 1 do 5 (1 - podstawowa, 5 - ekspercka), znajomość tej technologii oceniam na:</span>
                                                <p className='py-2'>{technology.knowledge}</p>
                                                <span className='fw-bold fs-5'>Moje umiejętności</span>
                                                <p className='py-2'>
                                                    {technology.description}
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='w-100 mt-3'>
                <Col className='profile__border-bottom'>
                    <h4>Sekcja #4</h4>
                </Col>
            </Row>
            <Row className='w-100 ps-4 my-4'>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Języki obce</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Działalność studencka</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-100'>
                        <Card.Body>
                            <Card.Title>Hobby i zainteresowania</Card.Title>
                            <Card.Text>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default StudentProfile;