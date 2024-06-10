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
});
