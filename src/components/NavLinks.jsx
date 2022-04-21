import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <div className="nav-links">
      <Link
        to="/articles"
        className="nav-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Articles
      </Link>
      <Link
        to="/topics"
        className="nav-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Topics
      </Link>
      <Link
        to="/users"
        className="nav-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Users
      </Link>
      <Link
        to="/login"
        className="nav-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Login
      </Link>
    </div>
  );
}

export default NavLinks;
