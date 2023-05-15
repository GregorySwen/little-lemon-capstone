export default function Links(props) {
  const ulStyle = {
    listStyleType: "none",
  };
  const liStyle = props.isHorizontal ? { display: "inline-block" } : undefined;
  return !!props.links && props.links.length > 0 ? (
    <div className={props.className}>
      {!!props.title && props.title}
      <ul style={ulStyle}>
        {props.links.map((link, idx) => (
          <li key={link.href + idx} style={liStyle}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {!!link.icon && <>{link.icon} </>}
              {props.isUpperCase
                ? link.linkTitle.toUpperCase()
                : link.linkTitle}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
}
