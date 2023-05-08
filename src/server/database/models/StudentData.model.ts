import {
    AllowNull,
    BelongsToMany,
    Column,
    DataType,
    Default,
    IsDate,
    IsUUID,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique
} from 'sequelize-typescript';
import {Optional, UUIDV4} from "sequelize";
import StudentDataTechnologies from "./StudentDataTechnologies.model";
import Technologies from "./Technologies.model";
import {StudentDataModel} from "../../../types/interfaces";

interface StudentDataModelCreation extends Optional<StudentDataModel, 'id'> {
}

@Table({
    freezeTableName: true,
    tableName: 'student_data',
    timestamps: false
})
class StudentData extends Model<StudentDataModel, StudentDataModelCreation> {
    @PrimaryKey
    @AllowNull(false)
    @Unique(true)
    @IsUUID(4)
    @Default(UUIDV4)
    @Column(DataType.STRING)
    id!: string;

    @Length({min: 1, max: 200})
    @AllowNull(false)
    @Column(DataType.STRING)
    university!: string;

    @Length({min: 1, max: 200})
    @AllowNull(false)
    @Column(DataType.STRING)
    field!: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    about!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    work_experience!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    certificates!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    practices!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    courses!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    activities!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    hobby!: string;

    @AllowNull(true)
    @Column(DataType.TEXT)
    languages!: string;

    @IsDate
    @AllowNull(false)
    @Column(DataType.DATE)
    expected_graduation_date!: Date;

    @BelongsToMany(() => Technologies, () => StudentDataTechnologies)
    technologies!: Technologies[]
}

export default StudentData;