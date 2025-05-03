import { Fituser } from '../models/user.model.js';
import { plainToInstance } from 'class-transformer';
import { FituserDto } from '../dtos/user.dto.js';

export class UserService {
    async getAllUsers(): Promise<FituserDto[]> {
        const users = await Fituser.findAll();
        return users.map(user => plainToInstance(FituserDto, user.toJSON(), {
            excludeExtraneousValues: true,
        }));
    }

    async getUserById(id: string): Promise<FituserDto | null> {
        const user = await Fituser.findOne({ where: { userid: id } });
        return user ? plainToInstance(FituserDto, user.toJSON(), { excludeExtraneousValues: true }) : null;
    }

    async createUser(data: any): Promise<FituserDto> {
        const newUser = await Fituser.create(data);
        return plainToInstance(FituserDto, newUser.toJSON(), {
            excludeExtraneousValues: true,
        });
    }

    async updateUser(id: string, data: any): Promise<FituserDto | null> {
        const user = await Fituser.findOne({ where: { userid: id } });
        if (!user) return null;

        Object.assign(user, data);
        await user.save();

        return plainToInstance(FituserDto, user.toJSON(), {
            excludeExtraneousValues: true,
        });
    }

    async deleteUser(id: string): Promise<boolean> {
        const user = await Fituser.findOne({ where: { userid: id } });
        if (!user) return false;

        await user.destroy();
        return true;
    }
}
