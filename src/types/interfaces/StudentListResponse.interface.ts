export interface StudentListResponse {
    id: string,
    first_name: string,
    second_name: string,
    student_data: {
        university: string,
        field: string,
        technologies: Array<{ name: string }>
    }
    projects: Array<{ id: string }>
}