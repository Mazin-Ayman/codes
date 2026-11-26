import { useState } from "react";
import Notice from "../../components/Notice";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import { formatAmount, formatPercent, toNumber } from "../../utils/format";
import { TIERED_RATES, WORKER_BONUS, WORKER_BONUS_LIMIT } from "./rates";

const MIN_DURATION_DAYS = 7;

const calculateInterest = (principal, days, rate, role) => {
  if (role === "customers") {
    return (principal * days * rate) / 365;
  }

  const bonusRate = rate + WORKER_BONUS;
  if (principal >= WORKER_BONUS_LIMIT) {
    const bonusPart = (WORKER_BONUS_LIMIT * days * bonusRate) / 365;
    const standardPart = ((principal - WORKER_BONUS_LIMIT) * days * rate) / 365;
    return bonusPart + standardPart;
  }

  return (principal * days * bonusRate) / 365;
};

const TieredDepositCalculator = () => {
  const [tierIndex, setTierIndex] = useState(0);
  const [depositValue, setDepositValue] = useState("");
  const [period, setPeriod] = useState("");
  const [role, setRole] = useState("customers");
  const [notice, setNotice] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const tier = TIERED_RATES[tierIndex];
    const principal = toNumber(depositValue);
    const days = toNumber(period);

    if (principal === null || principal <= 0 || days === null || days < MIN_DURATION_DAYS) {
      setNotice("يرجى إدخال قيمة وديعة ومدة صحيحة (7 أيام على الأقل)");
      return;
    }
    if (principal < tier.minDeposit) {
      setNotice(`يجب ألا تقل القيمة عن ${tier.minDeposit}`);
      return;
    }

    setNotice("");
    setResult({
      amount: calculateInterest(principal, days, tier.rate, role),
      baseRate: tier.rate,
      specialRate: role === "workers" ? tier.rate + WORKER_BONUS : null,
    });
  };

  return (
    <Page title="حاسبة الودائع حسب المدة" className="page--calculator">
      <form className="stack" onSubmit={handleSubmit}>
        <div className="field-grid">
          <div className="field">
            <label className="field__label" htmlFor="deposit-role">
              نوع الوديعة
            </label>
            <select
              id="deposit-role"
              className="select-input"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="customers">ودائع عملاء</option>
              <option value="workers">ودائع موظفين</option>
            </select>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="deposit-tier">
              أجل الوديعة
            </label>
            <select
              id="deposit-tier"
              className="select-input"
              value={tierIndex}
              onChange={(event) => setTierIndex(Number(event.target.value))}
            >
              {TIERED_RATES.map((tier, index) => (
                <option key={tier.label} value={index}>
                  {tier.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="tiered-deposit-value">
              قيمة الوديعة
            </label>
            <input
              id="tiered-deposit-value"
              className="text-input"
              type="number"
              inputMode="decimal"
              placeholder="قيمة الوديعة"
              value={depositValue}
              onChange={(event) => setDepositValue(event.target.value)}
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="tiered-period">
              المدة من تاريخ التجديد
            </label>
            <input
              id="tiered-period"
              className="text-input"
              type="number"
              inputMode="numeric"
              min={MIN_DURATION_DAYS}
              placeholder="المدة من تاريخ التجديد"
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
            />
          </div>
        </div>
        <button className="primary-btn" type="submit">
          احتساب
        </button>
      </form>

      <ResultList
        items={[
          { id: "interest", label: "قيمة الفائدة المحتسبة", value: result && formatAmount(result.amount), tone: "success" },
          { id: "base-rate", label: "سعر العائد الحالي", value: result && formatPercent(result.baseRate) },
          { id: "special-rate", label: "سعر العائد المميز للموظفين", value: result?.specialRate && formatPercent(result.specialRate) },
        ]}
      />

      <Notice message={notice} onClose={() => setNotice("")} />
    </Page>
  );
};

export default TieredDepositCalculator;
