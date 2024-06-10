describe("Register Page", () => {
  describe("Error Messages", () => {
    it("email throws error if user enters invalid input", () => {
      // Arrange
      cy.visit("http://localhost:5173/");
      // Act
      cy.get(`[data-cy="email-input"]`).type("emreyucel97@outlook.");
      // Assert
      cy.contains("Please enter a valid email");
    });
    it("password throws error if user enters invalid input", () => {
      // Arrange
      cy.visit("http://localhost:5173/");
      // Act
      cy.get(`[data-cy="password-input"]`).type("Merdiven05");
      // Assert
      cy.contains("Please enter a valid password");
    });
  });
  describe("Button Disabled", () => {
    it("Button is disabled when inputs are invalid", () => {
      // Arrange
      cy.visit("http://localhost:5173/");
      // Act
      cy.get(`[data-cy="password-input"]`).type("1234");
      cy.get(`[data-cy="submit-button"]`).should("be.disabled");
    });
  });
  describe("Form Inputs Validated", () => {
    it("Button is enabled when inputs are valid", () => {
      // Arrange
      cy.visit("http://localhost:5173/");
      // Act
      cy.get(`[data-cy="email-input"]`).type("emreyucel97@outlook.com");
      cy.get(`[data-cy="password-input"]`).type("Merdiven00!");
      cy.get(`[data-cy="terms-input"]`).click();
      cy.get(`[data-cy="submit-button"]`).should("be.enabled").click();
      cy.get(`[data-cy="id-input"]`).should("be.visible");
    });
  });
});
