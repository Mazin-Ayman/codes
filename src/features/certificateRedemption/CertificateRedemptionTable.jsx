import { useMemo, useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import data from "../../data/certificateRedemptionTables";
import { formatAmount, toNumber } from "../../utils/format";
import { getEntry } from "../../utils/lookup";

const CertificateRedemptionTable = () => {
  const [certType, setCertType] = useState(Object.keys(data)[0] ?? "");
  const [certVal, setCertVal] = useState("");
  const [month, setMonth] = useState("");

  const table = getEntry(data, certType);
  const rows = useMemo(() => (Array.isArray(table) ? table : []), [table]);

  const months = useMemo(
    () =>
      [...new Set(rows.map((row) => Number(row.PayMnth)).filter(Number.isFinite))].sort(
        (a, b) => a - b
      ),
    [rows]
  );

  const activeMonth = months.includes(Number(month)) ? Number(month) : months[0];
  const row = rows.find((entry) => Number(entry.PayMnth) === activeMonth);

  const result = useMemo(() => {
    const principal = toNumber(certVal);
    const payBackRate = toNumber(row?.PayBckVal);
    if (principal === null || principal <= 0 || payBackRate === null) return null;
    return principal * payBackRate;
  }, [certVal, row]);

  return (
    <Page title="الجداول الاستردادية للشهادات" className="page--calculator">
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <div className="field-grid">
          <div className="field">
            <label className="field__label" htmlFor="redemption-cert-type">
              نوع الشهادة
            </label>
            <select
              id="redemption-cert-type"
              className="select-input"
              value={certType}
              onChange={(event) => setCertType(event.target.value)}
            >
              {Object.keys(data).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="redemption-cert-value">
              قيمة الشهادة
            </label>
            <input
              id="redemption-cert-value"
              className="text-input"
              type="number"
              inputMode="decimal"
              placeholder="قيمة"
              value={certVal}
              onChange={(event) => setCertVal(event.target.value)}
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="redemption-month">
              شهر الاسترداد
            </label>
            <select
              id="redemption-month"
              className="select-input"
              value={activeMonth ?? ""}
              onChange={(event) => setMonth(event.target.value)}
            >
              {months.map((value) => (
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
          {
            id: "payback",
            label: "القيمة الاستردادية للشهادة",
            value: result === null ? null : formatAmount(result),
            tone: "success",
          },
        ]}
      />

      {!row && <p className="form-hint">لا توجد بيانات استرداد لهذا الاختيار.</p>}
    </Page>
  );
};

export default CertificateRedemptionTable;
