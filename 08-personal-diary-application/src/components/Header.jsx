import "../styles/Header.css";
export default function Header(props) {
  function handleChange(event) {
    console.log(event.target.value);
    props.setTime(event.target.value);
  }
  return (
    <>
      <div id="header-wrapper">
        <div>Personal Diary Application</div>
        <div>
          Date :
          <input
            type="date"
            className="date-sheet"
            value={props.time}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
