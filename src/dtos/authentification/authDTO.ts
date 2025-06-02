import { IsString, Length, Matches } from 'class-validator';

export class LoginDto {
    @IsString()
    @Length(10, 10, { message: 'La matrícula debe tener exactamente 10 caracteres' })
    @Matches(/^zS\d{8}$/, {
        message: 'La matrícula debe comenzar con "zS" seguido de 8 dígitos numéricos',
    })
    matricula!: string;

    @IsString()
    @Length(6, 16, { message: 'La contraseña debe tener entre 6 y 16 caracteres' })
    password!: string;
}
