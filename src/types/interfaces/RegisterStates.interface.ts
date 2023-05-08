export interface RegisterState {
    first_name: string,
    second_name: string,
    email: string,
    phone_number: string,
    password1: string,
    password2: string,
}

export interface RegisterStateStudent {
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
}

export interface RegisterStateRecruiter {
    organisation: string,
    position: string,
    organisation_link: string,
}

export interface RegisterStateTechnology {
    id_technology: number,
    knowledge: number,
    skills?: string
}