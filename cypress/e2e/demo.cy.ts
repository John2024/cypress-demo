
describe('positive spec', () => {
  it.only('passes', () => {

  })

  it('passes', () => {

  })

  
})


describe('negative spec', () => {

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  

  it.skip('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})