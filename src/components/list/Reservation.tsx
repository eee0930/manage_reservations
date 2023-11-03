import Header from '../Header';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { reservationListState } from '../../atom';
import './Reservation.css';
import { useRef } from 'react';
import Card from './Card';

interface IReservation {
  moveAddPage: () => void;
  moveEditPage: () => void;
}
function Reservation({ moveAddPage, moveEditPage }: IReservation) {
  const [reservationList, setReservationList] =
    useRecoilState(reservationListState);
  const unSeatedList = reservationList.filter((res) => res.isSeated === false);
  const removeReservation = () => {};
  return (
    <>
      <Header title="Reservation" size={unSeatedList.length}>
        <Button callback={moveAddPage}>
          <AddIcon /> <span className="primary">New Reservation</span>
        </Button>
      </Header>
      <div className="card-container">
        <div className="card-wrapper">
          {reservationList &&
            reservationList.map((reservation) => (
              <Card key={reservation.id} reservation={reservation} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Reservation;
