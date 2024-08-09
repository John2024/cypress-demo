import { Register } from "../pageobjects/register"


const register = new Register()

before('', () => {

})

beforeEach('', () => {
    cy.visit('register')

    cy.intercept('POST', '**/auth/register').as('register')
})

after('', () => {

})


describe('Register tests', () => {
    it('check register functionality with valid data for customer user role.', () => {

        cy.registerRandomUser()

        cy.wait('@register').then(resp => {
            expect(resp.response?.body).to.have.property('token')
        })

        cy.url().then(url => {
            expect(url).to.contain('/login')
        })
    })

    it('check register and login functionality with valid data for customer user role.', () => {

        cy.registerRandomUser().then(user => {
            cy.login(user.email, user.password)
        })

        cy.wait('@register')

        cy.get('#userNameDisplay')
            .should('be.visible')

        cy.url().then(url => {
            expect(url).to.contain('/dashboard')
        })
    })

    it('check register duplicate phone number.', () => {

        cy.registerRandomUser().then(user => {
            cy.wait('@register')
            cy.visit('register')
            cy.register(user.email, user.phoneNumber)
        })

        cy.get('.customerAlreadyRegistered')
            .should('be.visible')
    })

    it.only('check register form mandatory fields error messages', () => {

        register.triggerMandatoryErrorMessages()
        register.getErrorFirstNameMandatory()
            .should('be.visible')
        register.getErrorLastNameMandatory()
            .should('be.visible')
        register.getErrorPhoneNumberMandatory()
            .should('be.visible')
        register.getErrorPasswordMandatory()
            .should('be.visible')
        register.getErrorEmailMandatory()
            .should('be.visible')
        register.getErrorCityMandatory()
            .should('be.visible')
    })
})
