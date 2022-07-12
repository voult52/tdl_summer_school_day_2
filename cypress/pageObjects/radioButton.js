import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get RadioButton_Yes() {
    return cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)')
  }

  static get Validate_Choice() {
    return cy.get('.text-success')
  }
  

  static get RadioButton_Impressive() {
    return cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)')
  }
  static get RadioButton_No() {
    return  cy.get('.custom-control.disabled')
  }
  static get xxx() {
    return cy.get("xxx");
  }
  static get xxx() {
    return cy.get("xxx");
  }


}

export default RadioButtonPage;
