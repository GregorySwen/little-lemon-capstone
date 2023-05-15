import Logo from "../assets/Logo.svg";
import Links from "./Links";
import navLinkProps from "../util/NavLinkProps";

export default function Nav() {
  return (
    <nav>
      <>
        <img
          className="nav-logo"
          src={Logo}
          alt="Logo for Little Lemon"
          width="202px"
          height="76px"
        ></img>
      </>
      <>
        <Links {...navLinkProps} />
      </>
    </nav>
  );
}
