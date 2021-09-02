import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS } from './shared/staffs';

import StaffList from './components/StaffList';
import { useState } from 'react';
import ShowStaff from './components/ShowStaff';
import NavStaff from './components/NavStaff';

function App() {

  let [staffSelected, setStaffSelected] = useState(null);
  let [selectedNumberEl, setSelectedNumberEl]= useState("row-cols-md-3");

  const onShowStaffHandler = (staffSelected) =>{
    setStaffSelected(staffSelected);
  }

    const onChangeSelectedHandler = (selectedNumber) =>{
        setSelectedNumberEl(selectedNumber);
    }

  return (
    <div className="App container mt-md-5 mt-0 ">
      <NavStaff 
        selectedNumberEl={selectedNumberEl}
        onChangeSelected={onChangeSelectedHandler}/>

      {staffSelected !== null && 
        <ShowStaff item={staffSelected} 
        onCancelStaff={onShowStaffHandler} 
        />}

      <StaffList 
        items={STAFFS}
        selectedNumberEl = {selectedNumberEl}
        onShowStaff={onShowStaffHandler}
       />
    </div>
  );
}

export default App;
