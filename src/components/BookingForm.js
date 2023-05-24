import "./BookingForm.css";
import { useState } from "react";

export default function BookingForm() {
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState(availableTimes[0]);
  const style = { display: "grid", maxWidth: "200px", gap: "20px" };
  return (
    <>
      <section className="stack">
        <form
          style={style}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={availableTimes.indexOf(inputTime)}
            onChange={(e) => {
              setInputTime(availableTimes[e.target.value]);
            }}
          >
            {availableTimes.map((time, idx) => (
              <option key={time} value={idx}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      </section>
    </>
  );
}
