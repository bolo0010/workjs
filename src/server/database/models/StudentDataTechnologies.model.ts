import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    IsUUID,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import {Optional} from "sequelize";
import Technologies from "./Technologies.model";
import StudentData from "./StudentData.model";
import {StudentDataTechnologiesModel} from '../../../types/interfaces';

interface StudentDataTechnologiesModelCreation extends Optional<StudentDataTechnologiesModel, 'id' | 'skills'> {
}

@Table({
    freezeTableName: true,
    tableName: 'student_data_technologies',
    initialAutoIncrement: '1',
    timestamps: false
})
class StudentDataTechnologies extends Model<StudentDataTechnologiesModel, StudentDataTechnologiesModelCreation> {
    @PrimaryKey
    @AllowNull(false)
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    knowledge!: number;

    @AllowNull(true)
    @Column(DataType.TEXT)
    skills!: string;

    @AllowNull(false)
    @ForeignKey(() => Technologies)
    @Column(DataType.NUMBER)
    id_technology!: number;

    @AllowNull(false)
    @ForeignKey(() => StudentData)
    @IsUUID(4)
    @Column(DataType.STRING)
    id_student_data!: string;

    @BelongsTo(() => StudentData, 'id_student_data')
    student_data!: StudentData

    @BelongsTo(() => Technologies, 'id_technology')
    technologies!: Technologies
}

export default StudentDataTechnologies;