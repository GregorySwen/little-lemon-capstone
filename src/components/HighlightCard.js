import OrderDeliveryButton from "./OrderDeliveryButton";

export default function HighlightCard(props) {
  return (
    <div
      className="highlight-card"
      style={{ borderRadius: "16px 16px 0px 0px" }}
    >
      <div className="row-1">
        <img
          src={props.image}
          alt={!props.alt ? `A picture of ${props.itemName}` : props.alt}
          style={{ borderRadius: "16px 16px 0px 0px", objectFit: "cover" }}
          width="265px"
          height="185px"
        ></img>
      </div>
      <div className="row-2">
        <h6>{props.itemName}</h6>
        <span className="high-light-text">{`$${props.price.toFixed(2)}`}</span>
      </div>
      <div className="row-3">
        <p>{props.description}</p>
      </div>
      <div className="row-4">
        <OrderDeliveryButton {...props} />
      </div>
    </div>
  );
}
