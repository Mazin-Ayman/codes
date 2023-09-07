import { useState, useRef } from "react";
// import "../tailwind.css";
const Five = () => {
  const [certType, setCertType] = useState("11");
  const [certVal, setCertVal] = useState("");
  const [certAd, setCertAd] = useState(0);
  const [certOut, setCertOut] = useState(0);
  const [month, setMonth] = useState(1);
  const [certBreakValue, setCertBreakValue] = useState(0);
  const [isVisisble, setIsVisable] = useState(false);
  const handle = (e) => {
    if (certVal == null || certVal == undefined) return;
    let res = ((certVal * (parseFloat(certType) / 10)) / 12) * month;
    res /= 10;
    let res2 = certVal * (6.25 / 10 / 12) * month;
    res2 /= 10;
    const res3 = res - res2;
    setCertAd(res.toFixed(2));
    setCertOut(res2.toFixed(2));
    setCertBreakValue(res3.toFixed(2));
    setIsVisable(true);
  };
  return (
    <main className="five">
      <small className="page-title">
        حاسبة استرداد شهادة مجددة خلال 6 شهور بعد التجديد حال تعلية العائد
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
              <option value="11">11% شهري</option>
              <option value="16">16% ربع سنوي</option>
             <option value="17">17% سنوي</option>
              <option value="19">19% شهري</option>
              <option value="19.50">19.5% ربع سنوي</option>
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
              عدد الشهــــــور:
            </label>
            <select
              id="monthVal"
              className="my-input"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <button type="submit" className="form-submit-btn">إحتساب</button>
      </form>
      {isVisisble && (<div className="outputs">
        <div className="certAd">
          <label htmlFor="certAd" className="my-label">
            قيمة الفائدة على الشهادة:
          </label>
          <span id="certAd" className="val">
            {certAd}
          </span>
        </div>
        <div className="cert-out2">
          <label htmlFor="certOut" className="my-label">
            قيمة الفائدة على التوفـــير:
          </label>
          <span id="certOut" className="val">
            {certOut}
          </span>
        </div>
        <div className="cert-break-value">
          <label htmlFor="certOut" className="my-label">
            قيمة عمولة كسر الشهـادة:
          </label>
          <span id="certOut" className="val">
            {certBreakValue}
          </span>
        </div>
      </div>)}
      {isVisisble && (
        <a href="https://drive.google.com/file/d/1i2zXHutzNkt2b1uwA3WxW8aiM-EjWFDo/view?usp=drivesdk">
          التعليمات المنظمة
        </a>
      )}
    </main>
  );
};

export default Five;
