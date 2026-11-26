import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const CreditScoreEvaluator = lazy(() => import("./features/creditScore/CreditScoreEvaluator"));
const BankCodeLookup = lazy(() => import("./features/bankCodes/BankCodeLookup"));
const JobShortcutsLookup = lazy(() => import("./features/jobShortcuts/JobShortcutsLookup"));
const CropSeasonCalculator = lazy(() => import("./features/cropSeasons/CropSeasonCalculator"));
const CertificateBreakageCalculator = lazy(
  () => import("./features/certificateBreakage/CertificateBreakageCalculator")
);
const CertificateRedemptionTable = lazy(
  () => import("./features/certificateRedemption/CertificateRedemptionTable")
);
const SimpleDepositInterestCalculator = lazy(
  () => import("./features/depositInterest/SimpleDepositInterestCalculator")
);
const TieredDepositCalculator = lazy(
  () => import("./features/tieredDeposit/TieredDepositCalculator")
);
const AccountMapper = lazy(() => import("./features/accountMapper/AccountMapper"));
const ProductCodeLookup = lazy(() => import("./features/productCodes/ProductCodeLookup"));

const App = () => (
  <Layout>
    <Suspense fallback={<p className="route-loading">جارٍ التحميل...</p>}>
      <Routes>
        <Route path="/" element={<CreditScoreEvaluator />} />
        <Route path="/code" element={<BankCodeLookup />} />
        <Route path="/short" element={<JobShortcutsLookup />} />
        <Route path="/cr" element={<CropSeasonCalculator />} />
        <Route path="/cert" element={<CertificateBreakageCalculator />} />
        <Route path="/dep" element={<SimpleDepositInterestCalculator />} />
        <Route path="/tiered" element={<TieredDepositCalculator />} />
        <Route path="/payback" element={<CertificateRedemptionTable />} />
        <Route path="/oldnums" element={<AccountMapper />} />
        <Route path="/prodcodes" element={<ProductCodeLookup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
