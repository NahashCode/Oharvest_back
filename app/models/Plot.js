import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Plot extends CoreDataMapper {
    tableName = 'plot';
}

export const plotDataMapper = new Plot(pool);