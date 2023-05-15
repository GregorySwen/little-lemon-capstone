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
        <p>200 E RANDOLPH ST FL 20 CHICAGO IL USA</p>
        <p>Phone Number</p>
        <p>1-309-370-3173</p>
        <p>Email</p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> email@email.com
        </p>
      </div>
      <>
        <Links {...socialLinkProps} />
      </>
      <div className="footer-copyright">
        <p>© Little Lemon</p>
      </div>
    </footer>
  );
}
