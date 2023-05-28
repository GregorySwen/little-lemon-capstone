import "./BookingFormErrorMessage.css";

export default function BookingFormErrorMessage(props) {
  return props.touched && props.error ? (
    <span className="error-message" data-testid="form-error">
      {props.error}
    </span>
  ) : null;
}
