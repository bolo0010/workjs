import React, {useState} from "react";
import {Button, Stack, Tab, Tabs} from "react-bootstrap";
import MainList from "./MainList";
import PrivateList from "./PrivateList";
import {SelectedStudentInList} from "../../../types/interfaces";
import StudentProfile from "../Profile/StudentProfile";
import Projects from "../Profile/Projects";
import './List.css';

const List = () => {
    const [selectedStudent, setSelectedStudent] = useState<SelectedStudentInList>({
        id: '',
        first_name: '',
        second_name: ''
    })
    const [selectedTab, setSelectedTab] = useState<string>('main_list');

    const changeTab = (tab: string | null) => {
        setSelectedTab(tab ?? 'main_list')
    }

    return (
        <div className="list">
            <Stack direction='vertical'>
                <Tabs
                    activeKey={selectedTab}
                    id="list_tab"
                    className="mb-3 w-100"
                    onSelect={(tab) => changeTab(tab)}
                >
                    <Tab eventKey='main_list' title="Lista studentów" className='list__tab'>
                        <MainList setSelectedStudent={setSelectedStudent} changeTab={changeTab}/>
                    </Tab>
                    <Tab eventKey='private_list' title="Moja lista" className='list__tab'>
                        <PrivateList setSelectedStudent={setSelectedStudent} changeTab={changeTab}/>
                    </Tab>
                    <Tab eventKey='profile_student_in_list' title={`Profil ${selectedStudent.first_name} ${selectedStudent.second_name}`} className='list__tab' disabled={selectedStudent.id === ''}>
                        <StudentProfile id={selectedStudent.id}/>
                    </Tab>
                    <Tab eventKey='student_projects_in_list' title={`Projekty ${selectedStudent.first_name} ${selectedStudent.second_name}`} className='list__tab' disabled={selectedStudent.id === ''}>
                        <Projects id={selectedStudent.id}/>
                    </Tab>
                </Tabs>
                <Stack direction='horizontal' className='position-absolute top-0 end-0'>
                    <Button className='profile__button btn-sm' variant="outline-primary">Wyloguj się</Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default List;