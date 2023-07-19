import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import {YesNoProps} from "../../../../types/interfaces";

const YesNo = ({title, text, handleClose, show}: YesNoProps) => {
    return (
        <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>Nie</Button>
                    <Button variant="primary" onClick={() => handleClose(true)}>Tak</Button>
                </Modal.Footer>
        </Modal>
    );
}

export default YesNo;