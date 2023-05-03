import {SelectedStudentInList} from "./SelectedStudentInList.interface";

export interface PrivateListProps {
    setSelectedStudent: (selectedStudent: SelectedStudentInList | ((prevVar: SelectedStudentInList) => SelectedStudentInList)) => void;
    changeTab: (tab: string) => void;
}