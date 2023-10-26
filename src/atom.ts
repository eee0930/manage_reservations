import { atom } from 'recoil';

export interface IReservation {
  name: string;
  phone: string;
  date: string;
  guests: number;
  tables: number[];
  note?: string;
}

export const reservationListState = atom<IReservation[]>({
  key: 'reservationList',
  default: [],
});
