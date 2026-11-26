import { useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import SearchField from "../../components/SearchField";
import data from "../../data/jobShortcuts";
import { getEntry } from "../../utils/lookup";

const JobShortcutsLookup = () => {
  const [id, setId] = useState("");
  const job = getEntry(data, id);

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <SearchField
          id="job-shortcut"
          label="اكتب الوظيفة لتعرف الاختصار"
          options={Object.keys(data)}
          value={id}
          onChange={setId}
        />
      </form>
      <ResultList
        items={[
          { id: "job", label: "الوظيفة", value: id },
          { id: "shortcut", label: "الاختصار", value: job?.shortcut },
          { id: "task", label: "Task", value: job?.en_job },
          { id: "officer", label: "المختص", value: job?.officer },
        ]}
      />
    </Page>
  );
};

export default JobShortcutsLookup;
