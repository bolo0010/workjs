import {AccountType} from "../enums";
import {RegisterStateTechnology} from "./RegisterStates.interface";

export interface PostDataCreateUser {
    first_name: string,
    second_name: string,
    email: string,
    phone_number: string,
    account_type: AccountType,
    password: string,
    university: string,
    field: string,
    about: string,
    work_experience?: string,
    certificates?: string,
    practices?: string,
    courses?: string,
    activities?: string,
    hobby?: string,
    languages?: string,
    expected_graduation_date: Date,
    organisation: string,
    position: string,
    organisation_link: string,
    technologies: RegisterStateTechnology[];
}