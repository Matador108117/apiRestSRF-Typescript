import { UsuarioRutina } from '../models/usuarioRutinas.model.js';
import { plainToInstance } from 'class-transformer';
import { UsuarioRutinaDTOOut } from '../dtos/usuarioRutinas/usuarioRutinas.dto.out.js';

export class UsuarioRutinasService {
  async getAll(): Promise<UsuarioRutinaDTOOut[]> {
    const registros = await UsuarioRutina.findAll();
    return registros.map(r => plainToInstance(UsuarioRutinaDTOOut, r.toJSON()));
  }

  async getById(id: string): Promise<UsuarioRutinaDTOOut | null> {
    const registro = await UsuarioRutina.findOne({ where: { id_usuario_rutina: id } });
    return registro ? plainToInstance(UsuarioRutinaDTOOut, registro.toJSON()) : null;
  }

  async create(data: any): Promise<UsuarioRutinaDTOOut> {
    const nuevo = await UsuarioRutina.create(data);
    return plainToInstance(UsuarioRutinaDTOOut, nuevo.toJSON());
  }

  async update(data: any, id: string): Promise<UsuarioRutinaDTOOut | null> {
    const registro = await UsuarioRutina.findOne({ where: { id_usuario_rutina: id } });
    if (!registro) return null;
    Object.assign(registro, data);
    await registro.save();
    return plainToInstance(UsuarioRutinaDTOOut, registro.toJSON());
  }

  async delete(id: string): Promise<boolean> {
    const registro = await UsuarioRutina.findOne({ where: { id_usuario_rutina: id } });
    if (!registro) return false;
    await registro.destroy();
    return true;
  }
}
