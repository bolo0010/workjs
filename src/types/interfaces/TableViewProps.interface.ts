import {StudentInList} from "./StudentInList.interface";
import {ListType} from "../enums";
import {SelectedStudentInList} from "./SelectedStudentInList.interface";

export interface TableViewProps {
    student_list: StudentInList[],
    list_type: ListType,
    changeTab: (tab: string) => void;
    setSelectedStudent: (selectedStudent: SelectedStudentInList | ((prevVar: SelectedStudentInList) => SelectedStudentInList)) => void;
}