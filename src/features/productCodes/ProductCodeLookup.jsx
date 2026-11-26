import { useState } from "react";
import Page from "../../components/Page";
import ResultList from "../../components/ResultList";
import SearchField from "../../components/SearchField";
import data from "../../data/productCodes";
import { getEntry } from "../../utils/lookup";

const ProductCodeLookup = () => {
  const [id, setId] = useState("");
  const product = getEntry(data, id);

  return (
    <Page>
      <form className="stack" onSubmit={(event) => event.preventDefault()}>
        <SearchField
          id="product-code"
          label="اكتب اسم / رمز المنتج للبحث"
          options={Object.keys(data)}
          value={id}
          onChange={setId}
        />
      </form>
      <ResultList
        items={[
          { id: "product", label: "اسم / كود المنتج", value: product?.ProductCode },
          { id: "symbol", label: "رمز المنتج", value: product?.Symbol },
          { id: "type", label: "فئة المنتج", value: product?.Type },
        ]}
      />
    </Page>
  );
};

export default ProductCodeLookup;
