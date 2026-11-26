import { useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import SearchField from "../../components/SearchField";
import data from "../../data/bankCodes";
import { getEntry } from "../../utils/lookup";

const BankCodeLookup = () => {
  const [id, setId] = useState("");
  const bank = getEntry(data, id);

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <SearchField
          id="bank-code"
          label="الكود الوارد باستعلام iScore"
          options={Object.keys(data)}
          value={id}
          onChange={setId}
        />
      </form>
      <ResultList
        items={[
          { id: "bank-ar", label: "اسم البنك بالعربية", value: bank?.bankNameAr },
          { id: "bank-en", label: "اسم البنك بالإنجليزية", value: bank?.bankNameEn },
        ]}
      />
    </Page>
  );
};

export default BankCodeLookup;
