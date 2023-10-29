import "./QuickDonate.css";

function QuickDonate() {
  return (
    <div className="qd-container">
      <p className="qd-p"> Quick Donate </p>

      <select className="qd-selector">
        <option className="qd-option" value="0"> £5 </option>
        <option className="qd-option" value="1"> £10</option>
        <option className="qd-option" value="3"> £20</option>
        <option className="qd-option" value="4"> £50</option>
        <option className="qd-option" value="5"> £100</option>
      </select>

      <form className="qd-form">
        <input className="qd-input" placeholder="Custom amount" type="text" name="cdonate" /> 
      </form>

      <button className="qd-donate"> Donate </button>
    </div>
  );
}

export default QuickDonate;
