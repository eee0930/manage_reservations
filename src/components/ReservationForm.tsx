import { IReservation } from '../atom';
import { ReactComponent as TrashIcon } from '../assets/trash.svg';
import { ReactComponent as TodayIcon } from '../assets/today.svg';
import Button from './Button';
import { useEffect, useState } from 'react';

interface IReservationForm {
  isAddForm: boolean;
  reservation?: IReservation;
  callback: () => void;
}

function ReservationForm({
  isAddForm,
  reservation,
  callback,
}: IReservationForm) {
  const [nameValue, setNameValue] = useState(reservation?.name);
  const [phoneValue, setPhoneValue] = useState(reservation?.phone);
  const [dateValue, setDateValue] = useState(reservation?.date);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const removeReservation = () => {};

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setNameValue(value);
    changeClass(target, value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setPhoneValue(value);
    changeClass(target, value);
  };
  const changeClass = (
    target: EventTarget & HTMLInputElement,
    value: string
  ) => {
    if (value.length > 0) {
      target.classList.add('inputed');
    } else {
      target.classList.remove('inputed');
    }
  };

  const openSelectDate = () => {};
  useEffect(() => {
    if (nameValue?.length && phoneValue?.length && dateValue?.length) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [nameValue, phoneValue, dateValue]);

  return (
    <>
      <div className="form-wrapper">
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
              <TodayIcon style={{ width: '15px' }} />{' '}
              {dateValue ? dateValue : <span>Select Date</span>}
            </Button>
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
