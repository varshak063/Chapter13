import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { RestroMenuPage } from "../RestroMenuPage";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockCartRestroMenu.json";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { Header } from "../Header";
import { CartPage } from "../CartPage";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
test("Should show cart Items after click on Add", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenuPage />
          <CartPage />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Value Snackers(3)");
  fireEvent.click(accordianHeader);
  const addItemCart = screen.getAllByTestId("retroMenusList");
  expect(addItemCart.length).toBe(3);
  expect(screen.getByText("Cart : (0 items)")).toBeInTheDocument();
  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);

  //   When click on add button it changes cart count to cart 1-items
  const addedItem = screen.getByText("Cart : (1 items)");
  expect(addedItem).toBeInTheDocument();
  fireEvent.click(addButtons[1]);
  expect(screen.getByText("Cart : (2 items)")).toBeInTheDocument();

  const cartItemsCount = screen.getAllByTestId("retroMenusList");
  expect(cartItemsCount.length).toBe(5);
// After click clearcart 
  fireEvent.click(screen.getByRole("button",{name:"Clear cart"}))
  expect(screen.getAllByTestId("retroMenusList").length).toBe(3);
  expect(screen.getByText("No Items in the Cart")).toBeInTheDocument();


  
});
