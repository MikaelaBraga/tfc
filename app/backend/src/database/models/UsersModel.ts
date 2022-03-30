import { Model, DataTypes } from 'sequelize';
import db from '.';

class UsersModel extends Model {
  declare id: number;

  declare username: string;

  declare role: string;

  declare email: string;

  declare password: string;
}

UsersModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'UsersModel',
    timestamps: false,
  },
);
