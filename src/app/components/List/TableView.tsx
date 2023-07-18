// noinspection SpellCheckingInspection

import React from "react";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import {TableViewProps} from "../../../types/interfaces";
import './TableView.css';

const TableView = ({student_list, list_type, setSelectedStudent, changeTab}: TableViewProps) => {
    return (
        <Table striped bordered hover className='mx-auto my-3 table-view'>
            <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Uczelnia</th>
                <th>Kierunek</th>
                <th>Ilość projektów</th>
                <th>Znane technologie</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                student_list.map(student => {
                        return (
                            <tr key={student.id + "_" + list_type}>
                                <td>{student.first_name}</td>
                                <td>{student.second_name}</td>
                                <td>{student.university}</td>
                                <td>{student.field}</td>
                                <td>{student.projects_count}</td>
                                <td>{student.technologies.map((technology, i, row) =>
                                    i + 1 === row.length ? technology : technology + ', '
                                )}</td>
                                <td>
                                    <Button className='btn-sm me-1' variant="primary" onClick={() => {
                                        setSelectedStudent({
                                            id: student.id,
                                            first_name: student.first_name,
                                            second_name: student.second_name
                                        })
                                        changeTab('profile_student_in_list')
                                    }}>Wyświetl profil</Button>
                                </td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </Table>
    )
}

export default TableView;