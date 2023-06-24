import { Link, useNavigate } from "react-router-dom";
// import './nav.css'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>القائمة</div>
      <div className="links">
        <Link to="/short">اختصارات</Link>
        <Link to='/code'>أكواد البنوك</Link>
      </div>
    </nav>
  );
}
export default Navbar;
