import {Form} from "react-bootstrap";
import React from "react";
import {RecruiterDataProps} from "../../../types/interfaces/RecruiterDataProps.interface";

const RecruiterData = ({setRegisterRecruiterData, registerRecruiterData}: RecruiterDataProps) => {
    const requiredInput = (
        <span className='register__required'>*</span>
    )

    return (
        <>
            <Form.Group className="mb-3" controlId="formOrganisation">
                <Form.Label className="fs-4">Nazwa organizacji{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="ABC sp z o.o." required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterRecruiterData({
                                  ...registerRecruiterData,
                                  organisation: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label className="fs-4">Stanowisko{requiredInput}</Form.Label>
                <Form.Control type="text" placeholder="Rekruter" required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterRecruiterData({
                                  ...registerRecruiterData,
                                  position: e.target.value
                              })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrganisationLink">
                <Form.Label className="fs-4">Link do organizacji{requiredInput}</Form.Label>
                <Form.Control type="url" placeholder="https://abc.pl" required={true}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisterRecruiterData({
                                  ...registerRecruiterData,
                                  organisation_link: e.target.value
                              })}/>
            </Form.Group>
        </>
    )
}

export default RecruiterData;