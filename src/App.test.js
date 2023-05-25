import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/Main";
import { testFetchAPI } from "./utils/api";

test("Renders the BookingForm heading", () => {
  render(
    <BookingPage {...{ availableTimes: [], availableTimesDispatch: jest.fn }} />
  );
  const headingElement = screen.getByText("Book Now");
  const dateLabeElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
  expect(dateLabeElement).toBeInTheDocument();
});

test("Checks the return of initializeTimes", () => {
  const actual = initializeTimes(true);
  const expected = testFetchAPI(new Date());
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
