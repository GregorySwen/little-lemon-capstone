import "./BookingPage.css";
import { useState } from "react";

export default function BookingPage(props) {
  const occasions = ["Birthday", "Anniversary"];
  const [formData, setFromData] = useState({
    date: new Date().toISOString().split("T")[0],
    time: props.availableTimes[0],
    numOfDiners: 1,
    occasion: occasions[0],
  });
  const style = { display: "grid", maxWidth: "200px", gap: "20px" };
  return (
    <>
      <section className="booking-page">
        <section className="stack">
          <h1>Book Now</h1>
          <form
            style={style}
            onSubmit={(e) => {
              e.preventDefault();
              if (!submitAPI) {
                throw Error("Cannot load submitAPI");
              }
              /*global submitAPI*/
              /*eslint no-undef: "error"*/
              const result = submitAPI(formData);
              if (result) {
              }
            }}
          >
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={formData.date}
              onChange={(e) => {
                setFromData({ ...formData, date: e.target.value });
                props.availableTimesDispatch({ date: e.target.value });
              }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={props.availableTimes.indexOf(formData.time)}
              onChange={(e) => {
                setFromData({
                  ...formData,
                  time: props.availableTimes[e.target.value],
                });
              }}
            >
              {props.availableTimes.map((time, idx) => (
                <option key={time} value={idx}>
                  {time}
                </option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              value={formData.numOfDiners.toString()}
              onChange={(e) => {
                setFromData({
                  ...formData,
                  numOfDiners: parseInt(e.target.value),
                });
              }}
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasions.indexOf(formData.occasion)}
              onChange={(e) => {
                setFromData({
                  ...formData,
                  occasion: occasions[e.target.value],
                });
              }}
            >
              {occasions.map((occasion, idx) => (
                <option key={occasion} value={idx}>
                  {occasion}
                </option>
              ))}
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </section>
      </section>
    </>
  );
}
