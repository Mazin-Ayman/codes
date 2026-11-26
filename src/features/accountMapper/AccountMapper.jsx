import { useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import SearchField from "../../components/SearchField";
import data from "../../data/accountMappings";
import { getEntry } from "../../utils/lookup";

const AccountMapper = () => {
  const [id, setId] = useState("");
  const account = getEntry(data, id);

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <SearchField
          id="account-number"
          label="اكتب رقم الحساب أرابنك"
          options={Object.keys(data)}
          value={id}
          onChange={setId}
        />
      </form>
      <ResultList
        items={[
          { id: "arabi-account", label: "اسم الحساب أرابنك", value: account?.AccArNme },
          { id: "finacle-number", label: "رقم الحساب فينكال", value: account?.AccFinNo },
          { id: "finacle-name", label: "اسم الحساب فينكال", value: account?.FinAccArNme },
        ]}
      />
    </Page>
  );
};

export default AccountMapper;
