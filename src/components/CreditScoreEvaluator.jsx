import classNames from "classnames";
import { useState } from "react";

const SCORE_RANGES = [
  { min: 400, max: 520, label: "مخاطر مرتفعة", type: "bad" },
  { min: 521, max: 625, label: "غير مُرضــي", type: "bad" },
  { min: 626, max: 700, label: "مُرضــــــــــي", type: "norm" },
  { min: 701, max: 750, label: "جيد جـــــدا", type: "good" },
  { min: 751, max: 850, label: "مُمـتــــــــــاز", type: "good" },
];

const ERROR_MSG = "تعليمات شركة آي سكور تنص على ان درجة التقييم الرقمي يجب ان تكون بين 400 و 850";

const CreditScoreEvaluator = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null); // { label: string, type: string }

  const handleEvaluate = () => {
    if (!code) {
      setResult(null);
      return;
    }

    const score = parseInt(code, 10);

    if (isNaN(score)) {
      setResult(null);
      return;
    }

    if (score < 400 || score > 850) {
      setResult({ label: ERROR_MSG, type: "error" });
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(200);
      }
      return;
    }

    const match = SCORE_RANGES.find(r => score >= r.min && score <= r.max);
    if (match) {
      setResult({ label: match.label, type: match.type });
    } else {
      setResult(null);
    }
  };

  const rateClass = classNames({
    rate: true,
    good: result?.type === "good",
    bad: result?.type === "bad",
    norm: result?.type === "norm",
    error: result?.type === "error",
  });

  return (
    <main className="one">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          name="code"
          placeholder="درجة التقييم الرقمي"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onDoubleClick={() => setCode("")}
          onBlur={handleEvaluate}
        />
        {result && (
          <div>
            <div className="rateDiv">
              <p className={rateClass}>
                {result.label}
              </p>
            </div>
            <a className="link" href="https://drive.google.com/file/d/1PLYWopKKGee25fNzt7X0ckgnalaUMsPv/view?usp=drivesdk">شاهد من هنا</a>
          </div>
        )}
      </form>
    </main>
  );
};
export default CreditScoreEvaluator;
