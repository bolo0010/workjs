import {RegisterStateStudent, RegisterStateTechnology} from "./RegisterStates.interface";
import {TechnologiesModel} from "./TechnologiesModel.interface";

export interface StudentDataProps {
    technologies: TechnologiesModel[];
    setRegisterStudentData: (registerStudentData: RegisterStateStudent | ((prevVar: RegisterStateStudent) => RegisterStateStudent)) => void;
    registerStudentData: RegisterStateStudent;
    setRegisterTechnologyData: (registerTechnologyData: RegisterStateTechnology[] | [] | ((prevVar: RegisterStateTechnology[] | []) => RegisterStateTechnology[] | [])) => void;
    registerTechnologyData: RegisterStateTechnology[] | [];
}