import React, {FormEvent, useEffect, useState} from "react";
import './Register.css'
import {Button, Form, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {AccountType} from "../../../types/enums";
import {
    PostDataCreateUser,
    RegisterState,
    RegisterStateRecruiter,
    RegisterStateStudent,
    RegisterStateTechnology,
    TechnologiesModel,
} from "../../../types/interfaces";
import RecruiterData from "./RecruiterData";
import StudentData from "./StudentData";
import axios, {AxiosResponse} from "axios";
import Message from "../partials/Message/Message";
import {API_URL} from "../../config/api_url";

const Register = () => {
    const navigate = useNavigate();

    const [radioButtonAccountType, setRadioButtonAccountType] = useState<AccountType>();
    const [registerCommonData, setRegisterCommonData] = useState<RegisterState>({
        first_name: '',
        second_name: '',
        email: '',
        phone_number: '',
        password1: '',
        password2: ''
    });
    const [registerStudentData, setRegisterStudentData] = useState<RegisterStateStudent>({
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
    });
    const [registerRecruiterData, setRegisterRecruiterData] = useState<RegisterStateRecruiter>({
        organisation: '',
        position: '',
        organisation_link: ''
    });
    const [registerTechnologyData, setRegisterTechnologyData] = useState<RegisterStateTechnology[]>([])
    const [technologies, setTechnologies] = useState<TechnologiesModel[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        getTechnologies();
    }, [])

    useEffect(() => {
        setRegisterTechnologyData(technologies.map(technologies => ({
            id_technology: technologies.id,
            knowledge: 0,
            skills: ''
        })))
    }, [technologies])

    const getTechnologies = async () => {
        try {
            const response: AxiosResponse<TechnologiesModel[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/technologies`
            });
            setTechnologies(response.data);
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }

    const checkPassword = (): boolean => {
        if (registerCommonData.password1 !== registerCommonData.password2) {
            setMessage("Hasła nie są identyczne.");
            window.scrollTo(0, 0);
            return false
        }

        const reg = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$");
        if (!registerCommonData.password1.match(reg)) {
            setMessage("Wymagania dotyczące hasła nie zostały spełnione.");
            window.scrollTo(0, 0);
            return false
        }

        return true;
    }

    const postUser = async (e: FormEvent) => {
        e.preventDefault();
        if (!checkPassword()) return;
        if (!radioButtonAccountType) return;

        const postData: PostDataCreateUser = {
            first_name: registerCommonData.first_name,
            second_name: registerCommonData.second_name,
            email: registerCommonData.email,
            phone_number: registerCommonData.phone_number,
            account_type: radioButtonAccountType,
            password: registerCommonData.password1,
            university: registerStudentData.university,
            field: registerStudentData.field,
            about: registerStudentData.about,
            work_experience: registerStudentData.work_experience,
            certificates: registerStudentData.certificates,
            practices: registerStudentData.practices,
            courses: registerStudentData.courses,
            activities: registerStudentData.activities,
            hobby: registerStudentData.hobby,
            languages: registerStudentData.languages,
            expected_graduation_date: registerStudentData.expected_graduation_date,
            organisation: registerRecruiterData.organisation,
            position: registerRecruiterData.position,
            organisation_link: registerRecruiterData.organisation_link,
            technologies: registerTechnologyData.filter(technology => technology.knowledge > 0)
        }

        try {
            await axios({
                method: 'POST',
                url: `${API_URL}api/users`,
                data: postData
            });
            navigate('/', {state: {successful_register: "Zarejestrowano pomyślnie."}, replace: true});
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
            window.scrollTo(0, 0);
        }
    }


    const requiredInput = (
        <span className='register__required'>*</span>
    )
    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000}/> : null}
            <div className="register">
                <Form onSubmit={postUser}>
                    <h2>1. Podstawowe dane</h2>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label className="fs-4">Imię{requiredInput}</Form.Label>
                            <Form.Control type="text" placeholder="Jan" required={true}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              first_name: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSecondName">
                            <Form.Label className="fs-4">Nazwisko{requiredInput}</Form.Label>
                            <Form.Control type="text" placeholder="Kowalski" required={true}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              second_name: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-4">Adres email{requiredInput}</Form.Label>
                            <Form.Control type="email" placeholder="xyz@gmail.com" required={true}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              email: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label className="fs-4">Numer telefonu{requiredInput}</Form.Label>
                            <Form.Control type="text" placeholder="123456789" required={true} minLength={9}
                                          maxLength={9}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              phone_number: e.target.value
                                          })}/>
                        </Form.Group>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fs-4">Hasło{requiredInput}</Form.Label>
                            <Form.Control type="password" placeholder="Podaj hasło" required={true} minLength={8}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              password1: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label className="fs-4">Powtórz hasło{requiredInput}</Form.Label>
                            <Form.Control type="password" placeholder="Podaj ponownie hasło" required={true}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterCommonData({
                                              ...registerCommonData,
                                              password2: e.target.value
                                          })}/>
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
                    {radioButtonAccountType === AccountType.recruiter ?
                        <RecruiterData registerRecruiterData={registerRecruiterData}
                                       setRegisterRecruiterData={setRegisterRecruiterData}/> : radioButtonAccountType === AccountType.student ?
                            <StudentData technologies={technologies} registerTechnologyData={registerTechnologyData}
                                         setRegisterTechnologyData={setRegisterTechnologyData}
                                         registerStudentData={registerStudentData}
                                         setRegisterStudentData={setRegisterStudentData}/> : null}
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
        </>
    );
}

export default Register;