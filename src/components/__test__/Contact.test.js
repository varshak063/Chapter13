import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Testing contact page", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside the component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside text", () => {
    render(<Contact />);
    const btnText = screen.getByText("Submit");
    expect(btnText).toBeInTheDocument();
  });
  test("Should load input placeholder text", () => {
    render(<Contact />);
    const inputPlaceholder = screen.getByPlaceholderText("Name");
    expect(inputPlaceholder).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
  });
});
