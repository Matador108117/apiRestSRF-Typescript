import { plainToInstance } from "class-transformer";
import { PruebasFisicasDTOout } from "../dtos/pruebasFisicas/PruebasFisicasDTOout.js";
import { Prueba_fisica } from "../models/pruebasFisicas.model.js";
import { EvaluacionesFisica } from "../models/evaluacionesFisicas.model.js";

export class PruebasFisicasService {
    async getAllPruebasFisicas(): Promise<PruebasFisicasDTOout[]> {
        const pruebas = await Prueba_fisica.findAll();
        return pruebas.map(prueba => plainToInstance(PruebasFisicasDTOout, prueba.toJSON()))
    }
    async getaPruebaFisicaById(id: string): Promise<PruebasFisicasDTOout | null> {
        const prueba  = await Prueba_fisica.findOne({where: {id_prueba: id}});
        return prueba ? plainToInstance(PruebasFisicasDTOout, prueba.toJSON()) : null;
    }
    async createPruebaFisica(data: any): Promise<PruebasFisicasDTOout |null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: data.id_evaluacion_fisica } });
        if (!evaluacion) return null;
        const prueba = await Prueba_fisica.create(data);
        return plainToInstance(PruebasFisicasDTOout, prueba.toJSON());
    }
    async updatePruebaFisica(data: any, id: string): Promise<PruebasFisicasDTOout | null> {
        const prueba = await Prueba_fisica.findOne({ where: { id_prueba: id } });
        if (!prueba) return null;

        Object.assign(prueba, data);
        await prueba.save();

        return plainToInstance(PruebasFisicasDTOout, prueba.toJSON());
    }
    async deletePrueba(id: string): Promise<boolean> {
        const prueba = await Prueba_fisica.findOne({ where: { id_prueba: id } });
        if (!prueba) return false;

        prueba.destroy()
        return true;
    }
}