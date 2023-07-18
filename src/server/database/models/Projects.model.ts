import {
    AllowNull,
    Column,
    DataType,
    Default,
    ForeignKey,
    IsUrl,
    IsUUID,
    Length,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import {Optional, UUIDV4} from "sequelize";
import Users from "./Users.model";
import {ProjectsModel} from "../../../types/interfaces";

interface ProjectsModelCreation extends Optional<ProjectsModel, 'id'> {}

@Table({
    freezeTableName: true,
    tableName: 'projects',
    timestamps: false
})
class Projects extends Model<ProjectsModel, ProjectsModelCreation> {
    @PrimaryKey
    @AllowNull(false)
    @IsUUID(4)
    @Default(UUIDV4)
    @Column(DataType.STRING)
    id!: string;

    @AllowNull(false)
    @ForeignKey(() => Users)
    @IsUUID(4)
    @Column(DataType.STRING)
    id_student!: string;

    @Length({min: 1, max: 200})
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description!: string;

    @Length({min: 1, max: 2048})
    @AllowNull(false)
    @IsUrl
    @Column(DataType.STRING)
    demo_link!: string;

    @Length({min: 1, max: 2048})
    @AllowNull(false)
    @IsUrl
    @Column(DataType.STRING)
    dev_link!: string;
}

export default Projects;