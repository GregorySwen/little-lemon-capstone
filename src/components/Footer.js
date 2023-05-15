import VerticalLogoMono from "../assets/VerticalLogoMono.png";
import socialLinkProps from "../util/SocialLinkProps";
import doormatLinkProps from "../util/DoormatNavLinkProps";
import Links from "./Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <img
          src={VerticalLogoMono}
          alt="Little Lemon Logo"
          height="200px"
        ></img>
      </div>
      <Links {...doormatLinkProps} />
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>Address</p>
        <span className="high-light-text">
          200 E RANDOLPH ST FL 20 CHICAGO IL USA
        </span>
        <p>Phone Number</p>
        <span className="high-light-text">1-309-370-3173</span>
        <p>Email</p>
        <span className="high-light-text">
          <FontAwesomeIcon icon={faEnvelope} /> email@email.com
        </span>
      </div>
      <>
        <Links {...socialLinkProps} />
      </>
      <div className="footer-copyright">
        <span className="high-light-text">© Little Lemon</span>
      </div>
    </footer>
  );
}
