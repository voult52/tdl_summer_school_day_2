import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get Username_textbox() {
    return cy.get('#userName');
  }

  static get User_email_textbox() {
    return cy.get('#userEmail');
  }

  static get User_currentAddr_textbox() {
    return cy.get('#currentAddress');
  }

  static get User_permanentAddr_textbox() {
    return cy.get('#permanentAddress');
  }

  static get Submit_button() {
    return cy.get('#submit');
  }

  static get Read_name() {
    return cy.get('#name')
  }

  static get Read_email() {
    return cy.get('#email')
  }

  static get Read_currentAddress() {
    return  cy.get('.border > #currentAddress')
  }
  static get Read_permanentAdress() {
    return  cy.get('.border > #permanentAddress')
  }


}

export default TextBoxPage;
