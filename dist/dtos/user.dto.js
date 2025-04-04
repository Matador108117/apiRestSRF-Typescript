var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { AutoIncrement, Column, DataType } from 'sequelize-typescript';
export class FituserDto {
    id;
    matricula;
    nombre;
    apellido;
    email;
    password;
    fecha_inicio;
}
__decorate([
    Expose(),
    AutoIncrement,
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], FituserDto.prototype, "id", void 0);
__decorate([
    IsNotEmpty(),
    Length(10, 10),
    Expose(),
    __metadata("design:type", String)
], FituserDto.prototype, "matricula", void 0);
__decorate([
    IsNotEmpty(),
    Length(2, 50),
    Expose(),
    __metadata("design:type", String)
], FituserDto.prototype, "nombre", void 0);
__decorate([
    IsNotEmpty(),
    Length(2, 50),
    Expose(),
    __metadata("design:type", String)
], FituserDto.prototype, "apellido", void 0);
__decorate([
    IsNotEmpty(),
    IsEmail(),
    Expose(),
    __metadata("design:type", String)
], FituserDto.prototype, "email", void 0);
__decorate([
    IsNotEmpty(),
    Length(6, 16),
    Exclude(),
    __metadata("design:type", String)
], FituserDto.prototype, "password", void 0);
__decorate([
    IsNotEmpty(),
    Expose(),
    __metadata("design:type", String)
], FituserDto.prototype, "fecha_inicio", void 0);
