import { Rutina } from '../models/rutinas.model.js';
import { RutinaDTOOut } from '../dtos/rutinas/rutinas.dto.out.js';
import { plainToInstance } from 'class-transformer';

export class RutinasService {
  async getAllRutinas(): Promise<RutinaDTOOut[]> {
    const rutinas = await Rutina.findAll();
    return rutinas.map(r => plainToInstance(RutinaDTOOut, r.toJSON()));
  }

  async getRutinaById(id: string): Promise<RutinaDTOOut | null> {
    const rutina = await Rutina.findOne({ where: { id_rutina: id } });
    return rutina ? plainToInstance(RutinaDTOOut, rutina.toJSON()) : null;
  }

  async createRutina(data: any): Promise<RutinaDTOOut> {
    const nueva = await Rutina.create(data);
    return plainToInstance(RutinaDTOOut, nueva.toJSON());
  }

  async updateRutina(data: any, id: string): Promise<RutinaDTOOut | null> {
    const rutina = await Rutina.findOne({ where: { id_rutina: id } });
    if (!rutina) return null;
    Object.assign(rutina, data);
    await rutina.save();
    return plainToInstance(RutinaDTOOut, rutina.toJSON());
  }

  async deleteRutina(id: string): Promise<boolean> {
    const rutina = await Rutina.findOne({ where: { id_rutina: id } });
    if (!rutina) return false;
    await rutina.destroy();
    return true;
  }
}
