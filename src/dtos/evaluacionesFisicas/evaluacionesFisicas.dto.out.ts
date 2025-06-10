import { Expose } from "class-transformer";

export class  EvaluacionesFisicasDTOout{
    @Expose()
    id_evaluacion_fisica!: number;
    
    @Expose()
    id_usuario!:number;
    
    @Expose()
    fecha_evaluacion!: string
    
    @Expose()
    peso!: number;
    
    @Expose()
    altura!: number;

    @Expose()
    edad!: number;

    @Expose()
    sexo!: string;
    
    @Expose()
    observaciones!: string;
    
    @Expose()
    createdAt!: string;

    @Expose()
    updatedAt!: string;
}