import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    IsDate,
    IsEmail,
    IsUUID,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique
} from 'sequelize-typescript';
import {ENUM, Optional, UUIDV4} from "sequelize";
import Projects from "./Projects.model";
import RecruiterData from "./RecruiterData.model";
import StudentData from "./StudentData.model";
import {UsersModel} from "../../../types/interfaces";
import {AccountType} from "../../../types/enums";

interface UsersModelCreation extends Optional<UsersModel, 'id' | 'id_student_data' | 'id_recruiter_data'> {
}

@Table({
    freezeTableName: true,
    tableName: 'users',
    timestamps: false
})
class Users extends Model<UsersModel, UsersModelCreation> {
    @PrimaryKey
    @AllowNull(false)
    @IsUUID(4)
    @Default(UUIDV4)
    @Column(DataType.STRING)
    id!: string;

    @Length({min: 1, max: 50})
    @AllowNull(false)
    @Column(DataType.STRING)
    first_name!: string;

    @Length({min: 1, max: 75})
    @AllowNull(false)
    @Column(DataType.STRING)
    second_name!: string;

    @Length({min: 1, max: 100})
    @AllowNull(false)
    @IsEmail
    @Unique(true)
    @Column(DataType.STRING)
    email!: string;

    @Length({min: 9, max: 9})
    @AllowNull(false)
    @Unique(true)
    @Column(DataType.STRING)
    phone_number!: string;

    @IsDate
    @AllowNull(false)
    @Default(new Date())
    @Column(DataType.DATE)
    created_at!: Date;

    @AllowNull(false)
    @Column(ENUM<AccountType>(AccountType.student, AccountType.recruiter))
    account_type!: AccountType;

    @Length({min: 128, max: 128})
    @AllowNull(false)
    @Column(DataType.CHAR)
    hash!: string;

    @Length({min: 64, max: 64})
    @AllowNull(false)
    @Column(DataType.CHAR)
    salt!: string;

    @AllowNull(true)
    @ForeignKey(() => StudentData)
    @IsUUID(4)
    @Column(DataType.STRING)
    id_student_data!: string | null;

    @AllowNull(true)
    @ForeignKey(() => RecruiterData)
    @IsUUID(4)
    @Column(DataType.STRING)
    id_recruiter_data!: string | null;

    @BelongsTo(() => StudentData, "id_student_data")
    student_data!: StudentData;

    @BelongsTo(() => RecruiterData, "id_recruiter_data")
    recruiter_data!: RecruiterData;

    @HasMany(() => Projects, "id_student")
    projects?: Projects[]
}

export default Users;