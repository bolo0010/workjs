import {RegisterStateRecruiter} from "./RegisterStates.interface";

export interface RecruiterDataProps {
    setRegisterRecruiterData: (registerRecruiterData: RegisterStateRecruiter | ((prevVar: RegisterStateRecruiter) => RegisterStateRecruiter)) => void;
    registerRecruiterData: RegisterStateRecruiter;
}