import { useState } from "react";

const SimpleDepositInterestCalculator = () => {
  const [dur, setDur] = useState("");
  const [depVal, setDepVal] = useState("");

  const calculateValues = () => {
    const duration = parseInt(dur);
    const depositVal = parseFloat(depVal);

    if (
      isNaN(duration) ||
      duration <= 0 ||
      duration < 7 ||
      isNaN(depositVal) ||
      depositVal <= 0
    ) {
      return { intVal: 0, rate: 0, linkVis: false };
    }

    const rateMap = {
      7: 0,
      15: 0.0125,
      30: 0.0225,
      90: 0.0475,
      180: 0.05,
      720: 0.0525,
      1080: 0.055,
      99999: 0.0575,
    };

    // Find the first key that is strictly greater than duration
    // Note: The original logic was `duration < key` 
    // keys in JS objects are strings, but comparison loosely works. 
    // Better to ensure numeric comparison.
    const threshold = Object.keys(rateMap).map(Number).sort((a, b) => a - b).find((key) => duration < key);
    const rate = rateMap[threshold] || 0;

    const outputValue = (duration / 365) * depositVal * rate;

    return {
      intVal: outputValue,
      rate: rate,
      linkVis: true,
    };
  };

  const { intVal, rate, linkVis } = calculateValues();

  return (
    <main className="seven">
      <div className="container">
        <div className="inputs">
          <input
            type="number"
            id="duration"
            className="duration-input"
            placeholder="المدة باليوم من التجديد"
            value={dur}
            onChange={(e) => setDur(e.target.value)}
          />
          <input
            type="number"
            id="depVal"
            className="depVal-input"
            placeholder="قيمه الوديعة"
            value={depVal}
            onChange={(e) => setDepVal(e.target.value)}
          />
        </div>
        <div className="output">
          <p className="rate">
            معدل الفائدة:{" "}
            <span className="value">
              {rate === 0 ? "0%" : (rate * 100).toFixed(2) + "%"}
            </span>
          </p>
          <p className="int-rate">
            قيمة الفائدة:{" "}
            <span className="value">
              {intVal === 0 ? "0" : intVal.toFixed(2)}
            </span>
          </p>
        </div>

        {linkVis && (
          <a
            className="link"
            href="https://drive.google.com/file/d/1BYj6BdnOvPOpqSl5ZvJnQHkndF13jIAs/view?usp=drivesdk"
          >
            اسعار الودائع
          </a>
        )}
        <br />
        {linkVis && (
          <a
            className="link"
            href="https://drive.google.com/file/d/1svdxetWZ0hW798Jy7QqDIleeXcCaDz_C/view?usp=drivesdk"
          >
            التعليمات المنظمة
          </a>
        )}
      </div>
    </main>
  );
};

export default SimpleDepositInterestCalculator;
