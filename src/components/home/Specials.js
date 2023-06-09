import "./Specials.css";
import highlightProps from "../../props/HighlightProps";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import SpecialCard from "./SpecialCard";

export default function Specials() {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate("/menu");
  };
  const buttonProps = {
    text: "Online Menu",
    width: 200,
    height: 60,
    className: "primary",
    handleClick: navigateToMenu,
    ariaLabel: "Open the online menu",
  };

  return (
    <section className="specials">
      <section className="stack">
        <h1>This week's specials!</h1>
        <Button {...buttonProps} />
      </section>
      <section className="stack">
        {highlightProps.map((item) => (
          <SpecialCard key={item.itemName} {...item} />
        ))}
      </section>
    </section>
  );
}
