import { Route, Routes } from "react-router-dom";
import React, { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import PlaceholderPage from "./common/PlaceholderPage";
import { testFetchAPI } from "../utils/api";

export const updateTimes = (state, action) => {
  if (action.type === "test") {
    return testFetchAPI(new Date(action.date));
  }
  return fetchAPI(new Date(action.date));
};

export const initializeTimes = (isTest) => {
  if (isTest === true) {
    return testFetchAPI(new Date());
  }
  if (!fetchAPI) {
    throw Error(`Cannot load fetchAPI`);
  }
  /*global fetchAPI*/
  /*eslint no-undef: "error"*/

  return fetchAPI(new Date());
};

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
      </Routes>
    </main>
  );
}
