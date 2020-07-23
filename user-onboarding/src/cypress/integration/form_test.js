// write tests here

describe("Name Input", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000");
  });

  it("can type new username", () => {
    cy.get('input[name= "username"]').type("biku").should("have.value", "biku");
  });

  it("can type new email", () => {
    cy.get('input[name= "email"]')
      .type("biku@gmail.com")
      .should("have.value", "biku@gmail.com");
  });
  it("can type new password", () => {
    cy.get('input[name= "password"]')
      .type("biku1234")
      .should("have.value", "biku1234");
  });
  it("can type confirm password", () => {
    cy.get('input[name= "confirmPassword"]')
      .type("biku1234")
      .should("have.value", "biku1234");
  });

  it("can click the checkbox", () => {
    cy.get('[type="checkbox"]').check();
  });
  it("can submit the form new", () => {
    cy.get("#submitBtn").click()
  });
});
