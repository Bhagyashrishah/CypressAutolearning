// import Login from "./pageobject/Login";
//  const login =new Login()
//  describe('login Test',()=>{
//     it('login validations',()=>{
//        //1.visiting the app
//         cy.visitApp()
//         // 2 landing on login page
//         login.clickonLoginpage()
//         //3 vaidating forgot password link
//         login.validateforgrtpaswordlink()
//         //4.entering input values.
//         login.userLogin('Velocity19augbatch','Velocity19')
//         //5 vsldating home page
//         cy.get('.top.menu_account .menu_text').eq(0).should('include.text','Welcome back User1')
//     })
//  })
 // login.spec.js
 import Login from "./login";

const login = new Login();

describe('Login Test', () => {
    it('Login validations', () => {
        // 1. Visiting the app
        cy.visitApp();
        
        // 2. Landing on login page
        login.clickonLoginpage();
        
        // 3. Validating forgot password link
        login.validateforgrtpaswordlink();
        
        // 4. Entering input values
        login.userLogin('Velocity19augbatch', 'Velocity19');
     //   login.userLogin('Velocity19augbat', 'Velocity19');

        
        // 5. Validating home page
        cy.get('.top.menu_account .menu_text').eq(0).should('include.text', 'Welcome back User1');
    });
});
