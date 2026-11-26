import { useMemo, useState } from "react";
import DocLink from "../../components/DocLink";
import Page from "../../components/Page";
import { toNumber } from "../../utils/format";

const SCORE_RANGES = [
  { min: 400, max: 520, label: "مخاطر مرتفعة", tone: "bad" },
  { min: 521, max: 625, label: "غير مُرضي", tone: "bad" },
  { min: 626, max: 700, label: "مُرضي", tone: "norm" },
  { min: 701, max: 750, label: "جيد جداً", tone: "good" },
  { min: 751, max: 850, label: "ممتاز", tone: "good" },
];

const ERROR_MSG =
  "تعليمات شركة آي سكور تنص على ان درجة التقييم الرقمي يجب ان تكون بين 400 و 850";

const CreditScoreEvaluator = () => {
  const [code, setCode] = useState("");

  const result = useMemo(() => {
    const score = toNumber(code);
    if (score === null) return null;
    if (score < 400 || score > 850) return { label: ERROR_MSG, tone: "error" };

    const match = SCORE_RANGES.find((range) => score >= range.min && score <= range.max);
    return match ? { label: match.label, tone: match.tone } : null;
  }, [code]);

  const handleBlur = () => {
    const score = toNumber(code);
    if (score !== null && (score < 400 || score > 850) && typeof navigator !== "undefined") {
      navigator.vibrate?.(200);
    }
  };

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="credit-score">
          درجة التقييم الرقمي
        </label>
        <input
          id="credit-score"
          className="text-input"
          type="number"
          inputMode="numeric"
          placeholder="درجة التقييم الرقمي"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          onDoubleClick={() => setCode("")}
          onBlur={handleBlur}
        />
      </form>

      {result && (
        <div className="score-result">
          <p className={`score-badge score-badge--${result.tone}`}>{result.label}</p>
          <DocLink href="https://drive.google.com/file/d/1PLYWopKKGee25fNzt7X0ckgnalaUMsPv/view?usp=drivesdk">
            شاهد من هنا
          </DocLink>
        </div>
      )}
    </Page>
  );
};

export default CreditScoreEvaluator;
