Cypress.Commands.add('clickOnMakeupTab', () => {
    cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]').contains('Makeup').click()

})

Cypress.Commands.add('selectProductFromMakeup', (MakeupProduct) => {
   cy.get('.fixed_wrapper .prdocutname').each((ele)=> {
     //   cy.get('.fixed_wrapper .fixed .prdocutname').each((ele)=> {

        let prdocutname = ele.text()
        if (prdocutname === MakeupProduct) {
            cy.wrap(ele).click()

        }
    }
    )
})
Cypress.Commands.add('addTocartFromMakeup', () => {
    cy.get('[class="cart"]').click()
    cy.url().should('include', 'checkout')

})