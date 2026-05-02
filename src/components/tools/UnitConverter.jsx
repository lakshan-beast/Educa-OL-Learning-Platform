import { useState } from "react";
import { FaRightLeft } from "react-icons/fa6";

const UnitConverter = () => {
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState("mToCm");
  const [result, setResult] = useState(0);

  const convert = (val, type) => {
    setValue(val);
    let num = parseFloat(val);
    if (isNaN(num)) return setResult(0);

    if (type === "mToCm") setResult(num * 100);
    else if (type === "cmToM") setResult(num / 100);
    else if (type === "kgToG") setResult(num * 1000);
    else if (type === "gToKg") setResult(num / 1000);
  };

  return (
    <div className="card-container converter-tool" data-aos="fade-up">
      <h1>Unit Converter</h1>
      <div className="converter-box">
        <select
          onChange={(e) => {
            setUnit(e.target.value);
            convert(value, e.target.value);
          }}>
          <option value="mToCm">Meters to Centimeters (m → cm)</option>
          <option value="cmToM">Centimeters to Meters (cm → m)</option>
          <option value="kgToG">Kilograms to Grams (kg → g)</option>
          <option value="gToKg">Grams to Kilograms (g → kg)</option>
        </select>

        <div className="input-group">
          <input
            type="number"
            value={value}
            onChange={(e) => convert(e.target.value, unit)}
            placeholder="Enter value"
          />
          <span className="icon-sep">
            <FaRightLeft />
          </span>
          <div className="result-display">{result.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
