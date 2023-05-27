import { Route, Routes } from "react-router-dom";
import React, { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import PlaceholderPage from "./common/PlaceholderPage";
import { testFetchAPI } from "../utils/api";
import BookingConfirmation from "./BookingConfirmation";
import NotFound from "./common/NotFound";
import { isValidDate } from "../utils/utils";

export const updateTimes = (state, action) => {
  if (!action.date) {
    return [];
  }
  if (action.date.length < 4) {
    return [];
  }
  const requestDate = new Date(action.date);
  if (!isValidDate(requestDate)) {
    return [];
  }
  if (action.type === "test") {
    return testFetchAPI(requestDate);
  }

  /*global fetchAPI*/
  /*eslint no-undef: "error"*/

  return fetchAPI(requestDate);
};

export const initializeTimes = () => [];

export default function Main() {
  const [availableTimes, availableTimesDispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage {...{ availableTimes, availableTimesDispatch }} />
          }
        />
        <Route
          path="/order-online"
          element={<PlaceholderPage title="Order Online" />}
        />
        <Route path="/login" element={<PlaceholderPage title="Login Page" />} />
        <Route path="/menu" element={<PlaceholderPage title="Online Menu" />} />
        <Route path="/about" element={<PlaceholderPage title="About Page" />} />
        <Route path="/booking-confirm" element={<BookingConfirmation />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
