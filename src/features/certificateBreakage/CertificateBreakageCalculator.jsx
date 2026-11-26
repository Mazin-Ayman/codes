import { useMemo, useState } from "react";
import DocLink from "../../components/DocLink";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import { formatAmount, toNumber } from "../../utils/format";

const CERTIFICATE_TYPES = [
  { value: "11", label: "11% شهري" },
  { value: "16", label: "16% ربع سنوي" },
  { value: "17", label: "17% سنوي" },
  { value: "19", label: "19% شهري" },
  { value: "19.50", label: "19.5% ربع سنوي" },
];

const SAVINGS_RATE = 6.25;
const MONTHS = [1, 2, 3, 4, 5, 6];

const CertificateBreakageCalculator = () => {
  const [certType, setCertType] = useState(CERTIFICATE_TYPES[0].value);
  const [certVal, setCertVal] = useState("");
  const [month, setMonth] = useState(1);

  const result = useMemo(() => {
    const principal = toNumber(certVal);
    const rate = toNumber(certType);
    if (principal === null || principal <= 0 || rate === null) return null;

    const certificateInterest = (principal * (rate / 100) * month) / 12;
    const savingsInterest = (principal * (SAVINGS_RATE / 100) * month) / 12;
    return {
      certificateInterest,
      savingsInterest,
      fee: certificateInterest - savingsInterest,
    };
  }, [certType, certVal, month]);

  return (
    <Page
      title="حاسبة استرداد شهادة مجددة خلال 6 شهور بعد التجديد حال تعلية العائد"
      className="page--calculator"
    >
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <div className="field-grid">
          <div className="field">
            <label className="field__label" htmlFor="cert-type">
              نوع الشهادة
            </label>
            <select
              id="cert-type"
              className="select-input"
              value={certType}
              onChange={(event) => setCertType(event.target.value)}
            >
              {CERTIFICATE_TYPES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="cert-value">
              قيمة الشهادة
            </label>
            <input
              id="cert-value"
              className="text-input"
              type="number"
              inputMode="decimal"
              placeholder="قيمة"
              value={certVal}
              onChange={(event) => setCertVal(event.target.value)}
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="cert-month">
              عدد الشهور
            </label>
            <select
              id="cert-month"
              className="select-input"
              value={month}
              onChange={(event) => setMonth(Number(event.target.value))}
            >
              {MONTHS.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      <ResultList
        items={[
          { id: "cert-interest", label: "قيمة الفائدة على الشهادة", value: result && formatAmount(result.certificateInterest) },
          { id: "savings-interest", label: "قيمة الفائدة على التوفير", value: result && formatAmount(result.savingsInterest) },
          { id: "break-fee", label: "قيمة عمولة كسر الشهادة", value: result && formatAmount(result.fee), tone: "warning" },
        ]}
      />

      {result && (
        <DocLink href="https://drive.google.com/file/d/1i2zXHutzNkt2b1uwA3WxW8aiM-EjWFDo/view?usp=drivesdk">
          التعليمات المنظمة
        </DocLink>
      )}
    </Page>
  );
};

export default CertificateBreakageCalculator;
