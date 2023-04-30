import { AccountType } from "../enums";

export interface UsersModel {
    id: string;
    first_name: string;
    second_name: string;
    email: string;
    phone_number: string;
    createdAt: Date;
    account_type: AccountType;
    id_student_data: string,
    id_recruiter_data: string,
    id_projects: string,
    hash: string,
    salt: string
}