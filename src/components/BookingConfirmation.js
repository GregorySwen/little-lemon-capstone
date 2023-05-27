import { useEffect } from "react";
import "./BookingConfirmation.css";
import { useNavigate, useLocation } from "react-router-dom";
import { numberToWord } from "../utils/utils";
import confirmed from "../assets/Confirmed.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleUser,
  faEnvelope,
  faUserGroup,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./common/Button";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const formData = state && state.formData ? state.formData : undefined;
  const navigate = useNavigate();
  const buttonProps = {
    text: "Go Back to Homepage ",
    width: 200,
    height: 60,
    className: "primary",
    handleClick: () => {
      navigate("/");
    },
  };
  useEffect(() => {
    if (!formData) {
      navigate("/404", { ...{ state: { path: "booking-confirm" } } });
    }
  }, [formData, navigate]);
  return (
    <>
      <section className="booking-confirmation">
        <section className="stack">
          <img src={confirmed} width="50px" alt="a check mark"></img>
          <h1>See you soon, {formData.firstName}!</h1>
          <h3>Thanks for booking with us.</h3>
          <section className="booking-field">
            <span className="section-title">Dinning time:</span>
            <span className="section-text">
              <FontAwesomeIcon icon={faCalendar} size="lg" />
              &nbsp;
              {formData.dinningTime.toLocaleString()}
            </span>
          </section>
          <section className="booking-field">
            <span className="section-title">Number of guests:</span>
            <span className="section-text">
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
              &nbsp;
              {numberToWord(formData.numOfDiners)}
            </span>
          </section>
          <section className="booking-field">
            <span className="section-title">Occasion:</span>
            <span className="section-text">
              <FontAwesomeIcon icon={faWineGlass} size="lg" />
              &nbsp;
              {formData.occasion}
            </span>
          </section>
          <section className="booking-field">
            <span className="section-title">Name:</span>
            <span className="section-text">
              <FontAwesomeIcon icon={faCircleUser} size="lg" />
              &nbsp;
              {formData.firstName + " " + formData.lastName}
            </span>
          </section>
          {formData.email.length > 0 && (
            <section className="booking-field">
              <span className="section-title">Email:</span>
              <span className="section-text">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                &nbsp;{formData.email}
              </span>
            </section>
          )}
          <Button {...buttonProps} />
        </section>
      </section>
    </>
  );
}
