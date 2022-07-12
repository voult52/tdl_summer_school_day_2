import BasePage from "./basePage";

class ButtonPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get Button_DoubleClick() {
    return cy.get('#doubleClickBtn')
  }
  static get Message_DoubleClick() {
    return cy.get('#doubleClickMessage')
  }
  
  static get Button_RightClick() {
    return cy.get('#rightClickBtn')
  }
  static get Message_RightClick() {
    return cy.get('#rightClickMessage')
  }

  static get Button_Dynamic_click() {
    return cy.get('button[class = "btn btn-primary"]').eq(2)
  }
  static get Message_Dynamic_click() {
    return cy.get('#dynamicClickMessage')
  }


}

export default ButtonPage;