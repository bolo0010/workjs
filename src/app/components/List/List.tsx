import React, {useEffect, useState} from "react";
import {Button, Stack, Tab, Tabs} from "react-bootstrap";
import MainList from "./MainList";
import {SelectedStudentInList} from "../../../types/interfaces";
import StudentProfile from "../Profile/StudentProfile";
import Projects from "../Profile/Projects";
import './List.css';
import {AccountType} from "../../../types/enums";
import useReactRouteCheck from "../../hooks/useReactRouteCheck";
import useLogout from "../../hooks/useLogout";
import {Session} from "../../config/session";
import {useNavigate} from "react-router-dom";
import useUpdateWindowInnerWidth from "../../hooks/useUpdateWindowInnerWidth";

const List = () => {
    const navigate = useNavigate();

    const [selectedStudent, setSelectedStudent] = useState<SelectedStudentInList>({
        id: '',
        first_name: '',
        second_name: ''
    })
    const [selectedTab, setSelectedTab] = useState<string>('main_list');
    const [userId, setUserId] = useState<string | undefined>(undefined)
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);


    useEffect(() => {
        const promise = Session();
        promise.catch(() => {
            navigate('/', {state: {message: "Sesja wygasła lub nie została ustanowiona."}, replace: true});
            sessionStorage.clear();
        })
    }, []);

    useReactRouteCheck({setUserId, accountType: AccountType.recruiter})
    useUpdateWindowInnerWidth({setInnerWidth});
    const logout = useLogout();

    const changeTab = (tab: string | null) => {
        setSelectedTab(tab ?? 'main_list')
    }

    return (
        <div className="list">
            <Stack direction='vertical'>
                <Tabs
                    activeKey={selectedTab}
                    id="list_tab"
                    className={'mb-3 w-100' + (innerWidth > 768 ? '' : ' mt-5 pt-2 border-top')}
                    onSelect={(tab) => changeTab(tab)}
                >
                    <Tab eventKey='main_list' title="Lista studentów" className='list__tab'>
                        <MainList setSelectedStudent={setSelectedStudent} changeTab={changeTab}/>
                    </Tab>
                    <Tab eventKey='profile_student_in_list'
                         title={`Profil ${selectedStudent.first_name} ${selectedStudent.second_name}`}
                         className='list__tab'
                         disabled={selectedStudent.id === ''}
                    >
                        <StudentProfile id={selectedStudent.id} changed={false}/>
                    </Tab>
                    <Tab eventKey='student_projects_in_list'
                         title={`Projekty ${selectedStudent.first_name} ${selectedStudent.second_name}`}
                         className='list__tab'
                         disabled={selectedStudent.id === ''}
                    >
                        <Projects id={selectedStudent.id} changed={false}/>
                    </Tab>
                </Tabs>
                <Stack direction='horizontal' className='position-absolute top-0 end-0'>
                    <Button className='list_button btn-sm' variant="outline-primary" onClick={logout}>Wyloguj
                        się</Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default List;