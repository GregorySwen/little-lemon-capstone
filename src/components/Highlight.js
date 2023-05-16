import highlightProps from "../props/HighlightProps";
import Button from "./Button";
import HighlightCard from "./HighlightCard";

export default function Highlight() {
  const buttonProps = { text: "Online Menu", width: 150, height: 40 };

  return (
    <>
      <h2>This week's specials!</h2>
      <Button {...buttonProps} />
      <div className="cards">
        {highlightProps.map((item) => (
          <HighlightCard key={item.itemName} {...item} />
        ))}
      </div>
    </>
  );
}
