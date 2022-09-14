const page = "https://squad2.megatunger.com";
const token =
  "ya29.a0AVA9y1touYQowaNoUbf2gS_q2MkV0isYbdpvZuZC9cfXcLaRS52RwZW12HBmdnI94W-0nCKtdwT5A8L5oJft99BnBFryTOLSBXHmmdmqI8oD0EnxJTJcdueQ9HgEnsBAZw_ZWld4MBo-I51x3R4Upzv3pPOla7saCgYKATASARASFQE65dr83vEMlH5eSMhJDfOI6rk9tg0166";
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
    cy.findByText("Book Now!").click();
    cy.wait(500);
    const dates = ["09/23/2022", "09/26/2022"];
    cy.get("input").each((element, index) => {
      cy.get(element).type(dates[index]);
    });
    cy.findByText("+").click();
    cy.findByText("Continue").click();
    cy.findByText("Mr.").click();
    cy.findByText("Continue").click();
    cy.findByText("Pay by Cash when arrive").click();
    cy.findByText("Continue").click();
    cy.findByText("Booking").click();
    cy.visit(`${page}/bookings`);
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
  it("Logout", () => {
    cy.findByText("Profile").click();
    cy.findByText("Logout").click();
    cy.wait(1000);

    cy.findByText("Continue with Google").should("exist");
  });
});
