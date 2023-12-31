const userClicksOnMemberButton = () => {
    cy.get('.sc-jQmKAM > [data-qa="Link"]').click()
}

function createAleatoryEmail() {
    return `useremail${Date.now()}@yopmail.com`
}

const userEntersHisEmail = (email) => {
    Cypress.on('uncaught:exception', () => {
        return false
    })

    cy.get('#emailAddress').clear().type(email)
}

const userSelectsSaludo = () => {
    cy.get('[data-qa="RadioButtonMR"] > .sc-eHsDsR').click()
}

const userEntersHisName = (name) => {
    cy.get('[data-testid="firstName"]').clear().type(name)
}

const userEntersHisLastName = (lastName) => {
    cy.get('[data-testid="lastName"]').type(lastName)
}

const userEntersHisPassword = (password) => {
    cy.get('[data-testid="password"]').type(password)
}

const userAceptsReceivePersonalizedEmails = () => {
    cy.get('.sc-jaXxmE').click()
}

const userEntersAnEmailAlreadyUsed = (email) => {
    cy.get('#emailAddress').type(email)
}

const userEntersAnIncorrectEmail = (email) => {
    Cypress.on('uncaught:exception', () => {
        return false
    })

    cy.get('#emailAddress').clear().type(email)
}

const userEntersEmptyEmail = () => {
    cy.get('#emailAddress').click()
}

const userClicksOnModificarButton = () => {
    cy.get('[data-qa="ReadOnlyEmailFieldChangeLink"] > [data-qa="Copy"]').click()
}

const userEntersAnEmptyName = () => {
    cy.get('[data-testid="firstName"]').click()
    cy.get('[data-testid="firstName"]').type('{enter}')
}

const userEntersAnEmptyLastName = () => {
    cy.get('[data-testid="lastName"]').click()
    cy.get('[data-testid="lastName"]').type('{enter}')
}

const userClicksOnPrivacyPolicy = () => {
    cy.get('[href="https://www.c-and-a.com/es/es/shop/service/proteccion-de-datos#privacy"]', {timeout: 2000})
      .invoke('attr','target','_self')
      .click()
}

const userClicksOnDataProtection = () => {
    cy.get('[href="https://www.c-and-a.com/es/es/shop/service/terminos-condiciones-c-a-for-you"]', {timeout: 2000})
      .invoke('attr','target','_self')
      .click()
}

export default {
    userClicksOnMemberButton,
    createAleatoryEmail,
    userEntersHisEmail,
    userSelectsSaludo,
    userEntersHisName,
    userEntersHisLastName,
    userEntersHisPassword,
    userAceptsReceivePersonalizedEmails,
    userEntersAnEmailAlreadyUsed,
    userEntersAnIncorrectEmail,
    userEntersEmptyEmail,
    userClicksOnModificarButton,
    userEntersAnEmptyName,
    userEntersAnEmptyLastName,
    userClicksOnPrivacyPolicy,
    userClicksOnDataProtection
}