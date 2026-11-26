import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="app-shell">
    <a className="skip-link" href="#main-content">
      تخطي إلى المحتوى
    </a>
    <Navbar />
    <div className="app-shell__body" id="main-content" tabIndex={-1}>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
