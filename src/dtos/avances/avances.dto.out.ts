// src/dtos/avances/avances.dto.out.ts
import { Expose } from 'class-transformer';

export class AvancesDTOOut {
  @Expose()
  id_avance!: number;

  @Expose()
  id_usuario_rutina!: number;

  @Expose()
  fecha_avance!: string;

  @Expose()
  peso_actual?: number;

  @Expose()
  observacion?: string;

  @Expose()
  createdAt!: string;

  @Expose()
  updatedAt!: string;
}
