import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole("button", {name : /checkout/i})

   userEvent.type(firstNameInput, "Rodolfo");
   userEvent.type(lastNameInput, "Jaspe");
   userEvent.type(addressInput, "95 nw 30th ave");
   userEvent.type(cityInput, "Miami");
   userEvent.type(stateInput, "FL");
   userEvent.type(zipInput, "33125");
   userEvent.click(checkoutButton);

   const successDiv = screen.queryByTestId(/successmessage/i);
   const messageFirstName = screen.getByText(/rodolfo/i)
   const messageLastName = screen.getByText(/jaspe/i)
   const messageAddress = screen.getByText(/95 nw 30th ave/i)
   const messageCity = screen.getByText(/Miami/i)
   const messageState = screen.getByText(/FL/i)
   const messageZip = screen.getByText(/rodolfo/i)

   
   expect(successDiv).toHaveTextContent(/You have ordered some plants! Woo-hoo! /i)
   expect(messageFirstName).toBeVisible();
   expect(messageLastName).toBeInTheDocument();
   expect(messageAddress).toBeVisible();
   expect(messageCity).toBeTruthy();
   expect(messageState).toBeInTheDocument();
   expect(messageZip).toBeVisible();

});
