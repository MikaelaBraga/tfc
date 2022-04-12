import { Model, DataTypes } from 'sequelize';
import db from '.';
import Clubs from './ClubsModel';

class Matchs extends Model {
  declare id: number;

  declare homeTeam: number;

  declare homeTeamGoals: number;

  declare awayTeam: number;

  declare awayTeamGoals: number;

  declare inProgress: boolean;
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
      type: DataTypes.BOOLEAN,
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

// uma partida pertence a um clube da casa
Matchs.belongsTo(Clubs, { foreignKey: 'homeTeam', as: 'homeClub' });
// uma partida pertence a um clube visitante
Matchs.belongsTo(Clubs, { foreignKey: 'awayTeam', as: 'awayClub' });

// um clube pode ter muitas partidas em casa
Clubs.hasMany(Matchs, { foreignKey: 'homeTeam', as: 'homeTeam' });
// um clube pode ter muitas partidas fora de casa
Clubs.hasMany(Matchs, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Matchs;
