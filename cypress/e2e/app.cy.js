const page = "https://squad2.megatunger.com";
const token =
  "ya29.a0AVA9y1sjWfb-U6EQANBp_yo9JuXvOcosq44Eygr1Os5VXc0TRMpfw9iv4LprEHgEFulcQ7lAEDoSwVy6BjOXhGF50T6zv6GntmKcSYEJR90GtSFBOFZVdDztSiAkLkRt2RF_KFHQlBDo83V-o872UCTJQ10hADgaCgYKATASARASFQE65dr8tmFra4USJQ-Di28pCVeGHw0166";
describe("empty spec", () => {
  beforeEach(() => {
    cy.viewport("iphone-xr");
    cy.clearCookies();
    cy.visit(page);
    cy.wait(5000);

    cy.findByText("Next").should("exist");
    cy.findByText("Next").click();
    cy.wait(1000);
    cy.findByText("Next").click();
    cy.wait(1000);
    cy.findByText("Next").click();
    cy.findByText("Continue with Google").should("exist");

    cy.wait(1000);
    cy.window().invoke("callLogin", token);
    cy.wait(3000);

    if (cy.getCookie("access_token")) {
      cy.getCookie("access_token").should("exist");
    }
  });

  it("Display Home Screen with Hotels", () => {
    cy.get(".hotel-content").should("exist");
    cy.get(".hotel-card").first().click();
  });

  // it("Register", () => {
  //   if (!cy.getCookie("access_token")) {
  //     cy.get("#mui-component-phone-number").type("967134899");
  //     cy.get("#mui-component-select-gender").click();
  //     cy.findByText("Male").click();
  //
  //     cy.wait(1000);
  //     cy.findByText("Continue").click();
  //   }
  // });
  // it("Logout", () => {
  //   cy.findByText("Profile").click();
  //   cy.findByText("Logout").click();
  //   cy.wait(1000);
  //
  //   cy.findByText("Continue with Google").should("exist");
  // });
});
