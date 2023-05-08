import React, {useEffect, useState} from "react";
import {MainListProps, StudentInList, StudentListResponse} from "../../../types/interfaces";
import TableView from "./TableView";
import {ListType} from "../../../types/enums";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/api_url";
import Message from "../partials/Message/Message";

const MainList = ({setSelectedStudent, changeTab}: MainListProps) => {
    const [studentList, setStudentList] = useState<StudentInList[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        getStudentsList();
    }, [])

    const getStudentsList = async () => {
        try {
            const response: AxiosResponse<StudentListResponse[]> = await axios({
                method: 'GET',
                url: `${API_URL}api/users/all`,
                withCredentials: true,
            })
            if (response.status === 200) {
                const mappedStudentList: StudentInList[] = [];
                response.data.map(student => {
                    mappedStudentList.push({
                        id: student.id,
                        first_name: student.first_name,
                        second_name: student.second_name,
                        university: student.student_data.university,
                        field: student.student_data.field,
                        projects_count: student.projects.length,
                        technologies: student.student_data.technologies.map(technology => technology.name)
                    });
                })
                setStudentList(mappedStudentList)
            }
        } catch (err: any) {
            setMessage(err.response.data.message || err.message);
        }
    }

    return (
        <>
            {message ? <Message message={message} title='Informacja' time={5000}/> : null}
            <div className="main-list">
                <TableView student_list={studentList} list_type={ListType.main} setSelectedStudent={setSelectedStudent}
                           changeTab={changeTab}/>
            </div>
        </>
    );
}

export default MainList;