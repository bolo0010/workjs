import Modal from "react-bootstrap/esm/Modal";
import {Accordion, Button, Container, Form} from "react-bootstrap";
import {ModalProps, TechnologiesModel} from "../../../types/interfaces";
import React, {useState} from "react";
import './EditProfile.css'
import {TechnologiesTypes} from "../../../types/enums";

const EditProfile = ({showModal, handleClose}: ModalProps) => {
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
        <span className='edit-profile__required'>*</span>
    )

    return (
        <div className="edit-profile">
            <Modal show={showModal} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Edytuj profil</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-4">Adres email{requiredInput}</Form.Label>
                            <Form.Control type="email" required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label className="fs-4">Numer telefonu{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true} minLength={9} maxLength={9}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUniversity">
                            <Form.Label className="fs-4">Nazwa szkoły wyższej{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formField">
                            <Form.Label className="fs-4">Kierunek{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true}/>
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
                        <Form.Text className="text-muted">
                            Pola oznaczonone {requiredInput} są wymagane.
                        </Form.Text>
                    </Form>
                </Container>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Anuluj</Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>Edytuj</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditProfile;