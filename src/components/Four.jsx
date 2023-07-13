import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import data from "./../../data3";

const Four = () => {
  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState("");
  const [trVal, setTrVal] = useState(null);
  const [trValInd, setTrValInd] = useState(null);
  const [trValMinValCor, setTrValMinValCor] = useState(null);
  const [maxValCor, setMaxValCor] = useState(null);
  const [modVal, setModVal] = useState(null);
  const [begin, setBegin] = useState(null);
  const [end, setEnd] = useState(null);
  const [due, setDue] = useState(null);
  const [instNumber, setInstNumber] = useState(null);
  const [instDate, setInstDate] = useState(null);
  const [notes, setNotes] = useState(null);

  const handler = () => {
    setTrVal(data[season][crop].tr_val);
    setModVal(data[season][crop].mod_val);
    setBegin(data[season][crop].begin);
    setEnd(data[season][crop].end);
    setDue(data[season][crop].due);
    setInstNumber(data[season][crop].inst_no);
    setInstDate(data[season][crop].inst_dte);
    setNotes(data[season][crop].notes);
    setTrValInd(data[season][crop].tr_va_ind);
    setTrValMinValCor(data[season][crop].min_val_cor);
    setMaxValCor(data[season][crop].max_val_cor);
  };

  return (
    <main className="four">
      <form onSubmit={(e) => e.target.preventDefault()}>
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Autocomplete
            // disablePortal
            id="season-inp"
            options={Object.keys(data)}
            sx={{
              width: 250,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& input": { textAlign: "center" },
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              "& .MuiAutocomplete-popupIndicator": {
                color: "tan",
              },
              "& *": { fontFamily: "Cairo" },
            }}
            inputValue={season}
            onInputChange={(e, v, r) => {
              if (v) {
                setSeason(v);
                console.log(e, r, v);
              } else {
                console.log("Error accured");
              }
            }}
            onDoubleClick={() => setSeason("")}
            // onSelect={}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="الفئة والموسم"
                sx={{ textAlign: "center" }}
              />
            )}
          />

          {season && season !== "" && season != null && (
            <Autocomplete
              disablePortal
              id="crop-inp"
              options={season in data && Object.keys(data[`${season}`])}
              sx={{
                width: 250,
                backgroundColor: "#fff",
                borderRadius: 1,
                "& input": { textAlign: "center" },
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                "& .MuiAutocomplete-popupIndicator": {
                  color: "tan",
                },
              }}
              inputValue={crop}
              onInputChange={(e, v) => {
                setCrop(v.toString());
              }}
              onBlur={handler}
              onDoubleClick={() => setCrop("")}
              onKeyDown={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
              onSelect={handler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="المحصول"
                  sx={{ textAlign: "center" }}
                />
              )}
            />
          )}
        </Stack>
      </form>
      {crop && crop !== "" && (
        <div className="data">
          {/* {()} */}
          {trVal && trVal != null && (
            <div className="tr-val">
              <span className="data-item-title">ري عادي:</span>
              <span className="data-item-value">{trVal}</span>
            </div>
          )}

          {modVal && modVal != null && (
            <div className="mod-val">
              <span className="data-item-title">ري حديث:</span>
              <span className="data-item-value">{modVal}</span>
            </div>
          )}
          {trValInd && trValInd != null && (
            <div className="tr-val-ind">
              <span className="data-item-title">ري عادي أفراد:</span>
              <span className="data-item-value">{trValInd}</span>
            </div>
          )}

          {trValMinValCor && trValMinValCor != null && (
            <div className="tr-val-ind">
              <span className="data-item-title">حد أدنى عادي شركات:</span>
              <span className="data-item-value">{trValMinValCor}</span>
            </div>
          )}

          {maxValCor && maxValCor != null && (
            <div className="tr-val-ind">
              <span className="data-item-title">حد أقصى عادي شركات:</span>
              <span className="data-item-value">{maxValCor}</span>
            </div>
          )}

          {begin && begin != null && (
            <div className="begin-date">
              <span className="data-item-title">بداية المنح:</span>
              <span className="data-item-value">{begin}</span>
            </div>
          )}

          {end && end != null && (
            <div className="end-date">
              <span className="data-item-title">نهاية المنح:</span>
              <span className="data-item-value">{end}</span>
            </div>
          )}

          {due && due != null && (
            <div className="due">
              <span className="data-item-title">تاريخ الاستحقاق:</span>
              <span className="data-item-value">{due}</span>
            </div>
          )}

          {instNumber && instNumber != null && (
            <div className="inst-number">
              <span className="data-item-title">كتاب دوري رقم:</span>
              <span className="data-item-value">{instNumber}</span>
            </div>
          )}

          {instDate && instDate != null && (
            <div className="inst-date">
              <span className="data-item-title">بتاريخ:</span>
              <span className="data-item-value">{instDate}</span>
            </div>
          )}

          {notes && notes != null && (
            <div className="notes">
              <span className="data-item-title">ملاحظات:</span>
              <span className="data-item-value">{notes}</span>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Four;
