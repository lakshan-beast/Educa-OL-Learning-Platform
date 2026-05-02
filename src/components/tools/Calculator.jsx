import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      // String එකේ තියෙන ගණිතමය ප්‍රකාශනය විසඳනවා
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error" + error.message);
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="card-container" data-aos="fade-up">
      <h1>Calculator</h1>
      <div className="calculator-box">
        <div className="calculator-display">{display || "0"}</div>
        <div className="buttons-grid">
          <button onClick={clearDisplay} className="btn-clear">
            C
          </button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate} className="btn-equal">
            =
          </button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
