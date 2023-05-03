import Modal from "react-bootstrap/esm/Modal";
import {Button, Container, Form} from "react-bootstrap";
import {ModalProps} from "../../../types/interfaces";
import React from "react";
import './AddProject.css'

const AddProject = ({showModal, handleClose}: ModalProps) => {
    const requiredInput = (
        <span className='add-project__required'>*</span>
    )

    return (
        <div className="add-project">
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj projekt</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formNameProject">
                            <Form.Label className="fs-5">Nazwa projektu{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescriptionProject">
                            <Form.Label className="fs-5">Opis projektu{requiredInput}</Form.Label>
                            <Form.Control as='textarea' rows={3} required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRepoLinkProject">
                            <Form.Label className="fs-5">Link do repozytorium kodu{requiredInput}</Form.Label>
                            <Form.Control type="url" required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDemoLinkProject">
                            <Form.Label className="fs-5">Link do wersji demonstracyjnej{requiredInput}</Form.Label>
                            <Form.Control type="url" required={false}/>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Pola oznaczonone {requiredInput} są wymagane.
                        </Form.Text>
                    </Form>
                </Container>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Anuluj</Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>Dodaj</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddProject;