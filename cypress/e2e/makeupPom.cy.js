import makeup from "./pageobject/makeup";

const makeup1 = new makeup()
describe ('makeup validation',()=>{
    it ("validate makeup flow",()=>{
        cy.visitApp();
        makeup1.clickonmakeuptab()
        makeup1.validatelengthofproduct()
        makeup1.validatecategoryaviable()

    })
})