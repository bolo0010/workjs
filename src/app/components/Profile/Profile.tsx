import React, {useState} from "react";
import {Accordion, Button, Card, Col, Row, Stack, Tab, Tabs} from "react-bootstrap";
import './Profile.css'
import Projects from "./Projects";
import AddProject from "./AddProject";
import EditProfile from "./EditProfile";
import StudentProfile from "./StudentProfile";

const Profile = () => {
    const [showModalAddProject, setShowModalAddProject] = useState<boolean>(false);
    const [showModalEditProfile, setShowModalEditProfile] = useState<boolean>(false);

    const handleCloseModalAddProject = () => setShowModalAddProject(false);
    const handleShowModalAddProject = () => setShowModalAddProject(true);
    const handleCloseModalEditProfile = () => setShowModalEditProfile(false);
    const handleShowModalEditProfile = () => setShowModalEditProfile(true);

    return (
        <div className="profile">
            <AddProject showModal={showModalAddProject} handleClose={handleCloseModalAddProject}/>
            <EditProfile showModal={showModalEditProfile} handleClose={handleCloseModalEditProfile}/>
            <Stack direction='vertical'>
                <Tabs
                    defaultActiveKey="profile"
                    id="tab_profile"
                    className="mb-3 w-100"
                >
                    <Tab eventKey="profile" title="Profil" className='profile__tab'>
                        <StudentProfile id={'sadasddsa'}/>
                    </Tab>
                    <Tab eventKey="projects" title="Projekty" className='profile__tab'>
                        <Projects id={'sadasddsa'}/>
                    </Tab>
                </Tabs>
                <Stack direction='horizontal' className='position-absolute top-0 end-0'>
                    <Button className='profile__button btn-sm' variant="primary" onClick={() => handleShowModalEditProfile()}>Edytuj profil</Button>
                    <Button className='profile__button btn-sm' variant="primary" onClick={() => handleShowModalAddProject()}>Dodaj projekt</Button>
                    <Button className='profile__button btn-sm' variant="outline-primary">Wyloguj się</Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default Profile;