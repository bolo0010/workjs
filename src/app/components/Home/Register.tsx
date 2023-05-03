import React, {useRef, useState} from "react";
import './Register.css'
import {Accordion, Button, Form, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AccountType, TechnologiesTypes} from "../../../types/enums";
import {TechnologiesModel} from "../../../types/interfaces";

const Register = () => {
    const [radioButtonAccountType, setRadioButtonAccountType] = useState<AccountType>();
    const [technologies, setTechnologies] = useState<TechnologiesModel[]>([
        {
            id: 1,
            name: "React",
            type: TechnologiesTypes.framework
        },
        {
            id: 2,
            name: "Express",
            type: TechnologiesTypes.library
        },
    ]);

    const requiredInput = (
        <span className='register__required'>*</span>
    )

    const recruiter_data: JSX.Element = (
        <>
            <Form.Group className="mb-3" controlId="formOrganisation">
                <Form.Label className="fs-4">Nazwa organizacji{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="ABC sp z o.o." required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label className="fs-4">Stanowisko{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Rekruter" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrganisationLink">
                <Form.Label className="fs-4">Link do organizacji{requiredInput}</Form.Label>
                <Form.Control type="url" placeholder="https://abc.pl" required={true}/>
            </Form.Group>
        </>
    )

    const student_data: JSX.Element = (
        <>
            <Form.Group className="mb-3" controlId="formUniversity">
                <Form.Label className="fs-4">Nazwa szkoły wyższej{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Uniwersytet Łódzki" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formField">
                <Form.Label className="fs-4">Kierunek{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Informatyka Ekonomiczna" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label className="fs-4">O mnie{requiredInput}</Form.Label>
                <Form.Control as='textarea' rows={3} required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWorkExperience">
                <Form.Label className="fs-4">Doświadczenie zawodowe</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertificates">
                <Form.Label className="fs-4">Certyfikaty</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPractices">
                <Form.Label className="fs-4">Praktyki</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCourses">
                <Form.Label className="fs-4">Kursy</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formActivites">
                <Form.Label className="fs-4">Aktywność studencka</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHobbies">
                <Form.Label className="fs-4">Hobby i zainteresowania</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLanguages">
                <Form.Label className="fs-4">Języki obce</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <div className="register__technologies">
                <div className="fs-4 mb-3">Technologie</div>
                    <Accordion>
                        {
                            technologies.map(({id, name}) =>
                                <Accordion.Item eventKey={id.toString()} key={`technology_${id}_accordion`}>
                                    <Accordion.Header>{name}{requiredInput}</Accordion.Header>
                                    <Accordion.Body>
                                            <Form.Label className='mb-2'>Ocena wiedzy w skali 0 - 5 (0 - brak, 5 - ekspercka){requiredInput}</Form.Label>
                                            <Form.Control type="number" required={true} max={5} min={0} name={`technology_${id}_knowledge_accordion`} defaultValue={0}/>
                                            <Form.Label className='mb-2 mt-2'>Opis umiejętności</Form.Label>
                                            <Form.Control as='textarea' rows={3} required={false} name={`technology_${id}_description_accordion`}/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        }
                    </Accordion>
            </div>
        </>
    )

    return (
        <div className="register">
            <Form>
                <h2>1. Podstawowe dane</h2>
                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label className="fs-4">Imię{requiredInput}</Form.Label>
                        <Form.Control type="text" placeholder="Jan" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSecondName">
                        <Form.Label className="fs-4">Nazwisko{requiredInput}</Form.Label>
                        <Form.Control type="text" placeholder="Kowalski" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4">Adres email{requiredInput}</Form.Label>
                        <Form.Control type="email" placeholder="xyz@gmail.com" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label className="fs-4">Numer telefonu{requiredInput}</Form.Label>
                        <Form.Control type="text" placeholder="123456789" required={true} minLength={9} maxLength={9}/>
                    </Form.Group>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-4">Hasło{requiredInput}</Form.Label>
                        <Form.Control type="password" placeholder="Podaj hasło" required={true} minLength={8}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                        <Form.Label className="fs-4">Powtórz hasło{requiredInput}</Form.Label>
                        <Form.Control type="password" placeholder="Podaj ponownie hasło" required={true}/>
                    </Form.Group>
                </Stack>
                <Form.Text className="text-muted">
                    Wymagane jest hasło składające się minimalnie z 8 znaków, zawierające małe i duże litery oraz
                    cyfry.
                </Form.Text>
                <h2 className="mt-2 mb-2">2. Dane użytkownika</h2>
                <div className='register__checkboxes'>
                    <div className="register__checkboxes-container">
                        <span className='register__checkboxes-title'>Jestem{requiredInput}</span>
                        <Form.Check
                            type='radio'
                            inline
                            id='formAccountTypeStudentCheckbox'
                            name='formAccountTypeCheckbox'
                            label='studentem'
                            value={AccountType.student}
                            checked={radioButtonAccountType === AccountType.student}
                            onChange={() => setRadioButtonAccountType(AccountType.student)}
                            required
                        />
                        <Form.Check
                            type='radio'
                            inline
                            id='formAccountTypeRecruiterCheckbox'
                            name='formAccountTypeCheckbox'
                            label='rekruterem'
                            value={AccountType.recruiter}
                            checked={radioButtonAccountType === AccountType.recruiter}
                            onChange={() => setRadioButtonAccountType(AccountType.recruiter)}
                            required
                        />
                    </div>
                </div>
                {radioButtonAccountType === AccountType.recruiter ? recruiter_data : radioButtonAccountType === AccountType.student ? student_data : null}
                <Form.Text className="text-muted">
                    Pola oznaczonone {requiredInput} są wymagane.
                </Form.Text>
                <Stack direction="horizontal" className='register__buttons'>
                    <Button variant="primary" type="submit">
                        Zarejestruj mnie
                    </Button>
                    <Button variant="primary" type="button" className="ms-auto">
                        <Link to='/' className='register__remove-link'>Cofnij</Link>
                    </Button>
                </Stack>
            </Form>
        </div>
    );
}

export default Register;