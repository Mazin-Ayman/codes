import { Link, useNavigate } from "react-router-dom";

import { useRef, useState } from "react";
import logo from "../../public/NewLogo4.png";

import "./navbar2.css";

const Navbar2 = () => {
  const [link, setLink] = useState("one");
  const navigate = useNavigate();
  const menuRef = useRef();
  const linksRef = useRef();

  const handleClick = () => {
    [menuRef, linksRef].map((one) => one.current.classList.toggle("active"));
  };
  const linksClick = (linkName) => {
    setLink(linkName);
    [menuRef, linksRef].map((one) => one.current.classList.toggle("active"));
  };

  return (
    <header className="navbar2">
      <nav>
        <div className="mine" ref={menuRef} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className="logo-box"
          onClick={() => {
            navigate("/");
            setLink("one");
          }}
        >
          <img
            className="logo-img"
            src={logo}
            alt="logo"
          />
        </div>
      </nav>
      <div className="links" ref={linksRef}>
        <ul>
          <li className={link === "one" ? "on" : ""}>
            <Link to="/" onClick={(e) => linksClick("one")}>
              درجة التقييم الرقمي
            </Link>
          </li>
          <li className={link === "two" ? "on" : ""}>
            <Link to="/code" onClick={(e) => linksClick("two")}>
               أكواد البنوك بتقرير iScore
            </Link>
          </li>
          <li className={link === "three" ? "on" : ""}>
            <Link to="/short" onClick={(e) => linksClick("three")}>
               قوائم واختصارات الـ Finacle
            </Link>
          </li>
          <li className={link == "four" ? "on" : ""}>
            <Link to="/cr" onClick={(e) => linksClick("four")}>
              الفئات التسليفية الزراعية
            </Link>
          </li>
          <li className={link == "five" ? "on" : ""}>
            <Link to="/cert" onClick={(e) => linksClick("five")}>
              استرداد شهادة مجددة
            </Link>
          </li>
          <li className={link == "six" ? "on" : ""}>
            <Link to="/dep" onClick={(e) => linksClick("six")}>
              كسر وديعة قبل الاستحقاق
            </Link>
          </li>
          <li className={link == "six" ? "on" : ""}>
            <Link to="/payback" onClick={(e) => linksClick("six")}>
            الجداول الاستردادية للشهادات
            </Link>
          </li>
          <li className={link == "six" ? "on" : ""}>
            <Link to="/oldnums" onClick={(e) => linksClick("six")}>
            أرقام حسابات أرابنك - فيناكل
            </Link>
          </li>
          <li className={link == "three" ? "on" : ""}>
            <Link to="/prodcodes" onClick={(e) => linksClick("three")}>
            أكواد المنتجات على فيناكل
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar2;
