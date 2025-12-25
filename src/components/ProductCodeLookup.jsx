import data from "../data/productCodes";
import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
const ProductCodeLookup = () => {
  const [id, setId] = useState("");
  const [productCode, setProductCode] = useState('');
  const [symbol, setSymbol] = useState("");
  const [type, setType] = useState("");
  // const [AccountFinAr, setAccountFinAr] = useState("");

  const handler = () => {
    // setAccountNameAr(data[id].AccArNme);
    // setAccountNumberFin(data[id].AccFinNo);
    // setAccountFinAr(data[id].FinAccArNme);  
    setProductCode(data[id].ProductCode);
    setSymbol(data[id].Symbol);
    setType(data[id].Type);
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
            onInputChange={(event, value) => {
              setId(value.toString());
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
                label="اكتب اسم / رمز المنتج للبحث:"
                sx={{ textAlign: "center" }}
              />
            )}

          />
        </Stack>
      </form>
      <div className="data">
        {productCode && (
          <div>
            <p>اسم / كود المنتج:</p>
            <p className="shrt">{productCode}</p>
          </div>
        )}
        {symbol && (
          <div>
            <p>رمز المنتج:</p>
            <p className="jben">{symbol}</p>
          </div>
        )}
        {type && (
          <div>
            <p>فئة المنتج:</p>
            <p className="off">{type}</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default ProductCodeLookup;
