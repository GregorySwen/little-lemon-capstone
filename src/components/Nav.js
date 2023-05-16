import Logo from "../assets/Logo.svg";
import Links from "./Links";
import navLinkProps from "../props/NavLinkProps";

export default function Nav() {
  return (
    <nav>
      <img
        className="nav-logo"
        src={Logo}
        alt="Logo for Little Lemon"
        width="240px"
      ></img>
      <Links {...navLinkProps} />
    </nav>
  );
}
