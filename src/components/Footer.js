import DoormatNav from "./DoormatNav";
import Link from "./Link";

export default function Footer() {
  const socialLinks = [
    {
      linkTitle: "Facebook",
      href: "https://www.facebook.com",
      newTab: true,
    },
    {
      linkTitle: "Twitter",
      href: "https://twitter.com",
      newTab: true,
    },
  ];
  return (
    <footer>
      <div></div>
      <div>
        <DoormatNav />
      </div>
      <div></div>
      <div>
        <>Social Media Links</>
        <ul>
          {socialLinks.length > 0 &&
            socialLinks.map((link, idx) => (
              <li key={link.href + idx}>
                <Link {...link} />
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
}
