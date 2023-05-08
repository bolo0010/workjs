import {Accordion, Form} from "react-bootstrap";
import React from "react";
import {RegisterStateTechnology, StudentDataProps} from "../../../types/interfaces";

const StudentData = ({
                         technologies,
                         setRegisterStudentData,
                         registerStudentData,
                         registerTechnologyData,
                         setRegisterTechnologyData
                     }: StudentDataProps) => {
    const requiredInput = (
        <span className='register__required'>*</span>
    )

    const changeKnowledge = (knowledge: number, id_technology: number) => {
        if (knowledge >= 0 && knowledge < 6) {
            const technology = registerTechnologyData.find(technology => technology.id_technology === id_technology);
            if (!technology) return;
            setRegisterTechnologyData((registerTechnologyData) => [...registerTechnologyData.map(technology => {
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
        const technology = registerTechnologyData.find(technology => technology.id_technology === id_technology);
        if (!technology) return;
        setRegisterTechnologyData((registerTechnologyData) => [...registerTechnologyData.map(technology => {
            if (technology.id_technology === id_technology) {
                return {
                    ...technology,
                    skills: skills
                }
            } else return technology
        })])
    }


    return (
        <>
            <Form.Group className="mb-3" controlId="formUniversity">
                <Form.Label className="fs-4">Nazwa szkoły wyższej{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Uniwersytet Łódzki" required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  university: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formField">
                <Form.Label className="fs-4">Kierunek{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Informatyka Ekonomiczna" required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  field: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpectedGraduationDate">
                <Form.Label className="fs-4">Przewidywana data ukończenia studiów{requiredInput}</Form.Label>
                <Form.Control type="date" required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  expected_graduation_date: new Date(e.target.value)
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label className="fs-4">O mnie{requiredInput}</Form.Label>
                <Form.Control as='textarea' rows={3} required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  about: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWorkExperience">
                <Form.Label className="fs-4">Doświadczenie zawodowe</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  work_experience: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertificates">
                <Form.Label className="fs-4">Certyfikaty</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  certificates: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPractices">
                <Form.Label className="fs-4">Praktyki</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  practices: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCourses">
                <Form.Label className="fs-4">Kursy</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  courses: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formActivites">
                <Form.Label className="fs-4">Aktywność studencka</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  activities: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHobbies">
                <Form.Label className="fs-4">Hobby i zainteresowania</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  hobby: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLanguages">
                <Form.Label className="fs-4">Języki obce</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterStudentData({
                                  ...registerStudentData,
                                  languages: e.target.value
                              })}/>
            </Form.Group>
            <div className="register__technologies">
                <div className="fs-4 mb-3">Technologie</div>
                <Accordion>
                    {
                        technologies.map(({id, name}) => {
                                const technology = registerTechnologyData.find(technology => technology.id_technology === id) as RegisterStateTechnology;
                                return (
                                    <Accordion.Item eventKey={id.toString()} key={`technology_${id}_accordion`}>
                                        <Accordion.Header>{name}{requiredInput}</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Label className='mb-2'>Ocena wiedzy w skali 0 - 5 (0 - brak, 5 -
                                                ekspercka){requiredInput}</Form.Label>
                                            <Form.Control type="number" required={true} max={5} min={0}
                                                          name={`technology_${id}_knowledge_accordion`}
                                                          value={technology.knowledge}
                                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeKnowledge(Number(e.target.value), id)}/>
                                            <Form.Label className='mb-2 mt-2'>Opis umiejętności</Form.Label>
                                            <Form.Control as='textarea' rows={3} required={false}
                                                          name={`technology_${id}_description_accordion`}
                                                          value={technology.skills}
                                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSkills(e.target.value, id)}/>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            }
                        )
                    }
                </Accordion>
            </div>
        </>
    )
}

export default StudentData;