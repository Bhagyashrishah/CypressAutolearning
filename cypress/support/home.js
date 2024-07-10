    Cypress.Commands.add('clickOnCreateUser', () => {
        cy.get('[id="customer_menu_top"]').click()
    })
    
    Cypress.Commands.add('clickOnContinueAccountPage', () => {
        cy.get('[title="Continue"]').click()
    })
    