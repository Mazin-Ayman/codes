import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreditScoreEvaluator from "./components/CreditScoreEvaluator";
import BankCodeLookup from "./components/BankCodeLookup";
import JobShortcutsLookup from "./components/JobShortcutsLookup";
import CropSeasonCalculator from "./components/CropSeasonCalculator";
import CertificateBreakageCalculator from "./components/CertificateBreakageCalculator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SimpleDepositInterestCalculator from "./components/SimpleDepositInterestCalculator";
import CertificateRedemptionTable from './components/CertificateRedemptionTable';
import AccountMapper from './components/AccountMapper';
import ProductCodeLookup from './components/ProductCodeLookup';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<CreditScoreEvaluator />} />
        <Route path="/code" element={<BankCodeLookup />} />
        <Route path="/short" element={<JobShortcutsLookup />} />
        <Route path="/cr" element={<CropSeasonCalculator />} />
        <Route path="/cert" element={<CertificateBreakageCalculator />} />
        <Route path="/dep" element={<SimpleDepositInterestCalculator />} />
        <Route path="/payback" key={"payback"} element={<CertificateRedemptionTable />} />
        <Route path="/oldnums" key={"oldnums"} element={<AccountMapper />} />
        <Route path="/prodcodes" key={"prodcodes"} element={<ProductCodeLookup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
