import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";
import { useState, useRef } from "react";
import { v4  } from "uuid"
import { Tooltip } from "@mui/material";

const SixComp = () => {
  let mydata = {
    "اسبوع واقل من اسبوعين": {
      depMinVal: "500000",
      depRate: "0.0425",
      depBrRate: "0",
    },
    "اسبوعين واقل من شهر": {
      depMinVal: "500000",
      depRate: "0.0525",
      depBrRate: "0.0125",
    },
    "شهر واقل من ثلاثة شهور": {
      depMinVal: "0",
      depRate: "0.0775",
      depBrRate: "0.0225",
    },

    "ثلاثة شهور واقل من ستة شهور": {
      depMinVal: "0",
      depRate: "0.08",
      depBrRate: "0.0475",
    },
    "ستة شهور واقل من سنة": {
      depMinVal: "0",
      depRate: "0.0825",
      depBrRate: "0.05",
    },

    "سنة واقل من سنتين": {
      depMinVal: "0",
      depRate: "0.0825",
      depBrRate: "0.0525",
    },

    "سنتين واقل من ثلاث سنوات ": {
      depMinVal: "0",
      depRate: "0.085",
      depBrRate: "0.0525",
    },

    "ثلاث سنوات": {
      depMinVal: "0",
      depRate: "0.0875",
      depBrRate: "0.055",
    },
  };
  // states
  const [depType, setDepType] = useState("اسبوع واقل من اسبوعين");
  const [depVal, setDepVal] = useState();
  const [period, setPeriod] = useState();
  const [role, setRole] = useState("customers");
  const [output, setOutput] = useState();
  const [depRate, setDepRate] = useState();
  const [specialRate , setSpecialRate ] = useState();
  const buttonRef = useRef();
  // style
  const { enqueueSnackbar } = useSnackbar();

  const validateForm = (depVal, depMinVal) => {
    if (depVal >= depMinVal) {
      return true;
    } else {
      const msg = `يجب الا تقل القيمة عن ${depMinVal}`
     enqueueSnackbar(msg, {variant: "error"})
      return false;
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
      if (!validateForm(depVal, parseFloat(mydata[depType].depMinVal))){
        return
      }
      validateForm(depVal, parseFloat(mydata[depType].depMinVal));
      
      let depBrRate = mydata[depType].depBrRate;
      depBrRate = parseFloat(depBrRate);
      let depRateVal = mydata[depType].depRate;
      setDepRate(parseFloat(depRateVal));

      if (role === "customers") {
        setSpecialRate();
        let res = ((depVal * period) * depBrRate) / 365;
        setOutput(res.toFixed(2));
        console.log(res);
      }  else {   
        console.log("In Else")
        if (depVal >= 200000) {
          let res = ((200000 * period * (depBrRate + 0.02)) / 365) + (depVal - 200000) * ((period * depBrRate) / 365);
          setOutput(res.toFixed(2));
          console.log(res);
        } else {
          let res = ((depVal * period) * depBrRate + 0.02) / 365;
          setOutput(res.toFixed(2));
          console.log(res);
        } 
         const res = parseFloat(mydata[depType].depBrRate) * 100;
         setSpecialRate(res + 2);
      }
    }

  return (
    <main className="six">
      <form
        onSubmit={handleForm}
      >
        <select
          required
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
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
          {Object.keys(mydata).map((one) => (
            <option value={one} key={v4()}>{one}</option>
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
        <button type="submit" ref={buttonRef}>احتساب</button>
      </form>
      {output && (
        <div className="output">
          <p>قيمة الفائدة المحتسبة: <span className="value">{output}</span></p>
          <p>سعر العائد الحالي-3 للأجل الأقل: <span className="value">{mydata[depType].depBrRate * 100}%</span></p>
          {(specialRate && output) && <p>سعر العائد المميز للموظفين: <span className="value">{specialRate}%</span></p>}
        </div>
      )}
      {output && (
        <a href="https://drive.google.com/file/d/1svdxetWZ0hW798Jy7QqDIleeXcCaDz_C/view?usp=drivesdk">
          التعليمات المنظمة
        </a>
      )}
    </main>
  );
};

export default function Six () {
  return (
  <SnackbarProvider maxSnack={3}>
    <SixComp />
  </SnackbarProvider>
  );
}
