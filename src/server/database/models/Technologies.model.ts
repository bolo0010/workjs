import {ENUM, Optional} from "sequelize";
import {AllowNull, Column, DataType, Length, Model, PrimaryKey, Table} from 'sequelize-typescript';
import {TechnologiesModel} from "../../../types/interfaces";
import {TechnologiesTypes} from "../../../types/enums";

interface TechnologiesModelCreation extends Optional<TechnologiesModel, 'id'> {}

@Table({
    freezeTableName: true,
    tableName: 'technologies',
    timestamps: false
})
class Technologies extends Model<TechnologiesModelCreation, TechnologiesModel> {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @Length({min: 1, max: 200})
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @AllowNull(false)
    @Column(ENUM<TechnologiesTypes>(TechnologiesTypes.framework,
            TechnologiesTypes.library, TechnologiesTypes.other))
    type!: TechnologiesTypes;
}

export default Technologies;