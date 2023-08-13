import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Body } from "../Body";
import MOCK_DATA from "../mocks/mockRestroListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("It should renders body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});
test("", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchId");
  fireEvent.change(searchInput, { target: { value: "KFC" } });
  fireEvent.click(searchBtn);
  //screen should load cards after click search
  const cardsRestrp = screen.getAllByTestId("restrocards");
  expect(cardsRestrp.length).not.toBe(4);
});

test("should load all card after search and before search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeCLickSearch = screen.getAllByTestId("restrocards");
  expect(cardsBeforeCLickSearch.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchId");
  fireEvent.change(searchInput, { target: { value: "EatFit" } });
  fireEvent.click(searchBtn);
  //screen should load cards after click search
  const cardsAfterSearch = screen.getAllByTestId("restrocards");
  expect(cardsAfterSearch.length).toBe(2);
});

test("Should load TopRated Restro cards ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("restrocards");
  expect(cardsBeforeFilter.length).toBe(9);
  const topRatedRestro = screen.getByRole("button", {
    name: "Top Rated Restro",
  });
  fireEvent.click(topRatedRestro);
  const afterClickFilter = screen.getAllByTestId("restrocards");
  expect(afterClickFilter.length).toBe(5);
});
