import { useFormik } from "formik";
import "./BookingPage.css";
import Button from "./common/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getFieldClassName, getYMDString } from "../utils/utils";
import BookingFormErrorMessage from "./BookingFormErrorMessage";
import { useCallback, useEffect, useRef } from "react";
import { testSubmitAPI } from "../utils/api";

export default function BookingPage(props) {
  const resDateRef = useRef({ value: "" });
  const { availableTimes, availableTimesDispatch } = props;
  const navigate = useNavigate();
  const occasions = ["Casual", "Birthday", "Anniversary"];
  const buttonProps = {
    text: "Make Your reservation",
    width: 200,
    height: 60,
    className: "primary",
    type: "submit",
    ariaLabel: "Submit",
  };

  const getChooseTimeErrorMessage = () => {
    if (availableTimes.length === 0) {
      return "The Choose time field is empty, there are no options please choose a valid date to get the time.";
    }
    return "The Choose time field is not in the selection dropdown list, please choose an option from the list.";
  };

  const bookingFormik = useFormik({
    initialValues: {
      resDate: "",
      resTime: availableTimes.length > 0 ? availableTimes[0] : "",
      dinningTime: null,
      numOfDiners: "1",
      occasion: occasions[0],
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object().shape({
      resDate: Yup.date()
        .required(
          "The Choose date field is empty, it is a required field and must be filled in."
        )
        .min(
          getYMDString(),
          "The Choose date field is invalid for reservation, please choose a future date."
        ),
      resTime: Yup.string().test(
        "in-the-list",
        getChooseTimeErrorMessage(),
        (resTIme) => {
          return availableTimes.indexOf(resTIme) >= 0;
        }
      ),
      dinningTime: Yup.date()
        .required(
          "The time you chose is not valid, please choose a valid date, then check the updated time options and choose a time."
        )
        .typeError(
          "The time you chose is not valid, please choose a valid date, then check the updated time options and choose a time."
        )
        .min(
          new Date(),
          `The Choose time field is invalid for reservation, please choose a time later than ${new Date().toLocaleString()} `
        ),
      numOfDiners: Yup.number()
        .required(
          "The number of guests field is empty, it is a required field and must be filled in. "
        )
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
      data.numOfDiners = parseInt(data.numOfDiners);
      data.firstName = data.firstName.trim();
      data.lastName = data.lastName.trim();
      data.email = data.email.trim();
      if (!submitAPI && !props.isTest) {
        throw Error("Cannot load submitAPI");
      }
      /*global submitAPI*/
      /*eslint no-undef: "error"*/

      const result = props.isTest ? testSubmitAPI(data) : submitAPI(data);
      if (result && !props.isTest) {
        navigate("/booking-confirm", { ...{ state: { formData: data } } });
      }
    },
  });
  const { errors, touched, values } = bookingFormik;
  const handleResTimeChange = useCallback(
    (e) => {
      bookingFormik.setFieldValue("resTime", e.target.value).then();
      bookingFormik
        .setFieldValue(
          "dinningTime",
          new Date(`${values.resDate}T${e.target.value}`)
        )
        .then();
    },
    [bookingFormik, values.resDate]
  );

  useEffect(() => {
    availableTimesDispatch({
      date: resDateRef.current.value,
    });
  }, [resDateRef.current.value, availableTimesDispatch]);

  useEffect(() => {
    if (availableTimes.length === 0) {
      return;
    }
    const oldIdx = availableTimes.indexOf(values.resTime);
    if (oldIdx === -1) {
      handleResTimeChange({
        target: { value: availableTimes[0] },
      });
    }
  }, [values.resTime, availableTimes, handleResTimeChange]);

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
              ref={resDateRef}
              id="res-date"
              className={getFieldClassName(touched.resDate, errors.resDate)}
              name="resDate"
              min={getYMDString()}
              value={values.resDate}
              onBlur={bookingFormik.handleBlur}
              onChange={bookingFormik.handleChange}
            />
            <BookingFormErrorMessage
              {...{
                touched: touched.resDate,
                error: errors.resDate,
              }}
            />
            <label className="call-to-action" htmlFor="res-time">
              Choose time{" "}
              {availableTimes.length === 0 && !props.isTest
                ? " - Please select a date to update the options"
                : null}
            </label>
            <select
              id="res-time"
              name="resTime"
              className={getFieldClassName(
                touched.resTime,
                errors.dinningTime || errors.resTime
              )}
              value={values.resTime}
              onChange={handleResTimeChange}
              onBlur={bookingFormik.handleBlur}
            >
              {availableTimes.map((time, idx) => {
                return (
                  <option key={time + idx} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
            <BookingFormErrorMessage
              {...{
                touched: errors.resTime === undefined,
                error: errors.dinningTime,
              }}
            />
            <BookingFormErrorMessage
              {...{
                touched: touched.resTime,
                error: errors.resTime,
              }}
            />
            <label className="call-to-action" htmlFor="guests">
              Number of guests
            </label>
            <input
              className={getFieldClassName(
                touched.numOfDiners,
                errors.numOfDiners
              )}
              type="number"
              name="numOfDiners"
              value={values.numOfDiners}
              onBlur={bookingFormik.handleBlur}
              onChange={bookingFormik.handleChange}
              placeholder="1"
              min="1"
              max={
                !props.maxNumOfGuests ? "10" : props.maxNumOfGuests.toString()
              }
              id="guests"
            />
            <BookingFormErrorMessage
              {...{
                touched: touched.numOfDiners,
                error: errors.numOfDiners,
              }}
            />
            <label className="call-to-action" htmlFor="occasion">
              Occasion
            </label>
            <select
              id="occasion"
              className={getFieldClassName(touched.occasion, errors.occasion)}
              name="occasion"
              value={values.occasion}
              onChange={bookingFormik.handleChange}
            >
              {occasions.map((occasion, idx) => (
                <option key={occasion + idx} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
            <BookingFormErrorMessage
              {...{ touched: touched.occasion, error: errors.occasion }}
            />
            <label className="call-to-action" htmlFor="first-name">
              First name
            </label>
            <input
              type="text"
              value={values.firstName}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="First name"
              name="firstName"
              className={getFieldClassName(touched.firstName, errors.firstName)}
              id="first-name"
            />
            {touched.firstName && errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
            <label className="call-to-action" htmlFor="last-name">
              Last name
            </label>
            <input
              type="text"
              value={values.lastName}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="Last name"
              name="lastName"
              id="last-name"
              className={getFieldClassName(touched.lastName, errors.lastName)}
            />
            {touched.lastName && errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}

            <label className="call-to-action" htmlFor="booking-email">
              Email&nbsp;-&nbsp;optional
            </label>
            <input
              type="email"
              value={values.email}
              onChange={bookingFormik.handleChange}
              onBlur={bookingFormik.handleBlur}
              placeholder="email@example.com"
              id="booking-email"
              name="email"
              className={getFieldClassName(touched.email, errors.email)}
            />
            {touched.email && errors.email && (
              <span className="error-message">{errors.email}</span>
            )}

            <Button
              {...{ ...buttonProps, handleClick: bookingFormik.handleSubmit }}
            />
          </form>
        </section>
      </section>
    </>
  );
}
