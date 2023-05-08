export interface StudentProfileData {
    first_name: string,
    second_name: string,
    email: string,
    phone_number: string,
    id_student_data: string;
    student_data: {
        university: string;
        field: string;
        about: string;
        work_experience?: string | null;
        certificates?: string | null;
        practices?: string | null;
        courses?: string | null;
        activities?: string | null;
        hobby?: string | null;
        languages?: string | null;
        expected_graduation_date: Date;
    }
}