const userIsLoggedCorrectly = () => {
    cy.wait(2000)
    cy.get('[data-qa="HeaderAccountButton"]').click()
    cy.get('.sc-AzbFF > [data-qa="Headline"]').contains('¡Hola, Usuario!').should('exist')
}

const loginPasswordIsShown = (passowrd) => {
    cy.get('[data-testid="myaccount_login_password"]').should('have.attr', 'type', 'text')
    cy.get('[data-testid="myaccount_login_password"]').invoke('val').then(text => {
        const passwordText = text
        expect(passwordText).to.be.equal(passowrd)
    })
}

const loginPasswordIsNotShown = () => {
    cy.get('[data-testid="myaccount_login_password"]').should('have.attr', 'type', 'password')
}

export default {
    userIsLoggedCorrectly,
    loginPasswordIsShown,
    loginPasswordIsNotShown
}