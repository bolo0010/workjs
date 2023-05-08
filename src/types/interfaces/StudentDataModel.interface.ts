export interface StudentDataModel {
    id: string;
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