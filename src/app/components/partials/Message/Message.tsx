import React, {useState} from "react";
import Toast from 'react-bootstrap/Toast';
import {MessageProps} from "../../../../types/interfaces";
import {ToastContainer} from "react-bootstrap";
import useMessageTimeout from "../../../hooks/useMessageTimeout";

const Message = ({title, message, time}: MessageProps) => {
    const [show, setShow] = useState(true);
    useMessageTimeout(setShow, message, time);

    return (
        <ToastContainer
            className="p-3"
            position='top-center'
            style={{zIndex: 1}}
        >
            <Toast show={show} onClose={() => setShow(false)}>
                <Toast.Header closeButton={true}>
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Message;