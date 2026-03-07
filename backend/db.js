import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Configuración de MySQL
// Si no hay variables de entorno, usa valores por defecto (XAMPP/WAMP suelen usar root y sin clave)
const sequelize = new Sequelize(
    process.env.DB_NAME || 'wisp_contracts',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || '192.168.110.69',
        dialect: 'mysql',
        logging: false
    }
);

export { sequelize };
