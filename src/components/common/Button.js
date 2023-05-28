import "./Button.css";

export default function Button(props) {
  const buttonWidth = !props.width ? 200 : props.width;
  const buttonHeight = !props.height ? 60 : props.height;
  const buttonText = !props.text ? "No text" : props.text;
  const buttonStyle = {
    width: buttonWidth + "px",
    height: buttonHeight + "px",
  };
  return (
    <>
      <button
        className={props.className}
        style={buttonStyle}
        type={!props.type ? "button" : props.type}
        onClick={props.handleClick}
        aria-label={props.ariaLabel}
      >
        <span className="call-to-action">{buttonText}</span>
      </button>
    </>
  );
}
