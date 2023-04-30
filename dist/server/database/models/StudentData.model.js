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
var StudentDataTechnologies_model_1 = __importDefault(require("./StudentDataTechnologies.model"));
var Technologies_model_1 = __importDefault(require("./Technologies.model"));
var StudentData = /** @class */ (function (_super) {
    __extends(StudentData, _super);
    function StudentData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Unique)(true),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], StudentData.prototype, "id", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 200 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], StudentData.prototype, "university", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 200 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], StudentData.prototype, "field", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "about", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "work_experience", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "certificates", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "practices", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "courses", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "activities", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "hobby", void 0);
    __decorate([
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
        __metadata("design:type", String)
    ], StudentData.prototype, "languages", void 0);
    __decorate([
        sequelize_typescript_1.IsDate,
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
        __metadata("design:type", Date)
    ], StudentData.prototype, "expected_graduation_date", void 0);
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return Technologies_model_1.default; }, function () { return StudentDataTechnologies_model_1.default; }),
        __metadata("design:type", Array)
    ], StudentData.prototype, "technologies", void 0);
    StudentData = __decorate([
        (0, sequelize_typescript_1.Table)({
            freezeTableName: true,
            tableName: 'student_data',
            timestamps: false
        })
    ], StudentData);
    return StudentData;
}(sequelize_typescript_1.Model));
exports.default = StudentData;
