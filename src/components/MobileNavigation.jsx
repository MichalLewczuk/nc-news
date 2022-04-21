import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FontAwesomeIcon
      className="faBars"
      icon={faBars}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FontAwesomeIcon
      className="faCircleXmark"
      icon={faCircleXmark}
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-nav">
      <div className="burger"></div>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}></NavLinks>
      )}
    </nav>
  );
}

export default MobileNavigation;
