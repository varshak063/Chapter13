import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restroCardMockData.json";

describe("Test cases for Restro card", () => {
  test("Should render Restrocard with props data", () => {
    render(<RestaurantCard restoData={MOCK_DATA} />);
    const nameRestro = screen.getByText("McDonald's");
    expect(nameRestro).toBeInTheDocument();
  });
});
