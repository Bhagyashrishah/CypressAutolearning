import books from "./pageobject/books";
const books1 = new books()
describe("books flow",()=>{
  it("validating books flow",()=>{
    cy.visitApp();
    books1.clickonbookstab()
    books1.vlaidateoutofstockbooks()
   // books1.selectbookinthestock(booksinstock)
  })    

})