///<refernace types =cypress>
describe("Makeupflow ", () => {
    it('land on makeup page', () => {
        cy.visitApp()
        cy.clickOnCreateUser()
        cy.Login('Velocity19augbatch', 'Velocity19')
       // cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]').contains('Makeup').click()
     })
    it('Select product and add to card', () => {
        cy.visitApp()
        cy.clickOnCreateUser()
        cy.Login('Velocity19augbatch', 'Velocity19')
        cy.clickOnMakeupTab()
        cy.selectProductFromMakeup('Tropiques Minerale Loose Bronzer')
        cy.addTocartFromMakeup()    
        // cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]').contains('Makeup').click()
        // cy.get('.fixed_wrapper .prdocutname').each((ele) => {
        //     let prdocutname = ele.text()
        //     if (prdocutname === "Tropiques Minerale Loose Bronzer") {
        //         cy.wrap(ele).click()

        //     }
        // }
        // )
        // cy.get('[class="cart"]').click()
        // cy.url().should('include', 'checkout')
    })
})