import { Route, Routes } from "react-router-dom";
import React, { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import PlaceholderPage from "./common/PlaceholderPage";

export const updateTimes = (state, action) => {
  switch (action.type) {
    // 2pm - 10pm
    case "Mon to Fri": {
      return [
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
    }
    // 2pm - 11pm
    case "Sat": {
      return [
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ];
    }
    // 2pm - 9pm
    case "Sun": {
      return [
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

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
