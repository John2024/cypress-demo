
export class Register {

    //locators fields
    firstNameMandatory: string = '#firstName'
    lastNameMandatory: string = '#lastName'
    phoneNumberMandatory: string = '#phoneNumber'
    emailMandatory: string = '#email'
    passwordMandatory: string = '#password'
    cityMandatory: string = '#city'

    //locators errors
    errorFirstNameMandatory: string = '.errorFirstNameMandatory'
    errorLastNameMandatory: string = '.errorLastNameMandatory'
    errorPhoneNumberMandatory: string = '.errorPhoneNumberMandatory'
    errorEmailMandatory: string = '.errorEmailMandatory'
    errorPasswordMandatory: string = '.errorPasswordMandatory'
    errorCityMandatory: string = '.errorCityMandatory'


    //functions
    triggerMandatoryErrorMessages() {
        cy.get(this.firstNameMandatory).click()
        cy.get(this.lastNameMandatory).click()
        cy.get(this.phoneNumberMandatory).click()
        cy.get(this.emailMandatory).click()
        cy.get(this.passwordMandatory).click()
        cy.get(this.cityMandatory).click()
        cy.get(this.passwordMandatory).click()
    }

    getErrorFirstNameMandatory() {
        return cy.get(this.errorFirstNameMandatory)
    }

    getErrorLastNameMandatory() {
        return cy.get(this.errorLastNameMandatory)
    }

    getErrorPhoneNumberMandatory() {
        return cy.get(this.errorPhoneNumberMandatory)
    }

    getErrorEmailMandatory() {
        return cy.get(this.errorEmailMandatory)
    }

    getErrorPasswordMandatory() {
        return cy.get(this.errorPasswordMandatory)
    }

    getErrorCityMandatory() {
        return cy.get(this.errorCityMandatory)
    }
}
