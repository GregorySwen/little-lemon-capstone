import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const youTubeIcon = <FontAwesomeIcon icon={faYoutube} />;

const links = [
  {
    linkTitle: "Facebook",
    href: "https://www.facebook.com",
    newTab: true,
    icon: facebookIcon,
  },
  {
    linkTitle: "Instagram",
    href: "https://www.instagram.com/",
    newTab: true,
    icon: instagramIcon,
  },
  {
    linkTitle: "Twitter",
    href: "https://twitter.com",
    newTab: true,
    icon: twitterIcon,
  },
  {
    linkTitle: "YouTube",
    href: "https://youtu.be/dQw4w9WgXcQ",
    newTab: true,
    icon: youTubeIcon,
  },
];

const socialLinkProps = {
  title: <h3>Follow us</h3>,
  links,
  isUpperCase: false,
};

export default socialLinkProps;
