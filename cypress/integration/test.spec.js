describe('My First Test', function() {
  
  it('Validate config value', function() {
    cy.task('cache', '{"testReturnValue":"Will be added to the response", "aNumber":123}')
    cy.task('log', 'This log message comes from the Test Spec')
    expect(Cypress.env().personId).to.equal('197001016666')
  })
})

