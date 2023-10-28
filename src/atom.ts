import { atom } from 'recoil';

export interface IReservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  guests: string;
  tables?: string;
  note?: string;
  isSeated: boolean;
}

export const reservationListState = atom<IReservation[]>({
  key: 'reservationList',
  default: [],
});
