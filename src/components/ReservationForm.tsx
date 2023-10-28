import { useEffect, useState } from 'react';
import { IReservation } from '../atom';
import Button from './Button';
import { ReactComponent as TrashIcon } from '../assets/trash.svg';
import { ReactComponent as TodayIcon } from '../assets/today.svg';
import { ReactComponent as MinusIcon } from '../assets/math-minus.svg';
import { ReactComponent as PlusIcon } from '../assets/math-plus.svg';
import { ReactComponent as DownIcon } from '../assets/arrow_drop_down.svg';
import { ReactComponent as EditIcon } from '../assets/edit.svg';

interface IReservationForm {
  isAddForm: boolean;
  reservation?: IReservation;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type Event = React.MouseEvent<HTMLButtonElement>;
type ChangeE = React.ChangeEvent<HTMLInputElement>;

function ReservationForm({
  isAddForm,
  reservation,
  callback,
}: IReservationForm) {
  const [nameValue, setNameValue] = useState(
    reservation?.name ? reservation.name : ''
  );
  const [phoneValue, setPhoneValue] = useState(
    reservation?.phone ? reservation.phone : ''
  );
  const [dateValue, setDateValue] = useState('Today, 3:30 PM');
  const [guestSize, setGuestSize] = useState(
    reservation?.guests ? +reservation.guests : 1
  );
  const [tables, setTables] = useState(
    reservation?.tables ? JSON.parse(reservation?.tables) : undefined
  );
  const [disabledBtn, setDisabledBtn] = useState(true);

  const removeReservation = () => {};

  const handleChangeName = (e: ChangeE) => {
    const target = e.target;
    const value = target.value;
    setNameValue(value);
    changeClass(target, value);
  };
  const handleChangePhone = (e: ChangeE) => {
    const target = e.target;
    const value = target.value;
    setPhoneValue(value);
    changeClass(target, value);
  };
  const changeClass = (
    target: (EventTarget & HTMLInputElement) | HTMLTextAreaElement,
    value: string
  ) => {
    if (value.length > 0) {
      target.classList.add('inputed');
    } else {
      target.classList.remove('inputed');
    }
  };

  const openSelectDate = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (nameValue?.length && phoneValue?.length && dateValue?.length) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [nameValue, phoneValue, dateValue]);

  const handlePlusGuestSize = (e: Event) => {
    e.preventDefault();
    setGuestSize((prev) => (prev > 9 ? prev : prev + 1));
  };
  const handleMinusGuestSize = (e: Event) => {
    e.preventDefault();
    setGuestSize((prev) => (prev < 2 ? prev : prev - 1));
  };

  return (
    <>
      <div className="form-wrapper">
        {/* 필수요소 */}
        <div className="row">
          <div className="form-group col">
            <input
              name="name"
              type="text"
              className="input"
              value={nameValue}
              onChange={handleChangeName}
            />
            <label>
              Name<span>*</span>
            </label>
          </div>
          <div className="form-group col">
            <input
              name="phone"
              type="text"
              className="input"
              value={phoneValue}
              onChange={handleChangePhone}
            />
            <label>
              Phone<span>*</span>
            </label>
          </div>
          <div className="form-group full col">
            <Button callback={openSelectDate} sizeIdx={1}>
              <TodayIcon style={{ width: '15px', marginRight: '5px' }} />
              {dateValue ? dateValue : <span>Select Date</span>}
            </Button>
            <input type="hidden" name="date" value={dateValue} />
          </div>
        </div>
        <div className="row">
          <div className="inline-form-group col">
            <span>Guests</span>
            <Button callback={handleMinusGuestSize} styleIdx={2} sizeIdx={1}>
              <MinusIcon style={{ width: '22px' }} />
            </Button>
            <span className="num">{guestSize}</span>
            <Button callback={handlePlusGuestSize} styleIdx={2} sizeIdx={1}>
              <PlusIcon style={{ width: '22px' }} />
            </Button>
            <input type="hidden" name="guests" value={guestSize} />
          </div>
          <div className="form-group select-form col">
            <div className="input">
              {tables &&
                tables.map((table: number[], i: number) => (
                  <label key={i}>
                    Table {table[1]} · Floor {table[0]}
                  </label>
                ))}
            </div>
            {!tables && <label>Select Table</label>}
            <DownIcon />
            <input type="hidden" name="tables" value={JSON.stringify(tables)} />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <textarea
              name="note"
              className="input"
              value={reservation?.note}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                changeClass(e.target, e.target.value)
              }
            />
            <label>
              Add Note...{' '}
              <EditIcon
                style={{
                  width: '17px',
                  height: '17px',
                  transform: 'translateY(20%)',
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        {isAddForm ? (
          <Button
            callback={callback}
            styleIdx={1}
            sizeIdx={2}
            disabled={disabledBtn}
          >
            <span>Save</span>
          </Button>
        ) : (
          <div className="row">
            <div className="col-auto">
              <Button callback={removeReservation} styleIdx={2} sizeIdx={2}>
                <TrashIcon />
              </Button>
            </div>
            <div className="col">
              <Button
                callback={callback}
                styleIdx={1}
                sizeIdx={2}
                disabled={disabledBtn}
              >
                <span>Seated</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ReservationForm;
