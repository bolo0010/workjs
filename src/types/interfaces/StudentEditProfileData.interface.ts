export interface StudentEditProfileData {
    first_name: string,
    second_name: string,
    email: string,
    phone_number: string,
    id_student_data: string;
    student_data: {
        university: string;
        field: string;
        about: string;
        work_experience?: string;
        certificates?: string;
        practices?: string
        courses?: string
        activities?: string
        hobby?: string
        languages?: string
        expected_graduation_date: Date;
    }
}