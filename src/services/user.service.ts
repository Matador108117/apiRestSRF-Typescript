import { Fituser } from '../models/user.model.js';
import { plainToInstance } from 'class-transformer';
import { FituserDTOout } from '../dtos/User/user.dto.out.js';
import { UserNotificationsDTOOut } from '../dtos/User/userNotifiacion.dto.out.js';
import { Notificacion } from '../models/notificaciones.model.js';
import { UserEvaluacionesDTOout } from '../dtos/User/userEvaluaciones.dto.out.js';
import { EvaluacionesFisica } from '../models/evaluacionesFisicas.model.js';
import { Prueba_fisica } from '../models/pruebasFisicas.model.js';
import { UserEvaluacionPruebasDTOout } from '../dtos/User/userEvaluationsProof.dto.out.js';
import bcrypt from 'bcryptjs';

export class UserService {
    async getAllUsers(): Promise<FituserDTOout[]> {
        const users = await Fituser.findAll();
        return users.map(user => plainToInstance(FituserDTOout, user.toJSON(), {
            excludeExtraneousValues: true,
        }));
    }

    async getUserById(id: string): Promise<FituserDTOout | null> {
        const user = await Fituser.findOne({ where: { userid: id } });
        return user ? plainToInstance(FituserDTOout, user.toJSON(), { excludeExtraneousValues: true }) : null;
    }

    async createUser(data: any): Promise<FituserDTOout | null> {
        const user = await Fituser.findOne({ where: { matricula: data.matricula } });
        if (user) return null;
        const email = await Fituser.findOne({ where: { email: data.email } });
        if (email) throw new Error('Email already exists');
        data.password = await bcrypt.hash(data.password, 10);
        
        const newUser = await Fituser.create(data);
        return plainToInstance(FituserDTOout, newUser.toJSON(), {
            excludeExtraneousValues: true,
        });
    }

    async updateUser(id: string, data: any): Promise<FituserDTOout | null> {
        const user = await Fituser.findOne({ where: { userid: id } });
        if (!user) return null;

        Object.assign(user, data);
        await user.save();

        return plainToInstance(FituserDTOout, user.toJSON(), {
            excludeExtraneousValues: true,
        });
    }

    async deleteUser(id: string): Promise<boolean> {
        const user = await Fituser.findOne({ where: { userid: id } });
        if (!user) return false;

        await user.destroy();
        return true;
    }
    async getUserNotificationsById(id: string): Promise<UserNotificationsDTOOut | null> {
        const user = await Fituser.findOne({
            where: { userid: id },
            include: [{ model: Notificacion, as: 'notifications', }
            ],
        });

        if (!user) return null;

        return plainToInstance(UserNotificationsDTOOut, user.toJSON(), {
            excludeExtraneousValues: true,
        });
    }
    async getUserEvaluationsById(id: string): Promise<UserEvaluacionesDTOout | null> {
        const user = await Fituser.findOne({
            where: { userid: id },
            include: [{ model: EvaluacionesFisica, as: 'evaluations' },],
        });
        if (!user) return null;
        return plainToInstance(UserEvaluacionesDTOout, user.toJSON())
    }

    async getUserWithEvaluationsAndPruebas(id: string): Promise<UserEvaluacionPruebasDTOout | null> {
        const user = await Fituser.findOne({
            where: { userid: id },
            include: [{
                model: EvaluacionesFisica,
                as: 'evaluations',
                include: [{
                    model: Prueba_fisica,
                    as: 'physical_evaluations',
                }]
            }]
        });

        if (!user) return null;

        const plainUser = JSON.parse(JSON.stringify(user));

        return plainToInstance(UserEvaluacionPruebasDTOout, plainUser, {
            excludeExtraneousValues: true,
        });
    }

}

