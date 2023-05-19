describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cliniccards.com/')
    cy.get(':nth-child(9) > #loginButton').click()
    cy.get('.text-center > .btn').click()
    cy.get('#emailError').should('be.visible')
    cy.get(':nth-child(10) > .help-block').should('be.visible')
  })
})