import { useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import SearchField from "../../components/SearchField";
import data from "../../data/cropSeasons";
import { getEntry } from "../../utils/lookup";
import { CROP_FIELDS } from "./fields";

const CropSeasonCalculator = () => {
  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState("");

  const seasonData = getEntry(data, season);
  const cropData = getEntry(seasonData, crop);

  const items = CROP_FIELDS.filter(
    ([key]) => cropData && cropData[key] !== undefined && cropData[key] !== null && cropData[key] !== ""
  ).map(([key, label]) => ({ id: key, label, value: cropData[key] }));

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <SearchField
          id="crop-season"
          label="الفئة والموسم"
          options={Object.keys(data)}
          value={season}
          onChange={(nextSeason) => {
            setSeason(nextSeason);
            setCrop("");
          }}
        />
        {seasonData && (
          <SearchField
            id="crop-name"
            label="المحصول"
            options={Object.keys(seasonData)}
            value={crop}
            onChange={setCrop}
          />
        )}
      </form>
      <ResultList items={items} />
    </Page>
  );
};

export default CropSeasonCalculator;
