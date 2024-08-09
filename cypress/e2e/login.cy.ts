import { User } from "../interfaces/user"

let myUser: User;


before('', () => {
    cy.intercept('POST', '**/auth/register').as('register')

    cy.visit('register')
    cy.registerRandomUser().then(user => {
      cy.wait('@register')
      myUser = user;
    })
})

beforeEach('', () => {
  cy.visit('login')

  cy.intercept('POST', '**/auth/authenticate').as('auth')
})

after('', () => {

})

describe('Login tests', () => {
  it('check login functionality with valid credentials.', () => {
    
    cy.login(myUser.email, myUser.password)

    cy.get('#userNameDisplay')
      .should('be.visible')
      .and('have.text', myUser.email)

    cy.url().then(url => {
      expect(url).to.contain('/dashboard')
    })

    cy.getAllLocalStorage().then(storage => {
      expect(storage).not.to.be.empty
    })

    cy.wait('@auth').then(resp => {
      expect(resp.response?.body).to.have.property('token')
    })
  })

  it('check login with invalid credentials.', () => {

    cy.login('customer00@customer.cc', 'password')

    cy.get('#errorForbiddenAccess')
      .should('be.visible')
      .should('have.text', 'Access forbidden!')
      .and('have.css', 'color', 'rgb(255, 0, 0)')

    cy.getAllLocalStorage().then(storage => {
        expect(storage).to.be.empty
    })

    cy.wait('@auth').then(resp => {
        expect(resp.response?.statusCode).to.be.equal(403)
    })
  })

  it('check login mandatory field error messages', () => {
    cy.get('#userEmail').click()
    cy.get('#userPassword').click()
    cy.get('#userEmail').click()

    cy.get('.errorEmailMandatory')
      .should('be.visible')
    cy.get('.errorPasswordMandatory')
      .should('be.visible')
  })

  it('check login submit button state.', () => {
    cy.get('#submitButton')
      .should('have.attr', 'disabled')
  })

  it('check login input fields placeholder text', () => {
    cy.get('#userEmail')
      .should('have.attr', 'placeholder')
      .and('equal', 'info@mailaddress.com')
    cy.get('#userPassword').click()
      .should('have.attr', 'placeholder')
      .and('equal', '••••••••••••')
  })

  it('check login 500 return by auth request.', () => {

    cy.intercept({
      url: '**/auth/authenticate',
      method: 'POST'
    }, {
      statusCode: 500
    })
  
    cy.login(myUser.email, myUser.password)

    cy.get('#errorForbiddenAccess')
    .should('be.visible')
    .should('have.text', 'Access forbidden!')
    .and('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('check login 500 return by auth request.', () => {

    cy.intercept({
      url: '**/auth/authenticate',
      method: 'POST'
    }, {
      body: { "token": "test_token" }
    })
  
  cy.login(myUser.email, myUser.password)

  cy.get('#errorForbiddenAccess')
    .should('be.visible')
    .should('have.text', 'Access forbidden!')
    .and('have.css', 'color', 'rgb(255, 0, 0)')
  })
})


























// describe('Login negative', () => {

//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
  

//   it.skip('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })