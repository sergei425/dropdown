import './style.css'

export function DropdownButton({setDropdownShow, dropdownShow}) {

  return (
    <button className="btn" onClick={() => setDropdownShow(!dropdownShow)}>
      account settings
      <i className="material-icons"></i>
    </button>
  )
}