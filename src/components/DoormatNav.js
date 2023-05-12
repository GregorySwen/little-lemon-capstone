import Link from "./Link";

export default function DoormatNav() {
  const links = [
    {
      linkTitle: "Home",
      href: "/home",
      newTab: false,
    },
    {
      linkTitle: "About",
      href: "/about",
      newTab: false,
    },
    {
      linkTitle: "Menu",
      href: "/menu",
      newTab: false,
    },
    {
      linkTitle: "Reservations",
      href: "/reservations",
      newTab: false,
    },
    {
      linkTitle: "Order Online",
      href: "/order-online",
      newTab: false,
    },
    {
      linkTitle: "Login",
      href: "/login",
      newTab: false,
    },
  ];
  return (
    <>
      <>Doormat Navigation</>
      <ul>
        {links.length > 0 &&
          links.map((link, idx) => (
            <li key={link.href + idx}>
              <Link {...link} />
            </li>
          ))}
      </ul>
    </>
  );
}
