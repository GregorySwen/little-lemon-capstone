import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import PlaceholderPage from "./common/PlaceholderPage";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
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
