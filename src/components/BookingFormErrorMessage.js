import "./BookingFormErrorMessage.css";

export default function BookingFormErrorMessage(props) {
  return props.touched && props.error ? (
    <span className="error-message">{props.error}</span>
  ) : null;
}
