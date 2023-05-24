import "./Button.css";

export default function Button(props) {
  const buttonWidth = !props.width ? 200 : props.width;
  const buttonHeight = !props.height ? 60 : props.height;
  const buttonText = !props.text ? "No text" : props.text;
  const buttonStyle = {
    width: buttonWidth + "px",
    height: buttonHeight + "px",
  };
  const handleClick = () => {
    if (!props.handleClick) {
      return;
    }
    props.handleClick();
  };
  return (
    <>
      <button
        className={props.type}
        style={buttonStyle}
        type="button"
        onClick={handleClick}
      >
        <span className="call-to-action">{buttonText}</span>
      </button>
    </>
  );
}
