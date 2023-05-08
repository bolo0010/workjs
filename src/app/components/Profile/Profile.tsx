import React, {useState} from "react";
import {Button, Stack, Tab, Tabs} from "react-bootstrap";
import './Profile.css'
import Projects from "./Projects";
import AddProject from "./AddProject";
import EditProfile from "./EditProfile";
import StudentProfile from "./StudentProfile";
import {AccountType} from "../../../types/enums";
import useReactRouteCheck from "../../hooks/useReactRouteCheck";
import useLogout from "../../hooks/useLogout";
import Message from "../partials/Message/Message";

const Profile = () => {
    const [showModalAddProject, setShowModalAddProject] = useState<boolean>(false);
    const [showModalEditProfile, setShowModalEditProfile] = useState<boolean>(false);
    const [userId, setUserId] = useState<string | undefined>(undefined)
    const [message, setMessage] = useState<string>('');

    useReactRouteCheck(setUserId, AccountType.student)
    const logout = useLogout();
    const handleCloseModalAddProject = (message: string) => {
        setShowModalAddProject(false);
        setMessage(message)
    };
    const handleShowModalAddProject = () => setShowModalAddProject(true);
    const handleCloseModalEditProfile = (message: string) => {
        setShowModalEditProfile(false);
        setMessage(message)
    };
    const handleShowModalEditProfile = () => setShowModalEditProfile(true);

    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000}/> : null}
            <div className="profile">
                <AddProject showModal={showModalAddProject} handleClose={handleCloseModalAddProject}/>
                <EditProfile showModal={showModalEditProfile} handleClose={handleCloseModalEditProfile}
                             id={userId as string}/>
                <Stack direction='vertical'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="tab_profile"
                        className="mb-3 w-100"
                    >
                        <Tab eventKey="profile" title="Profil" className='profile__tab'>
                            <StudentProfile id={userId}/>
                        </Tab>
                        <Tab eventKey="projects" title="Projekty" className='profile__tab'>
                            <Projects id={userId}/>
                        </Tab>
                    </Tabs>
                    <Stack direction='horizontal' className='position-absolute top-0 end-0'>
                        <Button className='profile__button btn-sm' variant="primary"
                                onClick={() => handleShowModalEditProfile()}>Edytuj profil</Button>
                        <Button className='profile__button btn-sm' variant="primary"
                                onClick={() => handleShowModalAddProject()}>Dodaj projekt</Button>
                        <Button className='profile__button btn-sm' variant="outline-primary" onClick={logout}>Wyloguj
                            się</Button>
                    </Stack>
                </Stack>
            </div>
        </>
    );
}

export default Profile;