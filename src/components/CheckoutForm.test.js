import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const formHeader = screen.queryByText(/checkout form/i)

    expect(formHeader).toBeInTheDocument()
    expect(formHeader).toBeTruthy()
    expect(formHeader).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", () => {});
