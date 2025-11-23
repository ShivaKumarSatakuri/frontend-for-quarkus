import { render, screen } from "@testing-library/react";
import ResultPage from "./ResultPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("shows result table when result data exists", () => {
  const mockResult = { id: 101, name: "John Doe" };

  render(
    <MemoryRouter initialEntries={[{ pathname: "/result", state: { result: mockResult } }]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByText("Response from Backend")).toBeInTheDocument();
  expect(screen.getByText("101")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});

test("shows 'No data found' when no result is passed", () => {
  render(
    <MemoryRouter initialEntries={["/result"]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByText("No data found")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Go Back/i })).toBeInTheDocument();
});
