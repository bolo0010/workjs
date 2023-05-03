import {SelectedStudentInList} from "./SelectedStudentInList.interface";

export interface MainListProps {
    setSelectedStudent: (selectedStudent: SelectedStudentInList | ((prevVar: SelectedStudentInList) => SelectedStudentInList)) => void;
    changeTab: (tab: string) => void;
}