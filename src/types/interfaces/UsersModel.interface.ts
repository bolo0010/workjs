import {AccountType} from "../enums";

export interface UsersModel {
    id?: string;
    first_name: string;
    second_name: string;
    email: string;
    phone_number: string;
    created_at?: Date;
    account_type: AccountType;
    id_student_data?: string | null,
    id_recruiter_data?: string | null,
    hash: string,
    salt: string
}