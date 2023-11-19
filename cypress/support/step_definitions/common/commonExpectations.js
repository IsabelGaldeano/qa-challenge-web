const pageIsShown = (pageName) => {
    cy.contains(pageName).should('exist')
}

const textIsShown = (text) => {
    cy.contains(text).should('exist')
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

export default {
    pageIsShown,
    textIsShown,
    passwordIsShown,
    passwordIsNotShown
}