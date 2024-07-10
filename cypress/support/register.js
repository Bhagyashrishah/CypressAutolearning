Cypress.Commands.add('userFirstName', (userfname) => {
    cy.get('[id="AccountFrm_firstname"]').type(userfname)

})
Cypress.Commands.add('userLastName', (userLname) => {
    cy.get('[id="AccountFrm_lastname"]').type(userLname)
})
Cypress.Commands.add('useremailId', (useremailId) => {
    cy.get('[id="AccountFrm_email"]').type(useremailId)
})
Cypress.Commands.add('userAdress', (address1, city, countryid, zoneid, postcode) => {
    cy.get('[id="AccountFrm_address_1"]').type(address1)
    cy.get('[id="AccountFrm_city"]').type(city)
    cy.get('[id="AccountFrm_country_id"]').select(countryid)
    cy.get('[id="AccountFrm_zone_id"]').select(zoneid)
    cy.get('[id="AccountFrm_postcode"]').type(postcode)
})
Cypress.Commands.add('newuserCreation', (loginName, password, confirmpassword) => {
    cy.get('[id="AccountFrm_loginname"]').type(loginName)
    cy.get('[id="AccountFrm_password"]').type(password)
    cy.get('[id="AccountFrm_confirm"]').type(confirmpassword)
})

Cypress.Commands.add('getuserAgreementDeatils', () => {
    cy.get('[id="AccountFrm_newsletter1"]').click()
    cy.get('[type="checkbox"]').click()
    cy.get('[title="Continue"]').click()
})