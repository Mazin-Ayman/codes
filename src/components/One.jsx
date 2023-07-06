import classNames from "classnames";
import { useState, useRef } from "react";

// very bad = (400, 520)
// bad = (521, 625)
// norm = (626, 700)
// good = (701, 750)
// perfect = (751, 850)
const One = () => {
  const [code, setCode] = useState("");
  const [rate, setRate] = useState(null);
  const rateRef = useRef();
  const rateClass = classNames({
    rate: true,
    good: rate === "جيد جدا" || rate === "ممتاز",
    bad: rate === "مخاطر مرتفعة" || rate === "غير مرضي",
    norm: rate === "مرضي",
    error: rate === "درجة تقييم الرقمي يجب ان تكون 400 : 850",
  });
  const handle = (e) => {
    if (code >= 400 && code <= 520) setRate("مخاطر مرتفعة");
    else if (code >= 521 && code <= 625) setRate("غير مرضي");
    else if (code >= 626 && code <= 700) setRate("مرضي");
    else if (code >= 701 && code <= 750) setRate("جيد جدا");
    else if (code >= 751 && code <= 850) setRate("ممتاز");
    else if (code < 400 || code > 850) {
      setRate("درجة تقييم الرقمي يجب ان تكون 400 : 850");
      if (navigator in window) navigator.vibrate(200);
    } else {
      setRate(null);
    }
  };
  return (
    <main className="one">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          name="code"
          placeholder="درجة التقييم الرقمي"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          onDoubleClick={() => setCode("")}
          onBlur={handle}
        />
        {rate && (
          <div className="rateDiv">
            <p className={rateClass} ref={rateRef}>
              {rate}
            </p>
          </div>
        )}
      </form>
    </main>
  );
};
export default One;
