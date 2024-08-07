before('', () => {
  
})

beforeEach('', () => {
  cy.visit('register')

  cy.intercept('POST', '**/auth/register').as('register')
})

after('', () => {

})


describe('Register tests', () => {
  it.only('check register functionality with valid data for customer user role.', () => {

    cy.get('#firstName').type('test')
    cy.get('#lastName').type('test')
    cy.get('#phoneNumber').type('315645262342')
    cy.get('#email').type('customer176@customer12.cc')
    cy.get('#password').type('password')
    cy.get('#city').type('test')
    cy.get('#customer').check()
    cy.get('#submit').click()

    cy.wait('@register')

    cy.url().then(url => {
      expect(url).to.contain('/login')
    })


  })
})
