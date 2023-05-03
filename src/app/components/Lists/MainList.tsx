import React, {useState} from "react";
import {MainListProps, StudentInList} from "../../../types/interfaces";
import TableView from "./TableView";
import {ListType} from "../../../types/enums";

const MainList = ({setSelectedStudent, changeTab}: MainListProps) => {
    const [studentList, setStudentList] = useState<StudentInList[]>([
        {
            id: "sdads",
            first_name: "Jan",
            second_name: "Nowak",
            university: "Uniwersytet Łódzki",
            field: "Informatyka Ekonomiczna",
            projects_count: 4,
            technologies: ['React', 'Express'],
        }
    ]);

    return (
        <div className="main-list">
            <TableView student_list={studentList} list_type={ListType.main} setSelectedStudent={setSelectedStudent} changeTab={changeTab}/>
        </div>
    );
}

export default MainList;