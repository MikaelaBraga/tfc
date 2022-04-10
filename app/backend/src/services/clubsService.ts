import { IClubs } from '../interfaces/IClubs';
import Clubs from '../database/models/ClubsModel';

const listClubs = async (): Promise<IClubs[]> => {
  const clubs = await Clubs.findAll();

  return clubs;
};

const getClubsById = async (id: string): Promise<IClubs | null> => {
  const club = await Clubs.findByPk(id);

  return club;
};

export { listClubs, getClubsById };
