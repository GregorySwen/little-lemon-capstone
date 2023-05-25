import "./BookingPage.css";
import { useRef, useState, useEffect } from "react";

export default function BookingPage(props) {
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState(props.availableTimes[0]);
  useEffect(() => {
    if (needResetTimeOption.current) {
      resTimeRef.current.value = 0;
      needResetTimeOption.current = false;
    }
  }, [props.availableTimes]);
  const resTimeRef = useRef(undefined);
  const needResetTimeOption = useRef(false);
  const style = { display: "grid", maxWidth: "200px", gap: "20px" };
  return (
    <>
      <section className="booking-page">
        <section className="stack">
          <h2>Book Now</h2>
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
                if (inputDate === "") {
                  needResetTimeOption.current = true;
                }
                setInputDate(e.target.value);
                const dateSelected = new Date(e.target.value);
                switch (true) {
                  case dateSelected.getDay() === 0: {
                    props.availableTimesDispatch({ type: "Sun" });
                    break;
                  }
                  case dateSelected.getDay() > 5: {
                    props.availableTimesDispatch({ type: "Sat" });
                    break;
                  }
                  default: {
                    props.availableTimesDispatch({ type: "Mon to Fri" });
                  }
                }
              }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              ref={resTimeRef}
              value={props.availableTimes.indexOf(inputTime)}
              onChange={(e) => {
                setInputTime(props.availableTimes[e.target.value]);
              }}
            >
              {props.availableTimes.map((time, idx) => (
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
      </section>
    </>
  );
}
