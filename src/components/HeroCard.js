import Button from "./Button";
import restaurantFood from "../assets/restauranfood.jpg";
import Title from "./Title";

export default function HeroCard() {
  const buttonProps = { text: "Reserve a Table", width: 144, height: 32 };
  return (
    <section className="hero-card">
      <div className="col-1">
        <Title />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button {...buttonProps} />
      </div>
      <img
        src={restaurantFood}
        width="360px"
        height="360px"
        alt="Restaurant food."
      ></img>
    </section>
  );
}
