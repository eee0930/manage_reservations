import React, { useState } from 'react';
import './App.css';
import Reservation from './components/list/Reservation';
import NewReservation from './components/add/NewReservation';
import EditReservation from './components/edit/EditReservation';

function App() {
  const [listPage, setListPage] = useState(true);
  const [addPage, setAddPage] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const moveAddPage = () => {
    setListPage(false);
    setAddPage(true);
  };
  const moveEditPage = () => {
    setListPage(false);
    setEditPage(true);
  };
  const moveListPage = () => {
    setAddPage(false);
    setEditPage(false);
    setListPage(true);
  };
  return (
    <div className="App">
      {listPage && (
        <Reservation moveAddPage={moveAddPage} moveEditPage={moveEditPage} />
      )}
      {addPage && <NewReservation moveListPage={moveListPage} />}
      {editPage && <EditReservation moveListPage={moveListPage} />}
    </div>
  );
}

export default App;
