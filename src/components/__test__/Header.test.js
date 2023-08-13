import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import "@testing-library/jest-dom";
import { appStore } from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Should render Header Component", () => {
  test("Should load Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtnText = screen.getByText("Login");
    expect(loginBtnText).toBeInTheDocument();
  });
  test("Should load Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtnText = screen.getByRole("button", { name: "Login" });
    expect(loginBtnText).toBeInTheDocument();
  });
  test("Should render cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText("Cart : (0 items)");
    expect(cartItem).toBeInTheDocument();
  });

  test("Should render cart items is present ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });

  test("Should change login to logout on click login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginbtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginbtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
