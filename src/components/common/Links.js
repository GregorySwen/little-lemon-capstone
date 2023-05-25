import { Link } from "react-router-dom";

export default function Links(props) {
  const ulStyle = {
    listStyleType: "none",
  };
  const liStyle = props.isHorizontal ? { display: "inline-block" } : undefined;
  const getTitle = (link) => {
    if (link.icon) {
      return (
        <span>
          {link.icon}&nbsp;{link.linkTitle}
        </span>
      );
    }
    return <span>{link.linkTitle}</span>;
  };
  return !!props.links && props.links.length > 0 ? (
    <>
      {!!props.title && props.title}
      <ul style={ulStyle}>
        {props.links.map((link, idx) => (
          <li key={link.href + idx} style={liStyle}>
            <Link to={link.href} target={link.newTab ? "_blank" : "_self"}>
              {getTitle(link)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <></>
  );
}
