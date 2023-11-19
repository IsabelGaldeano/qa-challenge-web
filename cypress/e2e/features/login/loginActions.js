const userClicksOnAccountButton = () => {
    cy.get('[data-qa="HeaderAccountButton"]').click()
}

const userIntroducesHisEmail = (email) => {
    cy.get('[data-testid="myaccount_login_email"]').clear().type(email, {force: true})
}

const userIntroducesHisPassword = (password) => {
    cy.get('[data-testid="myaccount_login_password"]').clear().type(password, {force: true})
}

const userWantsToSeeThePassword = () => {
    cy.get('#root > div.sc-etVdmn.ehyBsA > div.sc-cDvQBt.iVUSod > div > div > div.sc-fbKhjd.cacLFE > form > div.sc-gOqvNp.htTCkN > div > div.sc-kbousE.kMwVWo > div > svg')
      .click()
}

export default {
    userClicksOnAccountButton,
    userIntroducesHisEmail,
    userIntroducesHisPassword,
    userWantsToSeeThePassword
}