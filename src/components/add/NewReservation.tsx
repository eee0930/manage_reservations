import Button from '../Button';
import Header from '../Header';
import { ReactComponent as BackIcon } from '../../assets/keyboard_backspace.svg';
import '../ReservationForm.css';
import ReservationForm from '../ReservationForm';
import { useSetRecoilState } from 'recoil';
import { IReservation, reservationListState } from '../../atom';
import { useRef } from 'react';

interface INewReservation {
  moveListPage: () => void;
}

function NewReservation({ moveListPage }: INewReservation) {
  const setReservationList =
    useSetRecoilState<IReservation[]>(reservationListState);
  const addForm = useRef<HTMLFormElement>(null);
  const saveReservation = () => {
    moveListPage();
  };
  return (
    <>
      <Header title="New Reservation">
        <Button callback={moveListPage} styleIdx={2}>
          <BackIcon style={{ width: '22px' }} />
        </Button>
      </Header>
      <form ref={addForm} className="form-container">
        <ReservationForm isAddForm={true} callback={saveReservation} />
      </form>
    </>
  );
}

export default NewReservation;
