import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UsuarioRutinaDTOIn {
  @Expose()
  @IsNotEmpty()
  @IsInt()
  id_usuario!: number;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  id_rutina!: number;

  @Expose()
  @IsNotEmpty()
  @IsDateString()
  fecha_asignacion!: string;
}
