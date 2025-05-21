
import { Request, Response } from 'express';
import { UserService } from '../services/user.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch {
    return res.status(500).json({ error:errorMessages.ERROR_500_USER });
  }
};

export const createUser = async (req: Request, res: Response) => {
  console.log("xd");
  try {
    const user = await userService.createUser(req.body);
    if (!user) return res.status(405).json({ respuesta: errorMessages.ERROR_405_USER });
    return res.status(200).json(user);
  } catch(errors) {
    if (errors instanceof Error) {
    return res.status(409).json({ error: errors.message });
    }
    console.log(errors);
    return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_USER });
    
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if(!user) return res.status(404).json(errorMessages.ERROR_404_USER);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_USER });

  }

}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.status(203).json(user);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_USER });
  }

}
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const idDeleted = await userService.deleteUser(req.params.id);
    if (idDeleted) return res.status(200).json({ message: errorMessages.OK_200_DELETE_USER });

    return res.status(404).json({ error: errorMessages.ERROR_404_USER });

  } catch (error) {
    res.status(500).json({ error: errorMessages.ERROR_500_DELETE_USER });
  }
};

export const getUserNotificationsById = async (req: Request, res: Response) => {
  try {
    const userData = await userService.getUserNotificationsById(req.params.id);
    if (!userData) return res.status(404).json({ error: errorMessages.ERROR_404_USER });

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_USER_NOTIFICATIONS });
  }
};

export const getUserEvaluationsById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserEvaluationsById(req.params.id);
    if (!user) return res.status(404).json({ respuesta: errorMessages.ERROR_404_USER });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: errorMessages.ERROR_500_USER})
  }
}
export const getUserEvaluationsProofsById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserWithEvaluationsAndPruebas(req.params.id);
    if (!user) return res.status(404).json({ respuesta: errorMessages.ERROR_404_USER });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: errorMessages.ERROR_500_USER})
  }
}