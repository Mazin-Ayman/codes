import { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
// import data from "../../output/out";
import data from "../data/cropSeasons";


const CropSeasonCalculator = () => {
  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState("");

  // Helper to safely get crop data
  const getCropData = () => {
    if (season && crop && data[season] && data[season][crop]) {
      return data[season][crop];
    }
    return null;
  };

  const cropData = getCropData();

  return (
    <main className="four">
      <form onSubmit={(e) => e.target.preventDefault()}>
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Autocomplete
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
            onInputChange={(e, v) => {
              setSeason(v || "");
              // Reset crop when season changes
              setCrop("");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="الفئة والموسم"
                sx={{ textAlign: "center" }}
              />
            )}
          />

          {season && (
            <Autocomplete
              id="crop-inp"
              options={data[season] ? Object.keys(data[season]) : []}
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
                setCrop(v || "");
              }}
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

      {cropData && (
        <div className="data">
          {cropData.tr_val && (
            <div className="tr-val">
              <span className="data-item-title">ري عادي:</span>
              <span className="data-item-value">{cropData.tr_val}</span>
            </div>
          )}

          {cropData.mod_val && (
            <div className="mod-val">
              <span className="data-item-title">ري حديث:</span>
              <span className="data-item-value">{cropData.mod_val}</span>
            </div>
          )}

          {cropData.tr_va_ind && (
            <div className="tr-val-ind">
              <span className="data-item-title">ري عادي أفراد:</span>
              <span className="data-item-value">{cropData.tr_va_ind}</span>
            </div>
          )}

          {cropData.min_val_cor && (
            <div className="tr-val-ind">
              <span className="data-item-title">حد أدنى عادي شركات:</span>
              <span className="data-item-value">{cropData.min_val_cor}</span>
            </div>
          )}

          {cropData.max_val_cor && (
            <div className="tr-val-ind">
              <span className="data-item-title">حد أقصى عادي شركات:</span>
              <span className="data-item-value">{cropData.max_val_cor}</span>
            </div>
          )}

          {cropData.begin && (
            <div className="begin-date">
              <span className="data-item-title">بداية المنح:</span>
              <span className="data-item-value">{cropData.begin}</span>
            </div>
          )}

          {cropData.end && (
            <div className="end-date">
              <span className="data-item-title">نهاية المنح:</span>
              <span className="data-item-value">{cropData.end}</span>
            </div>
          )}

          {cropData.due && (
            <div className="due">
              <span className="data-item-title">تاريخ الاستحقاق:</span>
              <span className="data-item-value">{cropData.due}</span>
            </div>
          )}

          {cropData.inst_no && (
            <div className="inst-number">
              <span className="data-item-title">كتاب دوري رقم:</span>
              <span className="data-item-value">{cropData.inst_no}</span>
            </div>
          )}

          {cropData.inst_dte && (
            <div className="inst-date">
              <span className="data-item-title">بتاريخ:</span>
              <span className="data-item-value">{cropData.inst_dte}</span>
            </div>
          )}

          {cropData.notes && (
            <div className="notes">
              <span className="data-item-title">ملاحظات:</span>
              <span className="data-item-value">{cropData.notes}</span>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default CropSeasonCalculator;
