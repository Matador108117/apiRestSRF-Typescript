// src/dtos/rutinas/rutinas.dto.out.ts
import { Expose } from 'class-transformer';

export class RutinaDTOOut {
  @Expose()
  id_rutina!: number;

  @Expose()
  nombre!: string;

  @Expose()
  descripcion!: string;

  @Expose()
  nivel_dificultad!: number;

  @Expose()
  createdAt!: string;

  @Expose()
  updatedAt!: string;
}
