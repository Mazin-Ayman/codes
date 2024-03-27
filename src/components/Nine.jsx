import data from "./../../data9";
import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
const Nine = () => {
  const [id, setId] = useState("");
  const [AccountNameAr, setAccountNameAr] = useState(null);
  const [AccountNumberFin, setAccountNumberFin] = useState(null);
  const [AccountFinAr, setAccountFinAr] = useState(null);

  const handler = () => {
    setShortcut(data[id].shortcut);
    setJobEn(data[id].en_job);
    setOffice(data[id].officer);
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
                label="اكتب الوظيفة لتعرف الاختصار"
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
            <p className="jben">{AccountNumberFin}</p>
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
