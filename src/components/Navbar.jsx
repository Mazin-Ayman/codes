import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import logo from "../NewLogo44.jpg";

// /cert, /dep and /tiered stay reachable by URL but are intentionally
// left out of the menu, matching the original app.
const NAV_LINKS = [
  { to: "/", label: "درجة التقييم الرقمي" },
  { to: "/code", label: "أكواد البنوك بتقرير iScore" },
  { to: "/short", label: "قوائم واختصارات الـ Finacle" },
  { to: "/cr", label: "الفئات التسليفية الزراعية" },
  { to: "/payback", label: "الجداول الاستردادية للشهادات" },
  { to: "/prodcodes", label: "أكواد المنتجات على فيناكل" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="القائمة الرئيسية">
        <div className="site-nav__actions">
          <button
            type="button"
            className={`menu-toggle${isOpen ? " is-open" : ""}`}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <ThemeToggle />
        </div>
        <Link to="/" className="site-logo" aria-label="الصفحة الرئيسية">
          <img className="site-logo__img" src={logo} alt="شعار" />
        </Link>
      </nav>
      <div id="site-menu" className={`site-menu${isOpen ? " is-open" : ""}`}>
        <ul className="site-menu__list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `site-menu__link${isActive ? " is-active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
