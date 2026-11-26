import { useMemo, useState } from "react";
import DocLink from "../../components/DocLink";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import { formatAmount, formatPercent, toNumber } from "../../utils/format";
import { DEPOSIT_TIERS, MIN_DURATION_DAYS } from "./tiers";

const SimpleDepositInterestCalculator = () => {
  const [duration, setDuration] = useState("");
  const [depositValue, setDepositValue] = useState("");

  const result = useMemo(() => {
    const days = toNumber(duration);
    const principal = toNumber(depositValue);
    if (
      days === null ||
      days < MIN_DURATION_DAYS ||
      principal === null ||
      principal <= 0
    ) {
      return null;
    }

    const rate = DEPOSIT_TIERS.find((tier) => days < tier.upTo)?.rate ?? 0;
    return { rate, amount: (days / 365) * principal * rate };
  }, [duration, depositValue]);

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <div className="field-grid">
          <div className="field">
            <label className="sr-only" htmlFor="deposit-duration">
              المدة باليوم من التجديد
            </label>
            <input
              id="deposit-duration"
              className="text-input"
              type="number"
              inputMode="numeric"
              min={MIN_DURATION_DAYS}
              placeholder="المدة باليوم من التجديد"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
          </div>
          <div className="field">
            <label className="sr-only" htmlFor="deposit-value">
              قيمة الوديعة
            </label>
            <input
              id="deposit-value"
              className="text-input"
              type="number"
              inputMode="decimal"
              placeholder="قيمة الوديعة"
              value={depositValue}
              onChange={(event) => setDepositValue(event.target.value)}
            />
          </div>
        </div>
      </form>

      <ResultList
        items={[
          { id: "rate", label: "معدل الفائدة", value: result && formatPercent(result.rate) },
          { id: "interest", label: "قيمة الفائدة", value: result && formatAmount(result.amount), tone: "success" },
        ]}
      />

      {result && (
        <div className="link-list">
          <DocLink href="https://drive.google.com/file/d/1BYj6BdnOvPOpqSl5ZvJnQHkndF13jIAs/view?usp=drivesdk">
            أسعار الودائع
          </DocLink>
          <DocLink href="https://drive.google.com/file/d/1svdxetWZ0hW798Jy7QqDIleeXcCaDz_C/view?usp=drivesdk">
            التعليمات المنظمة
          </DocLink>
        </div>
      )}
    </Page>
  );
};

export default SimpleDepositInterestCalculator;
