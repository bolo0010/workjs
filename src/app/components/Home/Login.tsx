import React, {FormEvent, useEffect, useState} from "react";
import {Button, Form, Stack} from "react-bootstrap";
import './Login.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Message from "../partials/Message/Message";
import {LoginDataState, ResponseMessage} from "../../../types/interfaces";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import {Session} from "../../config/session";
import {AccountType} from "../../../types/enums";

const Login = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState<string>('');
    const [loginData, setLoginData] = useState<LoginDataState>({
        email: '',
        password: '',
        remember: false
    });
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setMessage(state.message as string)
            window.history.replaceState({}, document.title)
        }
    }, [])
    const getLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response: AxiosResponse<ResponseMessage> = await axios({
                method: 'POST',
                url: `${API_URL}api/auth/login`,
                withCredentials: true,
                data: {
                    email: loginData.email,
                    password: loginData.password,
                    remember: loginData.remember
                }
            });
            if (response.data.success) {
                await Session();
                const {account_type} = JSON.parse(sessionStorage.getItem('user') as string);
                if (account_type === AccountType.student) navigate('/profile', {replace: true});
                else if (account_type === AccountType.recruiter) navigate('/list', {replace: true});
            }
        } catch (err: any) {
            console.log(err.message);
            setMessage(err.response.data.message || err.message);
        }
    }

    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000} setMessage={setMessage}/> : null}
            <div className="form">
                <Form onSubmit={getLogin}>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label column="lg">Adres Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Email" required value={loginData.email}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({
                                          ...loginData,
                                          email: e.target.value
                                      })}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label column="lg">Hasło</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Hasło" required value={loginData.password}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({
                                          ...loginData,
                                          password: e.target.value
                                      })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginRememberCheckbox">
                        <Form.Check type="checkbox" label="Zapamiętaj mnie" checked={loginData.remember}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({
                                        ...loginData,
                                        remember: e.target.checked
                                    })}/>
                    </Form.Group>
                    <Stack direction="horizontal">
                        <Button variant="primary" type="submit">
                            Zaloguj się
                        </Button>
                        <Button variant="link" type="button" className="ms-auto">
                            <Link to='/register'>Zarejestruj się</Link>
                        </Button>
                    </Stack>
                </Form>
            </div>
        </>
    );
}

export default Login;