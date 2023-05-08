import Modal from "react-bootstrap/esm/Modal";
import {Accordion, Button, Container, Form} from "react-bootstrap";
import {
    JoinedTechnologyDataState,
    ResponseMessage,
    StudentDataTechnologiesModel,
    StudentEditProfileData,
    TechnologiesModel,
    TechnologyInProfile
} from "../../../types/interfaces";
import React, {FormEvent, useEffect, useState} from "react";
import './EditProfile.css'
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import {EditProfileProps} from "../../../types/custom";

const EditProfile = ({showModal, handleClose, id}: EditProfileProps) => {
    const [technologies, setTechnologies] = useState<TechnologiesModel[]>([]);
    const [technologyData, setTechnologyData] = useState<TechnologyInProfile[]>([])
    const [joinedTechnologyData, setJoinedTechnology] = useState<JoinedTechnologyDataState[]>([])
    const [studentData, setStudentData] = useState<StudentEditProfileData>({
        first_name: '',
        second_name: '',
        email: '',
        phone_number: '',
        id_student_data: '',
        student_data: {
            university: '',
            field: '',
            about: '',
            work_experience: '',
            certificates: '',
            practices: '',
            courses: '',
            activities: '',
            hobby: '',
            languages: '',
            expected_graduation_date: new Date()
        }
    })

    useEffect(() => {
        getStudentData();
    }, [id])

    useEffect(() => {
        getTechnologies();
    }, [studentData.id_student_data])

    useEffect(() => {
        getStudentTechnologies();
    }, [studentData.id_student_data])

    useEffect(() => {
        const zeroKnowledgeTechnologies: JoinedTechnologyDataState[] = [];
        const myTechnologies: JoinedTechnologyDataState[] = [];

        technologies.forEach(t1 => {
            const t2 = technologyData.find(t2 => t1.id === t2.id_technology)
            if (!t2) {
                zeroKnowledgeTechnologies.push({
                    id_technology: t1.id,
                    knowledge: 0,
                    skills: '',
                    name: t1.name
                })
            }
        })
        technologyData.forEach(t => {
            myTechnologies.push({
                id_technology: t.id_technology,
                knowledge: t.knowledge,
                skills: t.skills,
                name: t.technologies.name
            })
        })

        setJoinedTechnology([...zeroKnowledgeTechnologies, ...myTechnologies])
    }, [technologyData])

    const getTechnologies = async () => {
        try {
            const response: AxiosResponse<TechnologiesModel[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/technologies`
            });
            setTechnologies(response.data);
        } catch (err: any) {
            handleClose(err.response.data.message || err.message);
        }
    }

    const getStudentTechnologies = async () => {
        if (!studentData.id_student_data) return;

        try {
            const response: AxiosResponse<TechnologyInProfile[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/technologies/${studentData.id_student_data}`,
                withCredentials: true,
            });
            setTechnologyData(response.data);
        } catch (err: any) {
            handleClose(err.response.data.message || err.message);
        }
    }

    const updateStudentDataAndTechnologies = async (e: FormEvent) => {
        e.preventDefault();
        const filteredTechnologies = joinedTechnologyData.filter(technology => technology.knowledge > 0)
        const mappedTechnologies: StudentDataTechnologiesModel[] = [];
        filteredTechnologies.forEach(technology => {
            mappedTechnologies.push({
                id_technology: technology.id_technology,
                id_student_data: studentData.id_student_data,
                knowledge: technology.knowledge,
                skills: technology.skills
            })
        })
        try {
            const first_response: AxiosResponse<ResponseMessage> = await axios({
                method: 'PATCH',
                url: `${API_URL}api/users/`,
                withCredentials: true,
                data: studentData
            });
            const second_response: AxiosResponse<ResponseMessage> = await axios({
                method: 'PATCH',
                url: `${API_URL}api/technologies/`,
                withCredentials: true,
                data: {
                    technologies: mappedTechnologies,
                    id_student_data: studentData.id_student_data
                }
            });
            if (first_response.data.success && second_response.data.success) {
                handleClose(first_response.data.message);
                window.location.reload();
            }
        } catch (err: any) {
            handleClose(err.response.data.message || err.message);
        }
    }

    const getStudentData = async () => {
        if (!id) return;
        try {
            const response: AxiosResponse<StudentEditProfileData> = await axios({
                method: 'GET',
                url: `${API_URL}api/users/${id}`,
                withCredentials: true,
            })
            if (response.status === 200)
                setStudentData(response.data)
        } catch (err: any) {
            handleClose(err.response.data.message || err.message);
        }
    }

    const changeKnowledge = (knowledge: number, id_technology: number) => {
        if (knowledge >= 0 && knowledge < 6) {
            const technology = joinedTechnologyData.find(technology => technology.id_technology === id_technology);
            if (!technology) return;
            setJoinedTechnology((joinedTechnologyData) => [...joinedTechnologyData.map(technology => {
                if (technology.id_technology === id_technology) {
                    return {
                        ...technology,
                        knowledge: knowledge
                    }
                } else return technology
            })])
        }
    }

    const changeSkills = (skills: string, id_technology: number) => {
        const technology = joinedTechnologyData.find(technology => technology.id_technology === id_technology);
        if (!technology) return;
        setJoinedTechnology((joinedTechnologyData) => [...joinedTechnologyData.map(technology => {
            if (technology.id_technology === id_technology) {
                return {
                    ...technology,
                    skills: skills
                }
            } else return technology
        })])
    }

    const requiredInput = (
        <span className='edit-profile__required'>*</span>
    )

    return (
        <div className="edit-profile">
            <Modal show={showModal} onHide={() => handleClose('')} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Edytuj profil</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-4">Adres email{requiredInput}</Form.Label>
                            <Form.Control type="email" required={true} value={studentData.email}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              email: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label className="fs-4">Numer telefonu{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true} minLength={9} maxLength={9}
                                          value={studentData.phone_number}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              phone_number: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUniversity">
                            <Form.Label className="fs-4">Nazwa szkoły wyższej{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true} value={studentData.student_data.university}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, university: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formField">
                            <Form.Label className="fs-4">Kierunek{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true} value={studentData.student_data.field}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, field: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAbout">
                            <Form.Label className="fs-4">O mnie{requiredInput}</Form.Label>
                            <Form.Control as='textarea' rows={3} required={true} value={studentData.student_data.about}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, about: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWorkExperience">
                            <Form.Label className="fs-4">Doświadczenie zawodowe</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.work_experience}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {
                                                  ...studentData.student_data,
                                                  work_experience: e.target.value
                                              }
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCertificates">
                            <Form.Label className="fs-4">Certyfikaty</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.certificates}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, certificates: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPractices">
                            <Form.Label className="fs-4">Praktyki</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.practices}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, practices: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCourses">
                            <Form.Label className="fs-4">Kursy</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.courses}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, courses: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formActivites">
                            <Form.Label className="fs-4">Aktywność studencka</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.activities}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, activities: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formHobbies">
                            <Form.Label className="fs-4">Hobby i zainteresowania</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false} value={studentData.student_data.hobby}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, hobby: e.target.value}
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLanguages">
                            <Form.Label className="fs-4">Języki obce</Form.Label>
                            <Form.Control as='textarea' rows={3} required={false}
                                          value={studentData.student_data.languages}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentData({
                                              ...studentData,
                                              student_data: {...studentData.student_data, languages: e.target.value}
                                          })}/>
                        </Form.Group>
                        <div className="register__technologies">
                            <div className="fs-4 mb-3">Technologie</div>
                            <Accordion>
                                {
                                    joinedTechnologyData.map(({name, knowledge, skills, id_technology}) => {
                                            return (
                                                <Accordion.Item eventKey={id_technology.toString()}
                                                                key={`technology_${id_technology}_accordion`}>
                                                    <Accordion.Header>{name}{requiredInput}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Form.Label className='mb-2'>Ocena wiedzy w skali 0 - 5 (0 - brak, 5
                                                            - ekspercka){requiredInput}</Form.Label>
                                                        <Form.Control type="number" required={true} max={5} min={0}
                                                                      name={`technology_${id_technology}_knowledge_accordion`}
                                                                      value={knowledge}
                                                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeKnowledge(Number(e.target.value), id_technology)}
                                                        />
                                                        <Form.Label className='mb-2 mt-2'>Opis umiejętności</Form.Label>
                                                        <Form.Control as='textarea' rows={3} required={false}
                                                                      name={`technology_${id_technology}_description_accordion`}
                                                                      value={skills}
                                                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSkills(e.target.value, id_technology)}
                                                        />
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        }
                                    )
                                }
                            </Accordion>
                        </div>
                        <Form.Text className="text-muted">
                            Pola oznaczonone {requiredInput} są wymagane.
                        </Form.Text>
                    </Form>
                </Container>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose('')}>Anuluj</Button>
                    <Button variant="primary" type='submit' onClick={updateStudentDataAndTechnologies}>Edytuj</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditProfile;