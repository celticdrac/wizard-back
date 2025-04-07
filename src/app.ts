import express from 'express';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

const app = express();

// Conect to SQLite DB using TypeORM
const dataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [User],
  synchronize: true,
  logging: true,
});

dataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });


export {dataSource};

export default app;
