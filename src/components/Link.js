export default function Link(props) {
  return (
    <div>
      <a
        href={props.href}
        target={props.newTab ? "_blank" : "_self"}
        rel="noreferrer"
      >
        {props.linkTitle.toUpperCase()}{" "}
      </a>
    </div>
  );
}
