import "./Hero.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import restaurantFood from "../../assets/RestaurantFood.webp";
import Title from "../common/Title";

export default function Hero() {
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/booking");
  };
  const buttonProps = {
    text: "Reserve a Table",
    width: 200,
    height: 60,
    type: "primary",
    handleClick: navigateToBooking,
  };
  return (
    <>
      <section className="hero-description">
        <Title />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button {...buttonProps} />
      </section>
      <section className="hero-image">
        <img
          src={restaurantFood}
          width="360px"
          height="360px"
          alt="Restaurant food."
        ></img>
      </section>
    </>
  );
}
