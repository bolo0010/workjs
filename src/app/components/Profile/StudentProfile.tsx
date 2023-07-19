import {Accordion, Card, Col, Row, Spinner, Tab} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {StudentProfileData, StudentProfileProps, TechnologyInProfile} from "../../../types/interfaces";
import Message from "../partials/Message/Message";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import useUpdateWindowInnerWidth from "../../hooks/useUpdateWindowInnerWidth";

const StudentProfile = ({id, changed}: StudentProfileProps) => {
    const [technologies, setTechnologies] = useState<TechnologyInProfile[]>([]);
    const [studentData, setStudentData] = useState<StudentProfileData>({
        first_name: '',
        second_name: '',
        email: '',
        phone_number: '',
        id_student_data: '',
        student_data: {
            university: '',
            field: '',
            about: '',
            work_experience: null,
            certificates: null,
            practices: null,
            courses: null,
            activities: null,
            hobby: null,
            languages: null,
            expected_graduation_date: new Date()
        }
    });
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    useUpdateWindowInnerWidth({setInnerWidth});
    useEffect(() => {
        getStudentProfile()
    }, [id, changed])

    useEffect(() => {
        getStudentTechnologies();
        setLoading(false);
    }, [studentData.id_student_data])

    const getStudentProfile = async () => {
        if (!id) return;
        try {
            const response: AxiosResponse<StudentProfileData> = await axios({
                method: 'GET',
                url: `${API_URL}api/users/${id}`,
                withCredentials: true,
            })
            if (response.status === 200)
                setStudentData(response.data)
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }

    const getStudentTechnologies = async () => {
        if (!studentData.id_student_data) return;
        try {
            const response: AxiosResponse<TechnologyInProfile[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/technologies/${studentData.id_student_data}`,
                withCredentials: true,
            })
            if (response.status === 200)
                setTechnologies(response.data)
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }

    const emptyField = (
        <span className='text-muted'>Nie wypełniono</span>
    )

    if (loading) return <Spinner animation="border"/>;

    return (
        <>
            {message ? <Message message={message} setMessage={setMessage} title='Informacja' time={5000}/> : null}
            <Tab.Container>
                {
                    innerWidth > 768 ? (
                        <Tab.Content>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <h2>{studentData.first_name} {studentData.second_name}</h2>
                                </Col>
                                <Col className='text-end'>
                                    <h2>{studentData.student_data.university}</h2>
                                </Col>
                            </Row>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <div>Adres email: <span className='fw-bold'>{studentData.email}</span></div>
                                </Col>
                                <Col className='text-end'>
                                    <h5>{studentData.student_data.field}</h5>
                                </Col>
                            </Row>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <div>Numer telefonu: <span className='fw-bold'>{studentData.phone_number}</span>
                                    </div>
                                </Col>
                                <Col className='text-end'>
                                    <div>Planowana data ukończenia studiów: <span
                                        className='fw-bold'>{studentData.student_data.expected_graduation_date.toString()}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Content>
                    ) : (
                        <Tab.Content>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <h2 className='profile__border-bottom'>{studentData.first_name} {studentData.second_name}</h2>
                                </Col>
                            </Row>
                            <Row className='w-100 mt-1 mx-0'>
                                <Col>
                                    <h2>{studentData.student_data.university}</h2>
                                </Col>
                            </Row>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <h5 className='profile__border-bottom'>{studentData.student_data.field}</h5>
                                </Col>
                            </Row>
                            <Row className='w-100 mt-1 mx-0'>
                                <Col>
                                    <div>Adres email: <span className='fw-bold'>{studentData.email}</span></div>
                                </Col>
                            </Row>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <div>Numer telefonu: <span className='fw-bold'>{studentData.phone_number}</span>
                                    </div>
                                </Col>

                            </Row>
                            <Row className='w-100 mx-0'>
                                <Col>
                                    <div>Planowana data ukończenia studiów: <span
                                        className='fw-bold'>{studentData.student_data.expected_graduation_date.toString()}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Content>
                    )
                }
                <Tab.Content>
                    <Row className='w-100 mt-3 mx-0'>
                        <Col>
                            <h4 className='profile__border-bottom'>Sekcja #1</h4>
                        </Col>
                    </Row>
                    {
                        innerWidth > 768 ? (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>O mnie</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.about}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Doświadczenie zawodowe</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.work_experience || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100 mb-3'>
                                            <Card.Body>
                                                <Card.Title>O mnie</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.about}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Doświadczenie zawodowe</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.work_experience || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                    <Row className='w-100 mt-3 mx-0'>
                        <Col>
                            <h4 className='profile__border-bottom'>Sekcja #2</h4>
                        </Col>
                    </Row>
                    {
                        innerWidth > 768 ? (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Certyfikaty</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.certificates || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Praktyki</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.practices || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Kursy</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.courses || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100 mb-3'>
                                            <Card.Body>
                                                <Card.Title>Certyfikaty</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.certificates || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='w-100 mb-3'>
                                            <Card.Body>
                                                <Card.Title>Praktyki</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.practices || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Kursy</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.courses || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                    <Row className='w-100 mt-3 mx-0'>
                        <Col>
                            <h4 className='profile__border-bottom'>Sekcja #3</h4>
                        </Col>
                    </Row>
                    <Row className='w-100 my-4 mx-0'>
                        <Col>
                            <Card className='w-100'>
                                <Card.Body>
                                    <Card.Title className='mb-3'>Znane technologie</Card.Title>
                                    <Accordion>
                                        {
                                            technologies.length > 0 ?
                                                technologies.map(technology => (
                                                    <Accordion.Item eventKey={technology.id.toString()}
                                                                    key={`technology_in_profile_${technology.id}`}>
                                                        <Accordion.Header>{technology.technologies.name}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <span className='fw-bold fs-5'>W skali od 1 do 5 (1 - podstawowa, 5 - ekspercka), znajomość tej technologii oceniam na:</span>
                                                            <p className='py-2'>{technology.knowledge}</p>
                                                            <span className='fw-bold fs-5'>Moje umiejętności</span>
                                                            <p className='py-2'>
                                                                {technology.skills}
                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )) : emptyField
                                        }
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='w-100 mt-3 mx-0'>
                        <Col>
                            <h4 className='profile__border-bottom'>Sekcja #4</h4>
                        </Col>
                    </Row>
                    {
                        innerWidth > 768 ? (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Języki obce</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.languages || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Działalność studencka</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.activities || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Hobby i zainteresowania</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.hobby || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <>
                                <Row className='w-100 my-4 mx-0'>
                                    <Col>
                                        <Card className='w-100 mb-3'>
                                            <Card.Body>
                                                <Card.Title>Języki obce</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.languages || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='w-100 mb-3'>
                                            <Card.Body>
                                                <Card.Title>Działalność studencka</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.activities || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='w-100'>
                                            <Card.Body>
                                                <Card.Title>Hobby i zainteresowania</Card.Title>
                                                <Card.Text>
                                                    {studentData.student_data.hobby || emptyField}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        )
                    }

                </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default StudentProfile;