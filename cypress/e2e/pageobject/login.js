class Login
{
    clickonLoginpage(){
        cy.get('[id="customer_menu_top"]').click()
    }
    userLogin(loginName,password){  
        cy.get('[id="loginFrm_loginname"]').type(loginName)
        cy.get('[id="loginFrm_password"]').type(password)
        cy.get('[title="Login"]').click()   
    } 
    blankInformClick()
    {  
              cy.get('[title="Login"]').click()   
    }
    validateforgrtpaswordlink(){
    cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').should('be.visible')
    } 
    errormsgforinvalidcred(){
        cy.get('[class="alert alert-error alert-danger"]').should('inclide.text','Error: Incorrect login or password provided.')
    }
}
export default Login