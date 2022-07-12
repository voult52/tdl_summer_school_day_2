import BasePage from "../pageObjects_widgets/basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get Button_hover_me() {
    return cy.get('#toolTipButton');
  }

  static get Message_hover_me() {
    return cy.get('.tooltip-inner')
  }

  static get Input_hover_me_field() {
    return cy.get('#toolTipTextField')
  }
  static get Message_hover_me_field() {
    return cy.get('#textFieldToolTip > .tooltip-inner')
  }
  static get Text_Country() {
    return cy.get('#texToolTopContainer > :nth-child(1)')
  }
  static get Message_Country() {
    return  cy.get('#contraryTexToolTip > .tooltip-inner')
  }

  static get Text_Number() {
    return cy.get('#texToolTopContainer > :nth-child(2)')
  }
  static get Message_Number() {
    return  cy.get('#sectionToolTip > .tooltip-inner')
  }

  
}

export default ToolTipsPage;