import Button from '../Button';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as TodayIcon } from '../../assets/today.svg';
import { ReactComponent as GroupIcon } from '../../assets/group.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';

import { IReservation } from '../../atom';

interface ICard {
  reservation: IReservation;
}
function Card({ reservation }: ICard) {
  const removeReservation = () => {};
  const seatedReservation = () => {};
  return (
    <div className="card-cover">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">{reservation.name}</div>
            <div className="col">
              <label>
                <PhoneIcon />
                {reservation.phone}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TodayIcon />
              {reservation.date}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <GroupIcon />
              {reservation.guests}
            </div>
          </div>
          {reservation.tables ? (
            JSON.parse(reservation.tables)
              .sort((a: number[], b: number[]) => a[0] - b[0])
              .map((table: number[]) => (
                <div className="row">
                  <div className="col">
                    <span>Reserved Table</span> {table[1]} · <span>Floor</span>{' '}
                    {table[0]}
                  </div>
                </div>
              ))
          ) : (
            <div className="row">
              <div className="col empty">No Selected Table</div>
            </div>
          )}
          {reservation.note && (
            <div className="row">
              <div className="col">
                {reservation.note} <EditIcon />
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-auto">
            <Button callback={removeReservation} styleIdx={2}>
              <TrashIcon style={{ width: '22px' }} />
            </Button>
          </div>
          <div className="col">
            <Button callback={seatedReservation} styleIdx={1}>
              <span>Seated</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
