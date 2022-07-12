import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButton";
import RadioButton from "../../pageObjects/radioButton";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/webTables";

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

    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Scenario 1", () => {

      // Create checkbox scenario 1:
      // Click the "+"/expand button
      // Click Notes, React, Angular, General, Excel File.doc
      // Validate the clicked checkboxes


      CheckBoxPage.expansion_button.click()
      CheckBoxPage.checkBox_Note.click()
      CheckBoxPage.checkBox_Angular.click()
      CheckBoxPage.checkBox_React.click()
      CheckBoxPage.checkBox_General.click()
      CheckBoxPage.checkBox_ExelFile.click()
      CheckBoxPage.Validate_Result.contains("note")
      CheckBoxPage.Validate_Result.contains("angular")
      CheckBoxPage.Validate_Result.contains("react")
      CheckBoxPage.Validate_Result.contains("general")
      CheckBoxPage.Validate_Result.contains("excelFile")


    });

    it("Scenario 2", () => {

        // Create checkbox scenario 2:
        // Click expand button
        // Click Office
        // Validate the checked checkboxes
        CheckBoxPage.expansion_button.click()
        CheckBoxPage.checkBox_Office.click()
        CheckBoxPage.Validate_Result.contains("office")
        CheckBoxPage.Validate_Result.contains("public")
        CheckBoxPage.Validate_Result.contains("private")
        CheckBoxPage.Validate_Result.contains("classified")
        CheckBoxPage.Validate_Result.contains("general")
    });


    
    

 


  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButton.visit();
    });

    it.only("Scenario 1", () => {
      RadioButtonPage.RadioButton_Yes.click()
      RadioButtonPage.Validate_Choice.should("have.text", "Yes")
      RadioButtonPage.RadioButton_Impressive.click()
      RadioButtonPage.Validate_Choice.should("have.text", "Impressive")
      RadioButtonPage.RadioButton_No.should('have.class', 'disabled')
      // Scenario 1:
      // Click yesButton
      // validate the message
      // click impressiveButton
      // validate the message
      // noButton - validate that the button exists but is disabled
      


  });

    

    
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    
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
