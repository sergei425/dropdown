import { Dropdown } from './components/dropdown/index';
import './App.css';
import { useState } from 'react';

const taskList = ['Profile information', 'Change Password', 'Become PDO', 'Help', 'Log Out']

function App() {
  const [dropdownShow, setDropdownShow] = useState(false)
  return (
    <div className="App">
      <Dropdown taskList={taskList} setDropdownShow={setDropdownShow} dropdownShow={dropdownShow}/>
    </div>
  );
}

export default App;
