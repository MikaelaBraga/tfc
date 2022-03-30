import { Model, DataTypes } from 'sequelize';
import db from '.';

class MatchsModel extends Model {
  declare id: number;

  declare homeTeam: number;

  declare homeTeamsGoals: number;

  declare awayTeam: number;

  declare awayTeamGoals: number;

  declare inProgress: number;
}

MatchsModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    home_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    home_team_goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_team_goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    in_progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'MatchsModel',
    timestamps: false,
  },
);

export default MatchsModel;
