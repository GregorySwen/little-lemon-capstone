import "./Footer.css";
import VerticalLogoMono from "../assets/VerticalLogoMono.png";
import socialLinkProps from "../props/SocialLinkProps";
import doormatLinkProps from "../props/DoormatNavLinkProps";
import Links from "./common/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer>
      <section className="stack">
        <img
          src={VerticalLogoMono}
          alt="Little Lemon Logo"
          height="200px"
        ></img>
        <section className="doormat-nav">
          <Links {...doormatLinkProps} />
        </section>
        <section className="footer-contact">
          <h3>Contact</h3>
          <p>Address</p>
          <span className="high-light-text">
            200 E RANDOLPH ST FL 20 CHICAGO IL USA
          </span>
          <p>Phone Number</p>
          <span className="high-light-text">1-309-370-3173</span>
          <p>Email</p>
          <span className="high-light-text">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
            <a href="mailto: email@email.com">email@email.com</a>
          </span>
        </section>
        <section className="social-nav">
          <Links {...socialLinkProps} />
        </section>
      </section>
      <section className="footer-copyright">
        <span className="high-light-text">© Little Lemon</span>
      </section>
    </footer>
  );
}
