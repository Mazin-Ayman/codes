import data from "./../../data2";
import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
const Three = () => {
  const [id, setId] = useState("");
  const [shortcut, setShortcut] = useState(null);
  const [jobEn, setJobEn] = useState(null);
  const [office, setOffice] = useState(null);

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
            // freeSolo
          />
        </Stack>
      </form>
      <div className="data">
        {shortcut && (
          <div>
            <p>الإختصار:</p>
            <p className="shrt">{shortcut}</p>
          </div>
        )}
        {jobEn && (
          <div>
            <p>الوظيفة:</p>
            <p className="jben">{jobEn}</p>
          </div>
        )}
        {office && (
          <div>
            <p>المختص:</p>
            <p className="off">{office}</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Three;
