import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import uuid from 'react-uuid';
import { IReservation, reservationListState } from '../../atom';
import Button from '../Button';
import Header from '../Header';
import ReservationForm from '../ReservationForm';
import { ReactComponent as BackIcon } from '../../assets/keyboard_backspace.svg';
import '../ReservationForm.css';

interface INewReservation {
  moveListPage: () => void;
}

interface IForm {
  [key: string]: string;
}
function NewReservation({ moveListPage }: INewReservation) {
  const setReservationList =
    useSetRecoilState<IReservation[]>(reservationListState);

  const addForm = useRef<HTMLFormElement>(null);

  const saveReservation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (addForm.current) {
      const formData = new FormData(addForm?.current);
      const formJson = Object.fromEntries(formData.entries());
      const id = uuid();
      const { name, phone, date, guests, tables, note } = formJson as IForm;
      setReservationList((prev) => {
        const newReservation: IReservation = {
          id,
          name,
          phone,
          date,
          guests,
          tables,
          note,
          isSeated: false,
        };
        return [...prev, newReservation];
      });
    }

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
