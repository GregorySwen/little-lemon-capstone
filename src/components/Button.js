export default function Button(props) {
  const buttonWidth = !props.width ? 200 : props.width;
  const buttonHeight = !props.height ? 60 : props.height;
  const buttonText = !props.text ? "No text" : props.text;
  const buttonBackground = "#F4CE14";
  const buttonStyle = {
    width: buttonWidth + "px",
    height: buttonHeight + "px",
    background: buttonBackground,
    color: "#333333",
    borderRadius: "16px",
    border: "none",
  };
  return (
    <>
      <button style={buttonStyle} type="button">
        <span
          className="call-to-action"
          style={{ background: buttonBackground, color: "#333333" }}
        >
          {buttonText}
        </span>
      </button>
    </>
  );
}
