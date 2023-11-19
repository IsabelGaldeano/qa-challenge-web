const userIsRegisteredCorrectly = () => {
    cy.get('.sc-AzbFF > [data-qa="Headline"]', {timeout: 3000}).should('exist')
}

const textIsNotShown = (text) => {
    cy.contains(text).should('not.exist')
}

const passwordFieldIsShown = () => {
    cy.get('[data-testid="password"]').should('exist')
}

const eyeIconInactiveIsShown = () => {
    cy.get('[data-qa="IconEyeInactive"]').should('exist')
}

const passwordIsShown = (passowrd) => {
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'text')
    cy.get('[data-testid="password"]').invoke('val').then(text => {
        const passwordText = text
        expect(passwordText).to.be.equal(passowrd)
    })
}

const passwordIsNotShown = () => {
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'password')
}

const newEmailIsShown = (email) => {
    cy.get('[data-qa="ReadOnlyEmailFieldInput"]').should('have.value', email)
}

const privacyPolicyWebIsShown = () => {
    cy.url().should('include', 'proteccion-de-datos#privacy')
}

const dataProtectionWebIsShown = () => {
    cy.url().should('include', 'terminos-condiciones-c-a-for-you')
}

export default {
    userIsRegisteredCorrectly,
    textIsNotShown,
    passwordFieldIsShown,
    eyeIconInactiveIsShown,
    passwordIsShown,
    passwordIsNotShown,
    newEmailIsShown,
    privacyPolicyWebIsShown,
    dataProtectionWebIsShown
}