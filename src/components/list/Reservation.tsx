import Header from '../Header';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { reservationListState } from '../../atom';
import './Reservation.css';

interface IReservation {
  moveAddPage: () => void;
  moveEditPage: () => void;
}
function Reservation({ moveAddPage, moveEditPage }: IReservation) {
  const [reservationList, setReservationList] =
    useRecoilState(reservationListState);

  const removeReservation = () => {};
  return (
    <>
      <Header title="Reservation" size={reservationList.length}>
        <Button callback={moveAddPage}>
          <AddIcon /> <span className="primary">New Reservation</span>
        </Button>
      </Header>
      <div className="card-container">
        <div className="card-wrapper"></div>
      </div>
    </>
  );
}

export default Reservation;
