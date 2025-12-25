import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";
import { useState } from "react";
import { v4 } from "uuid"
import { Tooltip } from "@mui/material";

const TIERED_RATES = {
  "اسبوع واقل من اسبوعين": {
    depMinVal: 500000,
    depRate: 0.0425,
    depBrRate: 0,
  },
  "اسبوعين واقل من شهر": {
    depMinVal: 500000,
    depRate: 0.0525,
    depBrRate: 0.0125,
  },
  "شهر واقل من ثلاثة شهور": {
    depMinVal: 0,
    depRate: 0.0775,
    depBrRate: 0.0225,
  },
  "ثلاثة شهور واقل من ستة شهور": {
    depMinVal: 0,
    depRate: 0.08,
    depBrRate: 0.0475,
  },
  "ستة شهور واقل من سنة": {
    depMinVal: 0,
    depRate: 0.0825,
    depBrRate: 0.05,
  },
  "سنة واقل من سنتين": {
    depMinVal: 0,
    depRate: 0.0825,
    depBrRate: 0.0525,
  },
  "سنتين واقل من ثلاث سنوات ": {
    depMinVal: 0,
    depRate: 0.085,
    depBrRate: 0.0525,
  },
  "ثلاث سنوات": {
    depMinVal: 0,
    depRate: 0.0875,
    depBrRate: 0.0575,
  },
};

const TieredDepositCalculatorComp = () => {
  const [depType, setDepType] = useState("اسبوع واقل من اسبوعين");
  const [depVal, setDepVal] = useState("");
  const [period, setPeriod] = useState("");
  const [role, setRole] = useState("customers");

  const [calculationResult, setCalculationResult] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleCalculate = (e) => {
    e.preventDefault();
    const currentRateData = TIERED_RATES[depType];
    const depositValue = parseFloat(depVal);
    const periodValue = parseInt(period);

    if (isNaN(depositValue) || isNaN(periodValue)) {
      enqueueSnackbar("يرجى إدخال قيم صحيحة", { variant: "error" });
      return;
    }

    if (depositValue < currentRateData.depMinVal) {
      enqueueSnackbar(`يجب الا تقل القيمة عن ${currentRateData.depMinVal}`, { variant: "error" });
      return;
    }

    const depBrRate = parseFloat(currentRateData.depBrRate);
    let output = 0;
    let specialRate = null;

    if (role === "customers") {
      output = ((depositValue * periodValue) * depBrRate) / 365;
    } else {
      // Workers logic
      const WORKER_BONUS = 0.02; // 2%
      if (depositValue >= 200000) {
        // First 200k gets bonus, rest gets normal? 
        // Logic from original code:
        // ((200000 * period * (depBrRate + 0.02)) / 365) + (depVal - 200000) * ((period * depBrRate) / 365);
        // Wait, original logic was:
        // ((200000 * period * (depBrRate + 0.02)) / 365) + (depVal - 200000) * ((period * depBrRate) / 365);
        // This implies >200k part gets standard rate? Original code seems to implement it this way.

        const firstPart = (200000 * periodValue * (depBrRate + WORKER_BONUS)) / 365;
        const secondPart = ((depositValue - 200000) * periodValue * depBrRate) / 365;
        output = firstPart + secondPart;
      } else {
        output = ((depositValue * periodValue) * (depBrRate + WORKER_BONUS)) / 365;
      }
      specialRate = (depBrRate * 100) + (WORKER_BONUS * 100);
    }

    setCalculationResult({
      output: output.toFixed(2),
      baseRate: depBrRate,
      specialRate: specialRate
    });
  };

  return (
    <main className="six">
      <form onSubmit={handleCalculate}>
        <select
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customers">ودائع عملاء</option>
          <option value="workers">ودائع موظفين</option>
        </select>
        <select
          required
          className="depType"
          value={depType}
          onChange={(e) => setDepType(e.target.value)}
        >
          <option value="0" disabled>
            اجل الوديعة
          </option>
          {Object.keys(TIERED_RATES).map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>
        <input
          required
          onChange={(e) => setDepVal(e.target.value)}
          type="number"
          placeholder="قيمة الوديعة"
          className="depVal"
          value={depVal}
        />
        <input
          required
          onChange={(e) => setPeriod(e.target.value)}
          type="number"
          min={7}
          placeholder="المدة من تاريخ التجديد"
          className="period"
          value={period}
        />
        <button type="submit">احتساب</button>
      </form>
      {calculationResult && (
        <div className="output">
          <p>قيمة الفائدة المحتسبة: <span className="value">{calculationResult.output}</span></p>
          <p>سعر العائد الحالي-3 للأجل الأقل: <span className="value">{calculationResult.baseRate * 100}%</span></p>
          {calculationResult.specialRate && <p>سعر العائد المميز للموظفين: <span className="value">{calculationResult.specialRate}%</span></p>}
        </div>
      )}
      {calculationResult && (
        <a href="https://drive.google.com/file/d/1svdxetWZ0hW798Jy7QqDIleeXcCaDz_C/view?usp=drivesdk">
          التعليمات المنظمة
        </a>
      )}
    </main>
  );
};

export default function TieredDepositCalculator() {
  return (
    <SnackbarProvider maxSnack={3}>
      <TieredDepositCalculatorComp />
    </SnackbarProvider>
  );
}
