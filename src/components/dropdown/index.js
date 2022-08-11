import { DropdownList } from "../dropdown-list";
import { DropdownButton } from "./../dropdown-button/index";
import "./style.css";

export function Dropdown({taskList, setDropdownShow, dropdownShow}) {
  return (
    <div className="container">
      <DropdownButton setDropdownShow={setDropdownShow} dropdownShow={dropdownShow}/>
      <DropdownList dropdownShow={dropdownShow} taskList={taskList}/>
    </div>
  );
}
