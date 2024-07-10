class books {
    clickonbookstab() {
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]').contains('Books').click()
    }
    vlaidateoutofstockbooks(){
        cy.get('.pricetag.jumbotron .nostock').should('have.class','nostock')
    }
    selectbookinthestock(booksinstock){
                 cy.get('.fixed_wrapper .prdocutname').each((ele) => {
            let prdocutname = ele.text()
             if (prdocutname === booksinstock) {
                 cy.wrap(ele).click()
             }
                })
}
}
export default books