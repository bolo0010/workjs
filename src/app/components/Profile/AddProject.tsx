import Modal from "react-bootstrap/esm/Modal";
import {Button, Container, Form} from "react-bootstrap";
import {ModalProps, ResponseMessage} from "../../../types/interfaces";
import React, {FormEvent, useState} from "react";
import './AddProject.css'
import {ProjectData} from "../../../types/custom";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import {useNavigate} from "react-router-dom";

const AddProject = ({showModal, handleClose}: ModalProps) => {
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState<ProjectData>({
        name: "",
        description: "",
        demo_link: "",
        dev_link: ""
    });

    const formSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response: AxiosResponse<ResponseMessage> = await axios({
                method: 'POST',
                url: `${API_URL}api/projects`,
                withCredentials: true,
                data: projectData
            });
            setProjectData({
                name: "",
                description: "",
                demo_link: "",
                dev_link: ""
            })
            handleClose(response.data.message);
            window.location.reload();
        } catch (err: any) {
            if (err.response.status === 401) {
                navigate('/', {state: {message: "Sesja wygasła lub nie została ustanowiona."}, replace: true});
                sessionStorage.clear();
                return;
            }
            handleClose(err.response.data.message || err.message);
        }
    }

    const requiredInput = (
        <span className='add-project__required'>*</span>
    )

    return (
        <div className="add-project">
            <Modal show={showModal} onHide={() => handleClose('')}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj projekt</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formNameProject">
                            <Form.Label className="fs-5">Nazwa projektu{requiredInput}</Form.Label>
                            <Form.Control type="text" required={true} value={projectData.name}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectData({
                                              ...projectData,
                                              name: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescriptionProject">
                            <Form.Label className="fs-5">Opis projektu{requiredInput}</Form.Label>
                            <Form.Control as='textarea' rows={3} required={true} value={projectData.description}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectData({
                                              ...projectData,
                                              description: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRepoLinkProject">
                            <Form.Label className="fs-5">Link do repozytorium kodu{requiredInput}</Form.Label>
                            <Form.Control type="url" required={true} value={projectData.dev_link}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectData({
                                              ...projectData,
                                              dev_link: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDemoLinkProject">
                            <Form.Label className="fs-5">Link do wersji demonstracyjnej{requiredInput}</Form.Label>
                            <Form.Control type="url" required={true} value={projectData.demo_link}
                                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectData({
                                              ...projectData,
                                              demo_link: e.target.value
                                          })}/>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Pola oznaczonone {requiredInput} są wymagane.
                        </Form.Text>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleClose('')}>Anuluj</Button>
                            <Button variant="primary" type='submit'>Dodaj</Button>
                        </Modal.Footer>
                    </Form>
                </Container>
            </Modal>
        </div>
    );
}

export default AddProject;