import { Router, Request, Response } from 'express';
import { dataSource } from './app';
import { User } from './entities/user.entity';

const router = Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               clue:
 *                 type: string
 *     responses:
 *       200:
 *         description: El usuario se creó correctamente
 *       400:
 *         description: Datos incorrectos
 */
router.post('/create-user', async (req: Request, res: Response) => {
    const { username, hashedPassword: password, clue }: { username: string; hashedPassword: string; clue: string; } = req.body;
  
    try {
      const userRepository = dataSource.getRepository(User);
  
      const newUser = userRepository.create({ username, password, clue });
  
      await userRepository.save(newUser);
  
      res.status(200).json({
        message: 'El usuario se creó correctamente',
        // data: { id: newUser.id, username: newUser.username, clue: newUser.clue },
      });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});

export default router;