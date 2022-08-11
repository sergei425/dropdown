import { useState } from 'react';
import './style.css'


export function DropdownList({taskList, dropdownShow}) {
  const [itemActive, setItemactive] = useState(taskList[0])
  return (
    <div className={`dropdown-wrapper ${dropdownShow ? 'open' : ''}`}>
      <ul className="dropdown">
        {taskList.map((task, i) => <li className={itemActive === task ? 'active' : ''} key={`${i}_${task}`} onClick={(evt) => setItemactive(evt.target.textContent)}>
          <a href="#s">{task}</a>
        </li>)}
        
      </ul>
    </div>
  );
}