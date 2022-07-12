import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    
    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.Username_textbox.type("Josh Python")
      TextBoxPage.User_email_textbox.type("Josh.Python@gmail.com")
      TextBoxPage.User_currentAddr_textbox.type("Bakery street 32, Luton")
      TextBoxPage.User_permanentAddr_textbox.type("Bakery street 32, Luton")
      TextBoxPage.Submit_button.click()

      TextBoxPage.Read_name.should("contain.text", "Josh Python")
      TextBoxPage.Read_email.should("contain.text", "Josh.Python@gmail.com")
      TextBoxPage.Read_currentAddress.should("contain.text", "Bakery street 32, Luton")
      TextBoxPage.Read_permanentAdress.should("contain.text", "Bakery street 32, Luton")
      

      // add the necessary steps
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
