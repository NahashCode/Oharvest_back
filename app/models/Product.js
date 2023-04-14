import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Product extends CoreDataMapper {
    tableName = 'product';
}

export const productDataMapper = new Product(pool);