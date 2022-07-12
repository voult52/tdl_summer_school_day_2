import BasePage from "../pageObjects_widgets/basePage";

class ProgressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get Button_start() {
    return cy.get('#startStopButton')
  }


  
}

export default ProgressBarPage;