import data from "./data9";
import branchNumbers from './branchnumbers';
import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";


const currencies = {
	"جنيه مصري":"001",
	"دولار امريكي":"002",
	"جنيه استرليني":"004",
	"يورو":"003",
	"ريال سعودي":"007",
	"درهم اماراتي":"005",
	"ين ياباني":"009",
	"*":"010",
	"فرنك سويسري":"012",
	"دينار كويتي":"006",
	"روبل روسي":"013",
	"دولار استرالي":"008"
};


const Nine = () => {
  const [id, setId] = useState('');
  const [AccountNameAr, setAccountNameAr] = useState('');
  const [AccountNumberFin, setAccountNumberFin] = useState('');
  const [AccountFinAr, setAccountFinAr] = useState('');
  const [currency, setCurrency] = useState('');
  const [branchNumber, setBranchNumber] = useState('');

  const handler = () => {
    setAccountNameAr(data[id].AccArNme);
    setAccountNumberFin(data[id].AccFinNo);
    setAccountFinAr(data[id].FinAccArNme);
    setBranchNumber(branchNumbers[branchNumber]);
  };
  return (
    <main className="three">
      <form onSubmit={(e) => e.target.preventDefault()}>
        <Stack sx={{ width: "100%" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Object.keys(data)}
            sx={{
              width: 250,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& input": { textAlign: "center" },
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            inputValue={id}
            onInputChange={(e, v) => {
              setId(v.toString());
            }}
            onBlur={handler}
            onDoubleClick={() => setId("")}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            onSelect={handler}
            renderInput={(params) => (
              <TextField
                {...params}
                label="اكتب رقم الحساب ارابنك:"
                sx={{ textAlign: "center" }}
              />
            )}

          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Object.keys(branchNumbers)}
            sx={{
              width: 250,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& input": { textAlign: "center" },
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            inputValue={branchNumber}
            onInputChange={(e, v) => {
              setId(v.toString());
            }}
            onBlur={handler}
            onDoubleClick={() => setId("")}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            onSelect={handler}
            renderInput={(params) => (
              <TextField
                {...params}
                label="اسم الفرع:"
                sx={{ textAlign: "center" }}
              />
            )}
          />
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Object.keys(currencies)}
            sx={{
              width: 250,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& input": { textAlign: "center" },
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            inputValue={currency}
            onInputChange={(e, v) => {
              setId(v.toString());
            }}
            onBlur={handler}
            onDoubleClick={() => setId("")}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            onSelect={handler}
            renderInput={(params) => (
              <TextField
                {...params}
                label="اسم العملة:"
                sx={{ textAlign: "center" }}
              />
            )}
          />
        </Stack>
      </form>
      <div className="data">
        {AccountNameAr && (
          <div>
            <p>اسم الحساب ارابنك:</p>
            <p className="shrt">{AccountNameAr}</p>
          </div>
        )}
        {AccountNumberFin && (
          <div>
            <p>رقم الحساب فينكال:</p>
            <p className="jben">{`${branchNumber.trim()}${currency.trim()}${AccountNumberFin.trim()}`}</p>
          </div>
        )}
        {AccountFinAr && (
          <div>
            <p>اسم الحساب فينكال:</p>
            <p className="off">{AccountFinAr}</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Nine;
