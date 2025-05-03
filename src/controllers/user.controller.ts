
import { Request, Response } from 'express';
import { UserService } from '../services/user.service.js';
const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: 'error al buscar el usuario' });

  }

}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(203).json(user);
  } catch (error) {
    res.status(500).json({ error: 'error al actualizar el usuario' });
  }

}
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const idDeleted = await userService.deleteUser(req.params.id);
    if (idDeleted) {
      res.status(200).json({ message: 'El usuario se eliminó correctamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

// similares para getUserById, updateUser, deleteUser

/*
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const fitusers = await Fituser.findAll();
    const fitusersdto = fitusers.map(user =>
      plainToInstance(FituserDto, user.toJSON(), {
        excludeExtraneousValues: true,
      })
    );
    res.json(fitusersdto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newFituser = await Fituser.create(req.body);
    const userDto = plainToInstance(FituserDto, newFituser.toJSON(), {
      excludeExtraneousValues: true,
    });
    res.status(201).json(userDto);
  } catch (error: any) {
    console.error('error ', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};
export const getUserByid = async (req: Request, res: Response) => {
  try {
    const fitUser = await Fituser.findOne({ where: { userid: req.params.id } });
    if (fitUser) {
      return res.status(200).json(plainToInstance(FituserDto, fitUser.toJSON()));
    }
    else {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }

}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const fitUser = await Fituser.findOne({ where: { userid: req.params.id } });
    if (fitUser) {
      const userDto = plainToInstance(FituserDto, req.body);
      fitUser.nombre = userDto.nombre;
      fitUser.apellido = userDto.apellido;
      fitUser.matricula = userDto.matricula;
      fitUser.email = userDto.email;
      fitUser.password = userDto.password;
      fitUser.fecha_inicio = userDto.fecha_inicio;

      await fitUser.save();

      const updatedDto = plainToInstance(FituserDto, fitUser.toJSON(), {
        excludeExtraneousValues: true,
      });
      return res.status(200).json(updatedDto);
    } else {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const fitUser = await Fituser.findOne({ where: { userid: req.params.id } });
    if (fitUser) {
      await fitUser.destroy();
      return res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
}

*/
