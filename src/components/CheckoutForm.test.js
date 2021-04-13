import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange - render component
    render(<CheckoutForm />)

    // Act - get form header
    const formHeader = screen.queryByText(/checkout form/i)

    // Assert
    expect(formHeader).toBeInTheDocument()
    expect(formHeader).toBeTruthy()
    expect(formHeader).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", async () => {
    // Arrange - render component
    render(<CheckoutForm />)
    
    // Act - get all inputs and checkout button
    const firstNameInput = screen.queryByLabelText(/first name/i)
    const lastNameInput = screen.queryByLabelText(/last name/i)
    const addressInput = screen.queryByLabelText(/address/i)
    const cityInput = screen.queryByLabelText(/city/i)
    const stateInput = screen.queryByLabelText(/state/i)
    const zipInput = screen.queryByLabelText(/zip/i)
    const checkoutBtn = screen.queryByRole('button')

    // Act - simulate user event
    userEvent.type(firstNameInput, 'Test')
    userEvent.type(lastNameInput, 'McTesty')
    userEvent.type(addressInput, '123 SW Testy Ave')
    userEvent.type(cityInput, 'Testotropila')
    userEvent.type(stateInput, 'Testahoma')
    userEvent.type(zipInput, '12345')
    userEvent.click(checkoutBtn)

    // Act - grabbing successMessage
    const successMessage = await screen.getByTestId(/successmessage/i)

    // Assert
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toBeTruthy()
    expect(successMessage).toHaveTextContent(/you have ordered some plants/i)
});