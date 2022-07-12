import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get expansion_button() {
    return cy.get(".rct-option-expand-all > .rct-icon");
  }
  static get checkBox_Note() {
    return cy.get("#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon");
  }
  static get checkBox_React() {
    return cy.get("#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon");
  }
  static get checkBox_Angular() {
    return cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon')

  }
  static get checkBox_General() {
    return cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon')

  }
  static get checkBox_ExelFile() {
    return cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon')

  }

  static get Validate_Result() {
    return cy.get('#result')
  }

//---------SCENARIO_2------------------//

  static get checkBox_Office() {
    return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon')
  }










}

export default CheckBoxPage;