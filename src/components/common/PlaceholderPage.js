import "./PlaceholderPage.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function PlaceholderPage(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const buttonProps = {
    text: "Go Back",
    width: 200,
    height: 60,
    type: "primary",
    handleClick: back,
  };
  return (
    <>
      <section className="placeholder">
        <section className="stack">
          <h1>{!props.title ? "Placeholder Page" : props.title}</h1>
          <Button {...buttonProps} />
          {props.others && props.others}
        </section>
      </section>
    </>
  );
}