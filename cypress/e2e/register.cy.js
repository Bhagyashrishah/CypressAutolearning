///<refernace types =cypress>
describe("Registering users for the apllication",()=>{
    it('register a user',()=>{
         let loginname =Math.random().toString(15).substring(8)
        cy.visitApp()
        cy.clickOnCreateUser()
        cy.clickOnContinueAccountpage()
        //cy.get('[id="customer_menu_top"]').click()
        //cy.get('[title="Continue"]').click()
        cy.userFirstName('bhagyashri')
        cy.userLastName('shah')
        cy.useremailId(loginname+'bhagya@gmail.com')
        cy.userAdress('mahavir nagar','vita','india','maharashtra','415311')
        cy.newuserCreation(loginname,'bhagyashri@6691','bhagyashri@6691')
        cy.getuserAgreementDeatils()

        // cy.get('[id="AccountFrm_firstname"]').type('Bhagyashri')
        // cy.get('[id="AccountFrm_lastname"]').type('shah')
        // cy.get('[id="AccountFrm_email"]').type(loginname+'bhagya66@gmail.com')
        // cy.get('[id="AccountFrm_address_1"]').type('mahavir nagar vita')
        // cy.get('[id="AccountFrm_city"]').type('vita')
        // cy.get('[id="AccountFrm_country_id"]').select('India')
        // cy.get('[id="AccountFrm_zone_id"]').select('Andaman and Nicobar Islands')
        // cy.get('[id="AccountFrm_postcode"]').type('415311')
        // cy.get('[id="AccountFrm_loginname"]').type(loginname)
        // cy.get('[id="AccountFrm_password"]').type('bhagyashri@6691')
        // cy.get('[id="AccountFrm_confirm"]').type('bhagyashri@6691')
        // cy.get('[id="AccountFrm_newsletter1"]').click()
        // cy.get('[type="checkbox"]').click()
        // cy.get('[title="Continue"]').click()    
        // cy.get('[class="contentpanel"]').should('include.text','Congratulations! Your new account has been successfully created!')
    })
})