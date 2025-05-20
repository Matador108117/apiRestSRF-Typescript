import { Expose } from 'class-transformer';

export class UsuarioRutinaDTOOut {
  @Expose()
  id_usuario_rutina!: number;

  @Expose()
  id_usuario!: number;

  @Expose()
  id_rutina!: number;

  @Expose()
  fecha_asignacion!: string;

  @Expose()
  createdAt!: string;

  @Expose()
  updatedAt!: string;
}
