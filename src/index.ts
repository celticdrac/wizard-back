import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import { encryptSHA256 } from './utils';

const port = 8080;
const app = express();


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

const middleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: 'Faltan campos requeridos' });
    } else if (typeof req.body.username != 'string' || typeof req.body.password != 'string') {
        res.status(400).json({ message: 'Datos incorrectos' });
    } else {
        req.body.hashedPassword = encryptSHA256(req.body.password);
        next();
    }
};

app.use('/api', middleware, routes);