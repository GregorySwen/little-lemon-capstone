import { render, screen, act, fireEvent } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/Main";
import { testFetchAPI } from "./utils/api";
import { BrowserRouter } from "react-router-dom";

const dispatch = jest.fn();
const bookingFormProps = {
  availableTimes: [],
  availableTimesDispatch: dispatch,
  isTest: true,
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

test("Renders the BookingForm heading", () => {
  act(() => {
    render(
      <BrowserRouter>
        <BookingPage {...bookingFormProps} />
      </BrowserRouter>
    );
  });
  const headingElement = screen.getByText("Book Now");
  const dateLabeElement = screen.getByText("Choose date");
  const submitButton = screen.getByRole("button");
  expect(headingElement).toBeInTheDocument();
  expect(dateLabeElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("Checks the return of initializeTimes", () => {
  const actual = initializeTimes();
  const expected = [];
  expect(actual).toEqual(expected);
});

test("Checks the return of updateTimes", () => {
  const dates = ["2023-1-31", "2023-2-22", "2023-5-31"];
  for (let index = 0; index < dates.length; index++) {
    const action = { type: "test", date: dates[index] };
    const actual = updateTimes([], action);
    const expected = testFetchAPI(new Date(dates[index]));
    expect(actual).toEqual(expected);
  }
});
jest.setTimeout(10000);

describe("Booking form", () => {
  test("Tests empty submit", async () => {
    const fieldLabels = [
      "Choose date",
      "Choose time",
      "Number of guests",
      "Occasion",
      "First name",
      "Last name",
      "Email - optional",
    ];
    render(
      <BrowserRouter>
        <BookingPage {...bookingFormProps} />
      </BrowserRouter>
    );
    await act(async () => {
      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);
      await sleep(1000);
    });
    const invalidFields = [
      "Choose date",
      "Choose time",
      "First name",
      "Last name",
    ];
    const validFields = ["Number of guests", "Occasion", "Email - optional"];
    for (let label of invalidFields) {
      const input = screen.getByLabelText(label);
      expect(input).toHaveClass("is-invalid");
    }
    for (let label of validFields) {
      const input = screen.getByLabelText(label);
      expect(input).toHaveClass("is-valid");
    }
  });
});
