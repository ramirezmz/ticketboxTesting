describe("Tickets", () => {
  beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

  it("fills all the text input fields", () => {
    const firstName = "Robertopaolo"
    const lastName = "Ramirez"

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("robertotest@test.com");
    cy.get("#requests").type("Carnivore");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });

  it("Select two tickets", () => {
    cy.get("#ticket-quantity").select("2");

  });
  it("Has 'TICKETBOX' header's heading", () => {});
});