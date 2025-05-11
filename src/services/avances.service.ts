import { Avance } from '../models/avance.model.js';
import { AvancesDTOIn } from '../dtos/avances/avances.dto.in.js';
import { AvancesDTOOut } from '../dtos/avances/avances.dto.out.js';
import { plainToInstance } from 'class-transformer';

export class AvancesService {
  // Crear un avance
  async createAvance(data: any): Promise<AvancesDTOOut> {
    const newAvance = await Avance.create(data); 
    // Convertir la instancia de Sequelize a DTO de salida
    return plainToInstance(AvancesDTOOut, newAvance.toJSON());
  }
  // Obtener avance por ID
  async getAvanceById(id: number): Promise<AvancesDTOOut | null> {
    const avance = await Avance.findByPk(id);
    if (!avance) return null;
    return plainToInstance(AvancesDTOOut, avance.toJSON());
  }
// Obtener todos los avances
  async getAllAvances(): Promise<AvancesDTOOut[]> {
    const avances = await Avance.findAll();
    return avances.map((avance) => plainToInstance(AvancesDTOOut, avance.toJSON()));
  }
}
