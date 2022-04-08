import { Model, DataTypes } from 'sequelize';
import db from '.';

class Matchs extends Model {
  declare id: number;

  declare homeTeam: number;

  declare homeTeamsGoals: number;

  declare awayTeam: number;

  declare awayTeamGoals: number;

  declare inProgress: number;
}

Matchs.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Matchs',
    timestamps: false,
  },
);

export default Matchs;
