///<refernace types =cypress>
describe("login flow ",()=>{
    it('Login with credentials',()=>{
        cy.visitApp()
        cy.clickOnCreateUser()
        cy.Login('Velocity19augbatch','Velocity19')
        // cy.get('[id="loginFrm_loginname"]').type('Velocity19augbatch')
        // cy.get('[id="loginFrm_password"]').type('Velocity19')
        // cy.get('[title="Login"]').click()
        cy.get('.top.menu_account .menu_text').eq(0).should('include.text','Welcome back User1')

    })
})