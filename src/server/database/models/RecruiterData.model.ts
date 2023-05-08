import {
    AllowNull,
    Column,
    DataType,
    Default,
    IsUrl,
    IsUUID,
    Length,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import {Optional, UUIDV4} from "sequelize";
import {RecruiterDataModel} from "../../../types/interfaces";

interface RecruiterDataModelCreation extends Optional<RecruiterDataModel, 'id'> {
}

@Table({
    freezeTableName: true,
    tableName: 'recruiter_data',
    timestamps: false
})
class RecruiterData extends Model<RecruiterDataModel, RecruiterDataModelCreation> {
    @PrimaryKey
    @AllowNull(false)
    @IsUUID(4)
    @Default(UUIDV4)
    @Column(DataType.STRING)
    id!: string;

    @Length({min: 1, max: 200})
    @AllowNull(false)
    @Column(DataType.STRING)
    organisation!: string;

    @Length({min: 1, max: 150})
    @AllowNull(false)
    @Column(DataType.STRING)
    position!: string;

    @Length({min: 1, max: 2048})
    @AllowNull(false)
    @IsUrl
    @Column(DataType.STRING)
    organisation_link!: string;
}

export default RecruiterData;