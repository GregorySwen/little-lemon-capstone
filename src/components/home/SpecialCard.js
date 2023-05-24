import "./SpecialCard.css";
import OrderDeliveryButton from "../common/OrderDeliveryButton";

export default function SpecialCard(props) {
  return (
    <article
      className="special-card"
      style={{ borderRadius: "16px 16px 0px 0px" }}
    >
      <section className="row-1">
        <img
          src={props.image}
          alt={!props.alt ? `A picture of ${props.itemName}` : props.alt}
          style={{ borderRadius: "16px 16px 0px 0px", objectFit: "cover" }}
          width="265px"
          height="185px"
        ></img>
      </section>
      <section className="row-2">
        <h6>{props.itemName}</h6>
        <span className="high-light-text">{`$${props.price.toFixed(2)}`}</span>
      </section>
      <section className="row-3">
        <p>{props.description}</p>
      </section>
      <section className="row-4">
        <OrderDeliveryButton {...props} />
      </section>
    </article>
  );
}
