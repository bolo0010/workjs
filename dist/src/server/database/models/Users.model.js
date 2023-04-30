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
var sequelize_1 = require("sequelize");
var Projects_model_1 = __importDefault(require("./Projects.model"));
var RecruiterData_model_1 = __importDefault(require("./RecruiterData.model"));
var StudentData_model_1 = __importDefault(require("./StudentData.model"));
var enums_1 = require("../../../types/enums");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 50 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "first_name", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 75 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "second_name", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 100 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        sequelize_typescript_1.IsEmail,
        (0, sequelize_typescript_1.Unique)(true),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 9, max: 9 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Unique)(true),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "phone_number", void 0);
    __decorate([
        sequelize_typescript_1.IsDate,
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Default)(new Date()),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
        __metadata("design:type", Date)
    ], Users.prototype, "created_at", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)((0, sequelize_1.ENUM)(enums_1.AccountType.student, enums_1.AccountType.recruiter)),
        __metadata("design:type", String)
    ], Users.prototype, "account_type", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 128, max: 128 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.CHAR),
        __metadata("design:type", String)
    ], Users.prototype, "hash", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 64, max: 64 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.CHAR),
        __metadata("design:type", String)
    ], Users.prototype, "salt", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(true),
        (0, sequelize_typescript_1.ForeignKey)(function () { return StudentData_model_1.default; }),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "id_student_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(true),
        (0, sequelize_typescript_1.ForeignKey)(function () { return RecruiterData_model_1.default; }),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], Users.prototype, "id_recruiter_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return StudentData_model_1.default; }, "id_student_data"),
        __metadata("design:type", StudentData_model_1.default)
    ], Users.prototype, "student_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return RecruiterData_model_1.default; }, "id_recruiter_data"),
        __metadata("design:type", RecruiterData_model_1.default)
    ], Users.prototype, "recruiter_data", void 0);
    __decorate([
        (0, sequelize_typescript_1.HasMany)(function () { return Projects_model_1.default; }, "id_student"),
        __metadata("design:type", Array)
    ], Users.prototype, "projects", void 0);
    Users = __decorate([
        (0, sequelize_typescript_1.Table)({
            freezeTableName: true,
            tableName: 'users',
            timestamps: false
        })
    ], Users);
    return Users;
}(sequelize_typescript_1.Model));
exports.default = Users;
