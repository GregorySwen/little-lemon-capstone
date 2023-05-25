import "./OrderDeliveryButton.css";
import { useEffect, useState } from "react";
import DeliveryIcon from "../../assets/DeliveryIcon.svg";
import { useNavigate } from "react-router-dom";

export default function OrderDeliveryButton(props) {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const itemName = !props.itemName ? undefined : props.itemName;
  useEffect(() => {
    if (itemName === undefined) {
      console.log("Error no item name");
      return;
    }
    if (clickCount !== 0) {
      console.log(`Added item id: ${itemName}`);
      return;
    }
  }, [clickCount, itemName]);
  const handleClick = () => {
    setClickCount((oldCount) => oldCount + 1);
    navigate("/order-online");
  };
  return (
    <button
      className="delivery-button"
      type="button"
      onClick={handleClick}
      style={{ border: "none" }}
    >
      <span className="call-to-action">
        Order a delivery&nbsp;&nbsp;
        <img src={DeliveryIcon} height="16px" alt="Delivery icon"></img>
      </span>
    </button>
  );
}
