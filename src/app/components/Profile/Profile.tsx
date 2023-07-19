import React, {useEffect, useState} from "react";
import {Button, Dropdown, Stack, Tab, Tabs} from "react-bootstrap";
import './Profile.css'
import Projects from "./Projects";
import AddProject from "./AddProject";
import EditProfile from "./EditProfile";
import StudentProfile from "./StudentProfile";
import {AccountType} from "../../../types/enums";
import useReactRouteCheck from "../../hooks/useReactRouteCheck";
import useLogout from "../../hooks/useLogout";
import Message from "../partials/Message/Message";
import {Session} from "../../config/session";
import {useNavigate} from "react-router-dom";
import useUpdateWindowInnerWidth from "../../hooks/useUpdateWindowInnerWidth";

const Profile = () => {
    const navigate = useNavigate();

    const [showModalAddProject, setShowModalAddProject] = useState<boolean>(false);
    const [showModalEditProfile, setShowModalEditProfile] = useState<boolean>(false);
    const [studentProfileChanged, setStudentProfileChanged] = useState<boolean>(false);
    const [projectsChanged, setProjectsChanged] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [userId, setUserId] = useState<string | undefined>(undefined)
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const promise = Session();
        promise.catch(() => {
            navigate('/', {state: {message: "Sesja wygasła lub nie została ustanowiona."}, replace: true});
            sessionStorage.clear();
        })
    }, []);

    useReactRouteCheck({setUserId, accountType: AccountType.student})
    useUpdateWindowInnerWidth({setInnerWidth});
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
            {message ? <Message message={message} setMessage={setMessage} title='Informacja' time={5000}/> : null}
            <div className="profile">
                <AddProject showModal={showModalAddProject}
                            handleClose={handleCloseModalAddProject}
                            changed={projectsChanged}
                            setChanged={setProjectsChanged}
                />
                <EditProfile showModal={showModalEditProfile}
                             handleClose={handleCloseModalEditProfile}
                             id={userId as string}
                             changed={studentProfileChanged}
                             setChanged={setStudentProfileChanged}
                />
                <Stack direction='vertical'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="tab_profile"
                        className="mb-3 w-100 profile__tabs"
                    >
                        <Tab eventKey="profile" title="Profil">
                            <StudentProfile id={userId} changed={studentProfileChanged}/>
                        </Tab>
                        <Tab eventKey="projects" title="Projekty">
                            <Projects id={userId} changed={projectsChanged}/>
                        </Tab>
                    </Tabs>
                    <Stack direction='horizontal' className='position-absolute top-0 end-0'>
                        {
                            innerWidth > 768 ? (
                                <>
                                    <Button className='profile__button btn-sm' variant="primary"
                                            onClick={() => handleShowModalEditProfile()}>Edytuj profil</Button>
                                    <Button className='profile__button btn-sm' variant="primary"
                                            onClick={() => handleShowModalAddProject()}>Dodaj projekt</Button>
                                    <Button className='profile__button btn-sm' variant="outline-primary" onClick={logout}>Wyloguj
                                        się</Button>
                                </>
                            ) : (
                                <Dropdown className="profile__dropdown">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                                        Menu
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleShowModalEditProfile()}>Edytuj profil</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleShowModalAddProject()}>Dodaj projekt</Dropdown.Item>
                                        <Dropdown.Item onClick={logout}>Wyloguj się</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }

                    </Stack>
                </Stack>
            </div>
        </>
    );
}

export default Profile;