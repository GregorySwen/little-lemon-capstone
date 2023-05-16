import Button from "./Button";
import restaurantFood from "../assets/restauranfood.jpg";

export default function HeroCard() {
  const buttonProps = { text: "Reserve a Table", width: 150, height: 30 };
  return (
    <section className="hero-card">
      <div className="col-1">
        <div className="row-1">
          {" "}
          <h1>Little Lemon</h1>
        </div>
        <div className="row-2">
          {" "}
          <h2>Chicago</h2>
        </div>
        <div className="row-3">
          {" "}
          <p>We are a family owned</p>
          <p>Mediterranean restaurant,</p>
          <p>focused on traditional</p>
          <p>recipes served with a modern</p>
          <p>twist.</p>
        </div>
        <div className="row-4">
          {" "}
          <Button {...buttonProps} />
        </div>
      </div>
      <div className="col-2">
        <img
          src={restaurantFood}
          width="360px"
          height="360px"
          alt="Restaurant food."
        ></img>
      </div>
    </section>
  );
}
