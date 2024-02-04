import { useState } from "react";
import data from "./../../data4";

const Eight = () => {
  const [certType, setCertType] = useState("شهادة الحصاد 11");
  const [certVal, setCertVal] = useState(0);
  const [month, setMonth] = useState(7);
  const [certPayBackVal, setCertPayBackVal] = useState(0);
  
  const [isVisisble, setIsVisable] = useState(false);
  const handle = (e) => {
    if (certVal == null || certVal == undefined) return;
    let payBackVal = parseFloat(data[`${certType}`].filter(ele => ele.PayMnth == month)[0].PayBckVal);
    // PayBckVal * certVal
    let result = payBackVal * parseInt(certVal);
    setCertPayBackVal(result.toFixed(2));
    setIsVisable(true);
  };
  return (
    <main className="five">
      <small className="page-title">
        الجداول الاستردادية للشهادات
      </small>
      <form onSubmit={(e) => {
        e.preventDefault();
        handle();
      }}>
        <div className='inputs'>
          <div className="certType-con">
            <label className="my-label" htmlFor="select">
              نوع الشهـــــادة:
            </label>
            <select
              className="my-input cert-type"
              value={certType}
              id="select"
              placeholder="test"
              onChange={(e) => setCertType(e.target.value)}
            >
              {/* <option value="11">11% شهري</option>
              <option value="16">16% ربع سنوي</option>
             <option value="17">17% سنوي</option>
              <option value="19">19% شهري</option>
              <option value="19.50">19.5% ربع سنوي</option> */}
              {Object.keys(data).map(key => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="certVal-con">
            <label className="my-label" htmlFor="certVal">
              قيمة الشهـادة:
            </label>
            <input
              type="number"
              id="certVal"
              value={certVal}
              onChange={(e) => setCertVal(e.target.value)}
              className="my-input"
              placeholder="قيمة"
            />
          </div>
          <div className="month-con">
            <label className="my-label" htmlFor="monthVal">
            شهر الاستـرداد:
            </label>
            <select
              id="monthVal"
              className="my-input"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            >
              {Array.from({ length: 30 }, (_, idx) => idx++ ).map(element => (
                <option value={element+6}>{element+6}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="form-submit-btn">إحتساب</button>
      </form>
      {isVisisble && (<div className="outputs">
        <div className="certPayBack">
          <label htmlFor="certPayBackSpan" className="my-label">
          القيمة الاستردادية للشهادة:
          </label>
          <span id="certPayBackSpan" className="val">
            {certPayBackVal}
          </span>
        </div>
      </div>)}
      
    </main>
  );
};

export default Eight;