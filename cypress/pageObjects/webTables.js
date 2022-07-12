import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get Button_AddButton() {
    return cy.get('#addNewRecordButton')
  }
  static get Input_FirstName() {
    return cy.get('#firstName')
  }
  static get Input_LastName() {
    return cy.get('#lastName')
  }
  static get Input_UserEmail() {
    return cy.get('#userEmail')
  }
  static get Input_UserAge() {
    return cy.get('#age')
  }
  static get Input_UserSalary() {
    return cy.get('#salary')
  }
  static get Input_UserDepartment() {
    return cy.get('#department')
  }

  static get Button_Submit() {
    return cy.get('#submit')
  }
  static get Input_SearchBox() {
    return cy.get('#searchBox')
  }

  static get Validate_User() {
    return cy.get('.rt-tbody > :nth-child(1)')
  }

  static get Delete_selection() {
    return cy.get('#delete-record-2 > svg > path')
  }

  static get Delete_table() {
    return cy.get('[class = "rt-tr-group"]').each(($el, index, $list) => {
        if(index < 3){  
        cy.get('#delete-record-' + (index + 1) + ' > svg').click(); 
        }
      })
  }

  static get Validate_emtyCells() {
    return cy.get('[class="rt-noData"]')
  }
  

}

export default WebTablesPage;
