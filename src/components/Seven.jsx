import { useEffect } from "react";
import { useState } from "react";

const Seven = () => {
  const [dur, setDur] = useState("");
  const [depVal, setDepVal] = useState("");
  const [intVal, setIntVal] = useState(0);
  const [rate, setRate] = useState(0);
  const [linkVis, setLinkVis] = useState(false);

  useEffect(() => {
    calculateInterest();
  }, [rate, dur, depVal]);

  const calculateInterest = () => {
    const duration = parseInt(dur);
    const depositVal = parseFloat(depVal);
    if (
      isNaN(duration) ||
      duration <= 0 ||
      duration < 7 ||
      depositVal <= 0 ||
      depVal == "" ||
      depVal == null
    ) {
      setIntVal(0);
      setRate(0);
      setLinkVis(false);
      return;
    }

    const rateMap = {
      7: 0,
      15: 0.0125 * 10,
      30: 0.0225 * 10,
      90: 0.0475 * 10,
      180: 0.05 * 10,
      720: 0.0525 * 10,
      1080: 0.055 * 10,
      99999: 0.0575 * 10,
    };

    const selectedRate = Object.keys(rateMap).find((key) => duration < key);
    setRate(rateMap[selectedRate]);

    const outputValue = (duration / 365) * parseFloat(depVal) * rate;
    setIntVal(outputValue.toFixed(2));
    setLinkVis(true);
  };

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
              {intVal === 0 ? "0%" : (rate * 10).toFixed(2) + "%"}
            </span>
          </p>
          <p className="int-rate">
            قيمة الفائدة:{" "}
            <span className="value">
              {intVal === 0 ? "0" : (intVal / 10).toFixed(2)}
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

export default Seven;
