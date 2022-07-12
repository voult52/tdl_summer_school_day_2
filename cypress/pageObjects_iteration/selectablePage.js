import BasePage from "./basePage";

class SortablePage extends BasePage {
  static get url() {
    return "/selectable";
  }


  static get Button_Cras_justo() {
    return cy.get('#verticalListContainer > :nth-child(1)')
  }
  static get Button_Dapibus() {
    return cy.get('#verticalListContainer > :nth-child(2)')
  }
  static get Button_Grid() {
    return cy.get('#demo-tab-grid')
  }
  static get Button_Grid_Two() {
    return cy.get('#row1 > :nth-child(2)')
  }
  static get Button_Grid_Four() {
    return cy.get('#row2 > :nth-child(1)')
  }
  static get Button_Grid_Six() {
    return cy.get('#row2 > :nth-child(3)')
  }
  static get Button_Grid_Eight() {
    return cy.get('#row3 > :nth-child(2)')
  }



}

export default SortablePage;