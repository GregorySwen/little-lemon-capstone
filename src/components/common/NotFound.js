import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const path = state && state.path ? state.path : undefined;
  const back = () => {
    navigate("/");
  };
  const buttonProps = {
    text: "Back to Home Page",
    width: 200,
    height: 60,
    className: "primary",
    handleClick: back,
  };
  return (
    <>
      <section className="not-found">
        <section className="stack">
          <h1>Page Not Found</h1>
          {path && <h2>Your requested path "{path}" does not exist.</h2>}
          <Button {...buttonProps} />
        </section>
      </section>
    </>
  );
}
