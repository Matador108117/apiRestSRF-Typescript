import { plainToInstance } from 'class-transformer';
import { Avance } from '../models/avance.model.js';
import { AvancesDTOOut } from '../dtos/avances/avances.dto.out.js';

export class AvancesService {
  async getAllAvances(): Promise<AvancesDTOOut[]> {
    const avances = await Avance.findAll();
    return avances.map(a => plainToInstance(AvancesDTOOut, a.toJSON()));
  }

  async getAvanceById(id: string): Promise<AvancesDTOOut | null> {
    const avance = await Avance.findOne({ where: { id_avance: id } });
    return avance ? plainToInstance(AvancesDTOOut, avance.toJSON()) : null;
  }

  async createAvance(data: any): Promise<AvancesDTOOut> {
    const nuevo = await Avance.create(data);
    return plainToInstance(AvancesDTOOut, nuevo.toJSON());
  }

  async updateAvance(data: any, id: string): Promise<AvancesDTOOut | null> {
    const avance = await Avance.findOne({ where: { id_avance: id } });
    if (!avance) return null;
    Object.assign(avance, data);
    await avance.save();
    return plainToInstance(AvancesDTOOut, avance.toJSON());
  }

  async deleteAvance(id: string): Promise<boolean> {
    const avance = await Avance.findOne({ where: { id_avance: id } });
    if (!avance) return false;
    await avance.destroy();
    return true;
  }
}

