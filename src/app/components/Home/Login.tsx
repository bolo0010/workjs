import React, {useState} from "react";
import {Button, Form, Stack} from "react-bootstrap";
import './Login.css';
import {Link} from "react-router-dom";
import Message from "../partials/Message/Message";

const Login = () => {
    const [message, setMessage]= useState<string>('');

    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000}/> : null}
            <div className="form">
                <Form>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label column="lg">Adres Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label column="lg">Hasło</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Hasło"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginRememberCheckbox">
                        <Form.Check type="checkbox" label="Zapamiętaj mnie"/>
                    </Form.Group>
                    <Stack direction="horizontal">
                        <Button variant="primary" type="submit" >
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