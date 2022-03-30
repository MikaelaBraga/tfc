import { Model, DataTypes } from 'sequelize';
import db from '.';

class ClubsModel extends Model {
  declare id: number;

  declare clubName: string;
}

ClubsModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    club_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'ClubsModel',
    timestamps: false,
  },
);

// async function doStuffWithClubModel() {
//   const newClub = await ClubsModel.create({
//     club_name: 'clube do Bruno',
//    });
// }

export default ClubsModel;
