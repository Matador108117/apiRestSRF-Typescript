var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, IsEmail, Length, PrimaryKey, AllowNull, Unique, AutoIncrement, } from 'sequelize-typescript';
let Fituser = class Fituser extends Model {
};
__decorate([
    PrimaryKey,
    AutoIncrement,
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], Fituser.prototype, "userid", void 0);
__decorate([
    AllowNull(false),
    Length({ min: 10, max: 10 }),
    Unique,
    Column(DataType.STRING),
    __metadata("design:type", String)
], Fituser.prototype, "matricula", void 0);
__decorate([
    AllowNull(false),
    Length({ min: 2, max: 50 }),
    Column(DataType.STRING(50)),
    __metadata("design:type", String)
], Fituser.prototype, "nombre", void 0);
__decorate([
    AllowNull(false),
    Length({ min: 2, max: 50 }),
    Column(DataType.STRING(50)),
    __metadata("design:type", String)
], Fituser.prototype, "apellido", void 0);
__decorate([
    AllowNull(false),
    IsEmail,
    Unique,
    Column(DataType.STRING),
    __metadata("design:type", String)
], Fituser.prototype, "email", void 0);
__decorate([
    AllowNull(false),
    Length({ min: 6, max: 16 }),
    Column(DataType.STRING),
    __metadata("design:type", String)
], Fituser.prototype, "password", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.DATEONLY),
    __metadata("design:type", String)
], Fituser.prototype, "fecha_inicio", void 0);
__decorate([
    Column(DataType.DATEONLY),
    __metadata("design:type", String)
], Fituser.prototype, "fecha_actualizacion", void 0);
Fituser = __decorate([
    Table({ tableName: 'FITUSER' })
], Fituser);
export { Fituser };
