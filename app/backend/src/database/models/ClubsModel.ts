import { Model, DataTypes } from 'sequelize';
import db from '.';

class Clubs extends Model {
  declare id: number;

  declare clubName: string;
}

Clubs.init(
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
    modelName: 'Clubs',
    timestamps: false,
  },
);

// async function doStuffWithClubModel() {
//   const newClub = await ClubsModel.create({
//     club_name: 'clube do Bruno',
//    });
// }

export default Clubs;
