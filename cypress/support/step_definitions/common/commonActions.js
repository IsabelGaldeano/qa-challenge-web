const userAceptsCookies = () => {
    cy.wait(1500)
    cy.get('#onetrust-accept-btn-handler').click()
}

const userNavigatesToCAndAWebsite = () => {
    cy.visit('https://www.c-and-a.com/es/es/shop')
    userAceptsCookies()
}

const userClicksOnButtonForContinue = () => {
    cy.get('[data-qa="LoadingButton"]').click()
}

const userClicksOnEyeIconInactive = () => {
    cy.get('[data-qa="IconEyeInactive"]').click()
}

const userClicksOnEyeIcon = () => {
    cy.get('[data-qa="IconEye"]').click()
}

export default {
    userNavigatesToCAndAWebsite,
    userClicksOnButtonForContinue,
    userClicksOnEyeIconInactive,
    userClicksOnEyeIcon
}