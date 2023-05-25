import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
import { initializeTimes, updateTimes } from "./components/Main";

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
  const actual = initializeTimes();
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(actual).toEqual(expected);
});

test("Checks the return of updateTimes", () => {
  const actionMonToFri = { type: "Mon to Fri" };
  const actionSat = { type: "Sat" };
  const actionSun = { type: "Sun" };
  const errorActionType = "None";
  const actionError = { type: errorActionType };

  const expectedMonToFri = [
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
  const expectedSat = [
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
  const expectedSun = [
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  const actualMonToFri = updateTimes([], actionMonToFri);
  const actualSat = updateTimes([], actionSat);
  const actualSun = updateTimes([], actionSun);

  expect(actualMonToFri).toEqual(expectedMonToFri);
  expect(actualSat).toEqual(expectedSat);
  expect(actualSun).toEqual(expectedSun);
  expect(() => updateTimes([], actionError)).toThrow(
    `Unknown action: ${errorActionType}`
  );
});
