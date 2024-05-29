import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3000'),
  username: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
};
