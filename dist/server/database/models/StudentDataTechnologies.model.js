"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var Technologies_model_1 = __importDefault(require("./Technologies.model"));
var StudentData_model_1 = __importDefault(require("./StudentData.model"));
var StudentDataTechnologies = /** @class */ (function (_super) {
    __extends(StudentDataTechnologies, _super);
    function StudentDataTechnologies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.AllowNull)(false),
        sequelize_typescript_1.AutoIncrement,
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
        __metadata("design:type", Number)
    ], StudentDataTechnologies.prototype, "id", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
        __metadata("design:type", Number)
    ], StudentDataTechnologies.prototype, "knowledge", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentDataTechnologies.prototype, "skills", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.ForeignKey)(function () { return Technologies_model_1.default; }),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.NUMBER),
        __metadata("design:type", Number)
    ], StudentDataTechnologies.prototype, "id_technology", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.ForeignKey)(function () { return StudentData_model_1.default; }),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], StudentDataTechnologies.prototype, "id_student_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return StudentData_model_1.default; }, 'id_student_data'),
        __metadata("design:type", StudentData_model_1.default)
    ], StudentDataTechnologies.prototype, "student_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return Technologies_model_1.default; }, 'id_technology'),
        __metadata("design:type", Technologies_model_1.default)
    ], StudentDataTechnologies.prototype, "technologies", void 0);
    StudentDataTechnologies = __decorate([
        (0, sequelize_typescript_1.Table)({
            freezeTableName: true,
            tableName: 'student_data_technologies',
            timestamps: false
        })
    ], StudentDataTechnologies);
    return StudentDataTechnologies;
}(sequelize_typescript_1.Model));
exports.default = StudentDataTechnologies;
