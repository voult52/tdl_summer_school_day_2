import SelectablePage from "../../iteration_pageObjects/selectablePage.js";// import page objects


context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create SelectablePage page object
    it("Scenario 1", () => {

      SelectablePage.Button_Cras_justo.click()
      SelectablePage.Button_Cras_justo.should("have.class", "mt-2 list-group-item active list-group-item-action")

      SelectablePage.Button_Dapibus.click()
      SelectablePage.Button_Cras_justo.should("have.class", "mt-2 list-group-item active list-group-item-action")

 // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active
      

    });

    it("Scenario 2", () => {
         // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active

      SelectablePage.Button_Grid.click()
      SelectablePage.Button_Grid_Four.click()
      SelectablePage.Button_Grid_Eight.click()
      SelectablePage.Button_Grid_Six.click()
      SelectablePage.Button_Grid_Two.click()
      
      SelectablePage.Button_Grid_Four.should('have.class', 'active')
      SelectablePage.Button_Grid_Eight.should('have.class', 'active')
      SelectablePage.Button_Grid_Six.should('have.class', 'active')
      SelectablePage.Button_Grid_Two.should('have.class', 'active')



      

    });
  
  });
});
