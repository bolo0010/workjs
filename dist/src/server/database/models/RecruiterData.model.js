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
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var sequelize_1 = require("sequelize");
var RecruiterData = /** @class */ (function (_super) {
    __extends(RecruiterData, _super);
    function RecruiterData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.IsUUID)(4),
        (0, sequelize_typescript_1.Default)(sequelize_1.UUIDV4),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], RecruiterData.prototype, "id", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 200 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], RecruiterData.prototype, "organisation", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 150 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], RecruiterData.prototype, "position", void 0);
    __decorate([
        (0, sequelize_typescript_1.Length)({ min: 1, max: 2048 }),
        (0, sequelize_typescript_1.AllowNull)(false),
        sequelize_typescript_1.IsUrl,
        (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
        __metadata("design:type", String)
    ], RecruiterData.prototype, "organisation_link", void 0);
    RecruiterData = __decorate([
        (0, sequelize_typescript_1.Table)({
            freezeTableName: true,
            tableName: 'recruiter_data',
            timestamps: false
        })
    ], RecruiterData);
    return RecruiterData;
}(sequelize_typescript_1.Model));
exports.default = RecruiterData;