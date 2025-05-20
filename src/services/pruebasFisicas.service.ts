import { Prueba_fisica } from '../models/pruebasFisicas.model.js';
import { PruebaFisicaDTOOut } from '../dtos/pruebasFisicas/pruebasFisicas.dto.out.js';
import { plainToInstance } from 'class-transformer';

export class PruebasFisicasService {
  async getAll(): Promise<PruebaFisicaDTOOut[]> {
    const pruebas = await Prueba_fisica.findAll();
    return pruebas.map(p => plainToInstance(PruebaFisicaDTOOut, p.toJSON()));
  }

  async getById(id: string): Promise<PruebaFisicaDTOOut | null> {
    const prueba = await Prueba_fisica.findOne({ where: { id_prueba: id } });
    return prueba ? plainToInstance(PruebaFisicaDTOOut, prueba.toJSON()) : null;
  }

  async create(data: any): Promise<PruebaFisicaDTOOut> {
    const nueva = await Prueba_fisica.create(data);
    return plainToInstance(PruebaFisicaDTOOut, nueva.toJSON());
  }

  async update(data: any, id: string): Promise<PruebaFisicaDTOOut | null> {
    const prueba = await Prueba_fisica.findOne({ where: { id_prueba: id } });
    if (!prueba) return null;
    Object.assign(prueba, data);
    await prueba.save();
    return plainToInstance(PruebaFisicaDTOOut, prueba.toJSON());
  }

  async delete(id: string): Promise<boolean> {
    const prueba = await Prueba_fisica.findOne({ where: { id_prueba: id } });
    if (!prueba) return false;
    await prueba.destroy();
    return true;
  }
}
