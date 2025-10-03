import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardItem from "./ProductCardItem";



describe("CardItem component", () => {
    const mockItem = {
        title: "Socks",
        price: 9.99
    };

    it("displays product title", () => {
        render(<CardItem item={mockItem} />);
        expect(screen.getByRole("heading").textContent).toMatch(/Socks/i);
    });


    it("displays price", () => {
        render(<CardItem item={mockItem} />);
        expect(screen.getByRole("paragraph").textContent).toMatch(/9.99/i)
    })


})