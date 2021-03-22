import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (< CheckoutForm />)
    expect(
        screen.getByRole("heading", { name: "Checkout Form" })
      ).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
const submitButton = screen.getByText(/submit/i);
userEvent.click(submitButton)

const firstNameInput = screen.getByLabelText(/firstName/i);

userEvent.type(firstNameInput, "Kyle")

const name = screen.getByText("Kyle");
expect(name).toBeDefined();
expect(name).toThrow

});
