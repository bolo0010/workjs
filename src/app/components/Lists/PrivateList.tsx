import React, {useState} from "react";
import {PrivateListProps, StudentInList} from "../../../types/interfaces";
import TableView from "./TableView";
import {ListType} from "../../../types/enums";

const PrivateList = ({setSelectedStudent, changeTab}:PrivateListProps) => {
    const [studentList, setStudentList] = useState<StudentInList[]>([
        {
            id: "sdads",
            first_name: "Ania",
            second_name: "Nowak",
            university: "Uniwersytet Łódzki",
            field: "Informatyka Ekonomiczna",
            projects_count: 4,
            technologies: ['React', 'Express'],
        },
        {
            id: "ewrfd",
            first_name: "Jan",
            second_name: "Kowal",
            university: "Uniwersytet Łódzki",
            field: "Informatyka Ekonomiczna",
            projects_count: 4,
            technologies: ['React', 'Express'],
        },
        {
            id: "cxv",
            first_name: "Zieloń",
            second_name: "Kudroń",
            university: "Uniwersytet Łódzki",
            field: "Informatyka Ekonomiczna",
            projects_count: 4,
            technologies: ['React', 'Express'],
        },
        {
            id: "gdfg",
            first_name: "Bedoń",
            second_name: "Ajaka",
            university: "Uniwersytet Łódzki",
            field: "Informatyka Ekonomiczna",
            projects_count: 4,
            technologies: ['React', 'Express'],
        }
    ]);

    return (
        <div className="private-list">
           <TableView student_list={studentList} list_type={ListType.private} setSelectedStudent={setSelectedStudent} changeTab={changeTab}/>
        </div>
    )
}

export default PrivateList;