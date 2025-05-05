import { Expose, Transform } from 'class-transformer';
export class FituserDTOout {
    @Expose()
    userid!: number;

    @Expose()
    matricula!: string;

    @Expose()
    @Transform(({ obj }) => `${obj.nombre} ${obj.apellido}`)
    nombre!: string;

    @Expose()
    apellido!: string;

    @Expose()
    email!: string;
    @Expose()
    fecha_inicio!: string

    @Expose()
    createdAt!: string;

    @Expose()
    updatedAt!: string;
    
    
}