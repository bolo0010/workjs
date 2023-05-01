import React, {useState} from "react";
import './Register.css'
import {Button, Form, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AccountType} from "../../../types/enums";

const Register = () => {
    const [radioButtonAccountType, setRadioButtonAccountType] = useState<AccountType>();

    const recruiter_data: JSX.Element = (
        <>
            <Form.Group className="mb-3" controlId="formOrganisation">
                <Form.Label>Nazwa organizacji</Form.Label>
                <Form.Control type="text" placeholder="ABC sp z o.o." required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label>Pozycja</Form.Label>
                <Form.Control type="text" placeholder="Rekruter" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrganisationLink">
                <Form.Label>Link do organizacji</Form.Label>
                <Form.Control type="url" placeholder="Rekruter" required={true}/>
            </Form.Group>
        </>
    )

    const student_data: JSX.Element = (
        <>
            <Form.Group className="mb-3" controlId="formUniversity">
                <Form.Label>Nazwa szkoły wyższej</Form.Label>
                <Form.Control type="text" placeholder="Uniwersytet Łódzki" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formField">
                <Form.Label>Kierunek</Form.Label>
                <Form.Control type="text" placeholder="Informatyka Ekonomiczna" required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label>O mnie</Form.Label>
                <Form.Control as='textarea' rows={3} required={true}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWorkExperience">
                <Form.Label>Doświadczenie zawodowe</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertificates">
                <Form.Label>Certyfikaty</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPractices">
                <Form.Label>Praktyki</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCourses">
                <Form.Label>Kursy</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formActivites">
                <Form.Label>Aktywność studencka</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHobbies">
                <Form.Label>Hobby i zainteresowania</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLanguages">
                <Form.Label>Języki obce</Form.Label>
                <Form.Control as='textarea' rows={3} required={false}/>
            </Form.Group>
        </>
    )

    return (
        <div className="register">
            <Form>
                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control type="text" placeholder="Jan" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSecondName">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Kowalski" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control type="email" placeholder="xyz@gmail.com" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Numer telefonu</Form.Label>
                        <Form.Control type="text" placeholder="123456789" required={true} minLength={9} maxLength={9}/>
                    </Form.Group>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" placeholder="Podaj hasło" required={true} minLength={8}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                        <Form.Label>Powtórz hasło</Form.Label>
                        <Form.Control type="password" placeholder="Podaj ponownie hasło" required={true}/>
                    </Form.Group>
                </Stack>
                <Form.Text className="text-muted">
                    Wymagane jest hasło składające się minimalnie 8 znaków, zawierające małe i duże litery oraz
                    cyfry.
                </Form.Text>
                <div className='register__checkboxes'>
                    <div className="register__checkboxes-container">
                        <span className='register__checkboxes-title'>Jestem</span>
                        <Form.Check
                            type='radio'
                            inline
                            id='formAccountTypeStudentCheckbox'
                            name='formAccountTypeCheckbox'
                            label='studentem'
                            value={AccountType.student}
                            checked={radioButtonAccountType === AccountType.student}
                            onClick={() => setRadioButtonAccountType(AccountType.student)}
                        />
                        <Form.Check
                            type='radio'
                            inline
                            id='formAccountTypeRecruiterCheckbox'
                            name='formAccountTypeCheckbox'
                            label='rekruterem'
                            value={AccountType.recruiter}
                            checked={radioButtonAccountType === AccountType.recruiter}
                            onClick={() => setRadioButtonAccountType(AccountType.recruiter)}
                        />
                    </div>
                </div>
                {radioButtonAccountType === AccountType.recruiter ? recruiter_data : radioButtonAccountType === AccountType.student ? student_data : null}
                <Stack direction="horizontal" className='register__buttons'>
                    <Button variant="primary" type="submit" disabled={true}>
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