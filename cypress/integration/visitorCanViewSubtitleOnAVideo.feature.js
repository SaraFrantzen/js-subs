describe("User view subtitles on a video", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays Instagram picture", () => {
    cy.get('[data-cy="video"]').should("exist");
    cy.get('[data-cy="play"]').click();
    cy.get('[data-cy="subtitles"]').click();
  });
});
