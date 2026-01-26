import { DataTypes } from 'sequelize';
import { sequelize } from '../../db.js';

const Contract = sequelize.define('Contract', {
    // Client Info
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    ci: { type: DataTypes.STRING, allowNull: false },
    dob: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT },
    rif: { type: DataTypes.STRING },
    razonSocial: { type: DataTypes.STRING },

    // Service Info
    plan: { type: DataTypes.STRING, defaultValue: '250 Mbps' },
    paymentMethod: { type: DataTypes.STRING },

    // Technical Info (Fiber Sheet)
    routerModel: { type: DataTypes.STRING },
    technician: { type: DataTypes.STRING },
    installDate: { type: DataTypes.STRING }, // Storing as string for simplicity YYYY-MM-DD

    // Equipment
    onuSerial: { type: DataTypes.STRING },
    macAddress: { type: DataTypes.STRING },

    // Order Info
    napCode: { type: DataTypes.STRING },
    napPort: { type: DataTypes.STRING },
    oltPort: { type: DataTypes.STRING },
    ipAddress: { type: DataTypes.STRING },
    coordinates: { type: DataTypes.STRING }
});

export default Contract;
