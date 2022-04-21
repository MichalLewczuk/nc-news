import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <MobileNavigation></MobileNavigation>
      <Logo></Logo>
      <Navigation></Navigation>

      <div className="loginIcon">
        <FontAwesomeIcon className="faUserLarge" icon={faUserLarge} />
      </div>
    </header>
  );
}

export default Header;
