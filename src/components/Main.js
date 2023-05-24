import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}
