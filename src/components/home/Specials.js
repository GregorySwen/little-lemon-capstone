import "./Specials.css";
import highlightProps from "../../props/HighlightProps";
import Button from "../common/Button";
import SpecialCard from "./SpecialCard";

export default function Specials() {
  const buttonProps = {
    text: "Online Menu",
    width: 200,
    height: 60,
    type: "primary",
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
