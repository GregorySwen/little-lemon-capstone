import { useFormik } from "formik";
import "./BookingPage.css";
import Button from "./common/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getYMDString, joinDinningTime, offsetTimeZone } from "../utils/utils";
import { useEffect, useRef } from "react";

export default function BookingPage(props) {
  const tempDateRef = useRef(undefined);
  useEffect(() => {
    if (tempDateRef.current) {
      console.log(tempDateRef.current);
    }
  }, [tempDateRef]);
  const navigate = useNavigate();
  const occasions = ["Casual", "Birthday", "Anniversary"];
  const today = offsetTimeZone(getYMDString());
  const buttonProps = {
    text: "Make Your reservation",
    width: 200,
    height: 60,
    className: "primary",
    type: "submit",
  };

  const bookingFormik = useFormik({
    initialValues: {
      date: today,
      time: props.availableTimes[0],
      dinningTime: joinDinningTime(today, props.availableTimes[0]),
      numOfDiners: 1,
      occasion: occasions[0],
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object().shape({
      date: Yup.date().min(
        today,
        "The Date field is invalid for reservation, please choose a future date."
      ),
      time: Yup.string().test(
        "The Time field is not in the selection dropdown list, please choose options from the list.",
        (time) => {
          return props.availableTimes.indexOf(time) >= 0;
        }
      ),
      dinningTime: Yup.date().min(
        new Date(),
        `The Time field is invalid for reservation, please choose a time later than ${new Date().toLocaleString()} `
      ),
      numOfDiners: Yup.number()
        .min(
          1,
          "The Number of guests field is less than one, please increase the input."
        )
        .max(
          !props.maxNumOfGuests ? 10 : props.maxNumOfGuests,
          `The Number of guests field is greater than ${
            !props.maxNumOfGuests ? 10 : props.maxNumOfGuests
          }, please decrease the input.`
        )
        .typeError(
          "The Number of guests field is not a number, please enter a number."
        ),
      occasion: Yup.string().test(
        "The Occasion field is not in the selection dropdown list, please choose options from the list.",
        (occasion) => {
          return occasions.indexOf(occasion) >= 0;
        }
      ),
      firstName: Yup.string()
        .trim()
        .min(3, "The First name field should be at least 3 characters long.")
        .required(
          "The First name field is empty, it is a required field and must be filled in."
        ),
      lastName: Yup.string()
        .trim()
        .min(3, "The Last name field should be at least 3 characters long.")
        .required(
          "The Last name field is empty, it is a required field and must be filled in."
        ),
      email: Yup.string().email("Please enter a valid email address."),
    }),
    validateOnChange: false,
    onSubmit: (data) => {
      data.firstName = data.firstName.trim();
      data.lastName = data.lastName.trim();
      data.email = data.email.trim();
      if (!submitAPI) {
        throw Error("Cannot load submitAPI");
      }
      /*global submitAPI*/
      /*eslint no-undef: "error"*/

      const result = submitAPI(data);
      if (result) {
        navigate("/booking-confirm", { ...{ state: { formData: data } } });
      }
    },
  });
  return (
    <>
      <section className="booking-page">
        <section className="stack">
          <h1>Book Now</h1>
          <form className="booking-form" onSubmit={bookingFormik.handleSubmit}>
            <label className="call-to-action" htmlFor="res-date">
              Choose date
            </label>
            <input
              type="date"
              id="res-date"
              className={`form-control ${
                bookingFormik.touched.date &&
                bookingFormik.errors.date &&
                "is-invalid"
              }`}
              min={getYMDString(today)}
              value={getYMDString(bookingFormik.values.date)}
              onChange={(e) => {
                const inputDate = offsetTimeZone(e.target.value);
                bookingFormik.setFieldValue("date", inputDate);
                const oldTimeValue = bookingFormik.values.time;
                props.availableTimesDispatch({
                  date: inputDate,
                });
                if (props.availableTimes.indexOf(oldTimeValue) >= 0) {
                  bookingFormik.setFieldValue("time", oldTimeValue);
                  bookingFormik.setFieldValue(
                    "dinningTime",
                    joinDinningTime(inputDate, oldTimeValue)
                  );
                  return;
                }
                bookingFormik.setFieldValue("time", props.availableTimes[0]);
                bookingFormik.setFieldValue(
                  "dinningTime",
                  joinDinningTime(inputDate, props.availableTimes[0])
                );
              }}
              onBlur={bookingFormik.handleBlur}
            />
            {bookingFormik.errors.date && (
              <span className="error-message">{bookingFormik.errors.date}</span>
            )}
            <label className="call-to-action" htmlFor="res-time">
              Choose time
            </label>
            <select
              id="res-time"
              className={`form-control ${
                bookingFormik.touched.time &&
                bookingFormik.errors.time &&
                "is-invalid"
              }`}
              value={props.availableTimes.indexOf(bookingFormik.values.time)}
              onChange={(e) => {
                bookingFormik.setFieldValue(
                  "time",
                  props.availableTimes[e.target.value]
                );
                bookingFormik.setFieldValue(
                  "dinningTime",
                  joinDinningTime(
                    bookingFormik.values.date,
                    props.availableTimes[e.target.value]
                  )
                );
              }}
              onBlur={bookingFormik.handleBlur}
            >
              {props.availableTimes.map((time, idx) => (
                <option key={time + idx} value={idx}>
                  {time}
                </option>
              ))}
            </select>
            {bookingFormik.errors.time && (
              <span className="error-message">{bookingFormik.errors.time}</span>
            )}
            {bookingFormik.errors.dinningTime && (
              <span className="error-message">
                {bookingFormik.errors.dinningTime}
              </span>
            )}
            <label className="call-to-action" htmlFor="guests">
              Number of guests
            </label>
            <input
              type="number"
              value={bookingFormik.values.numOfDiners}
              onChange={(e) => {
                bookingFormik.setFieldValue(
                  "numOfDiners",
                  parseInt(e.target.value)
                );
              }}
              onBlur={bookingFormik.handleBlur}
              placeholder="1"
              min="1"
              max={
                !props.maxNumOfGuests ? "10" : props.maxNumOfGuests.toString()
              }
              className={`form-control ${
                bookingFormik.touched.numOfDiners &&
                bookingFormik.errors.numOfDiners &&
                "is-invalid"
              }`}
              id="guests"
            />
            {bookingFormik.errors.numOfDiners && (
              <span className="error-message">
                {bookingFormik.errors.numOfDiners}
              </span>
            )}
            <label className="call-to-action" htmlFor="occasion">
              Occasion
            </label>
            <select
              id="occasion"
              className={`form-control ${
                bookingFormik.touched.occasion &&
                bookingFormik.errors.occasion &&
                "is-invalid"
              }`}
              value={occasions.indexOf(bookingFormik.values.occasion)}
              onChange={(e) => {
                bookingFormik.setFieldValue(
                  "occasion",
                  occasions[e.target.value]
                );
              }}
            >
              {occasions.map((occasion, idx) => (
                <option key={occasion + idx} value={idx}>
                  {occasion}
                </option>
              ))}
            </select>
            {bookingFormik.errors.occasion && (
              <span className="error-message">
                {bookingFormik.errors.occasion}
              </span>
            )}
            <label className="call-to-action" htmlFor="first-name">
              First name
            </label>
            <input
              type="text"
              value={bookingFormik.values.firstName}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="First name"
              name="firstName"
              className={`form-control ${
                bookingFormik.touched.firstName &&
                bookingFormik.errors.firstName &&
                "is-invalid"
              }`}
              id="first-name"
            />
            {bookingFormik.touched.firstName &&
              bookingFormik.errors.firstName && (
                <span className="error-message">
                  {bookingFormik.errors.firstName}
                </span>
              )}
            <label className="call-to-action" htmlFor="last-name">
              Last name
            </label>
            <input
              type="text"
              value={bookingFormik.values.lastName}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="Last name"
              name="lastName"
              id="last-name"
              className={`form-control ${
                bookingFormik.touched.lastName &&
                bookingFormik.errors.lastName &&
                "is-invalid"
              }`}
            />
            {bookingFormik.touched.lastName &&
              bookingFormik.errors.lastName && (
                <span className="error-message">
                  {bookingFormik.errors.lastName}
                </span>
              )}

            <label className="call-to-action" htmlFor="booking-email">
              Email&nbsp;-&nbsp;optional
            </label>
            <input
              type="email"
              value={bookingFormik.values.email}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="email@example.com"
              id="booking-email"
              name="email"
              className={`form-control ${
                bookingFormik.touched.email &&
                bookingFormik.errors.email &&
                "is-invalid"
              }`}
            />
            {bookingFormik.touched.email && bookingFormik.errors.email && (
              <span className="error-message">
                {bookingFormik.errors.email}
              </span>
            )}

            <Button {...buttonProps} />
          </form>
        </section>
      </section>
    </>
  );
}
