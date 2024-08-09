// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import { User } from "../interfaces/user"

// -- This is a parent command --
Cypress.Commands.add('registerRandomUser', () => {

    const user: User = {
        email: 'test' + getRandomNumber(1000, 9999) + '@myuser.cc',
        phoneNumber: getRandomPhoneNumber().toString(),
        password: 'password'
    }

    cy.get('#firstName').type('test')
    cy.get('#lastName').type('test')
    cy.get('#phoneNumber').type(user.phoneNumber)
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('#city').type('test')
    cy.get('#customer').check()
    cy.get('#submit').click()

    return cy.wrap(user)
})

Cypress.Commands.add('register', (email: string, phoneNumber: string) => {

    cy.get('#firstName').type('test')
    cy.get('#lastName').type('test')
    cy.get('#phoneNumber').type(phoneNumber)
    cy.get('#email').type(email)
    cy.get('#password').type('password')
    cy.get('#city').type('test')
    cy.get('#customer').check()
    cy.get('#submit').click()
})

Cypress.Commands.add('login', (email: string, password: string) => {
    cy.get('#userEmail').type(email)
    cy.get('#userPassword').type(password)
    cy.get('#submitButton').click()
})

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPhoneNumber(): number {
    return Math.floor(Math.random() * 1000000000);
}

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export {}

declare global {
    namespace Cypress {
        interface Chainable {
            registerRandomUser(): Chainable<User>
            login(email: string, password: string): Chainable<void>
            register(email: string, phoneNumber: string): Chainable<void>
        }
    }
}