class makeup {
    clickonmakeuptab() {
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]').contains('Makeup').click()
    }
    validatelengthofproduct() {
        cy.get('.fixed_wrapper .prdocutname').should('have.length', 6)

    }
    validatecategoryaviable() {
        cy.get('.col-md-2.col-sm-2.col-xs-6.align_center').should('have.length', 6)

    }


}
export default makeup
