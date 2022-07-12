import ProgressBarPage from "../../pageObjects_widgets/progressBar.js";
import ToolTipsPage from "../../pageObjects_widgets/toolTipsPage.js";

context("Widgets", () => {
    context("Tool-Tips", () => {
      beforeEach(() => {
        ToolTipsPage.visit();
      });
      it("Scenario 1", () => {

        //- Hover over the - "hover me button", "field", "Contrary", "1.10.32"
        //- Validate text in the tooltip/pop-up

        ToolTipsPage.Button_hover_me.trigger('mouseover');
        ToolTipsPage.Message_hover_me.should("exist");

        ToolTipsPage.Input_hover_me_field.trigger('mouseover');
        ToolTipsPage.Message_hover_me_field.should("exist");

        ToolTipsPage.Text_Country.trigger('mouseover');
        ToolTipsPage.Message_Country.should("exist")

        ToolTipsPage.Text_Number.trigger('mouseover');
        ToolTipsPage.Message_Number.should("exist")
        
      });
  

    
    });

    context("Progress Bar", () => {
        beforeEach(() => {
          ProgressBarPage.visit();
        });
        it.only("Scenario 1", () => {

            // - click start
            // - stop at 25% - validate that the bar value is 25%
            // - click start
            // - stop at 75% - validate that the bar value is 75%
            // - click start
            // - stop at 99% - validate that the bar value is 99% 
            ProgressBarPage.Button_start.click()
            cy.wait(2410)
            ProgressBarPage.Button_start.click()
            cy.get('.progress-bar').should("have.text", "25%")
            ProgressBarPage.Button_start.click()
            cy.wait(2410)
            ProgressBarPage.Button_start.click()
            cy.get('.progress-bar').should("have.text", "50%")
            ProgressBarPage.Button_start.click()
            cy.wait(2410)
            ProgressBarPage.Button_start.click()
            cy.get('.progress-bar').should("have.text", "75%")
            ProgressBarPage.Button_start.click()
            cy.wait(2300)
            ProgressBarPage.Button_start.click()
            cy.get('.progress-bar').should("have.text", "99%")
            
        });
    
  
      
      });

  });
  