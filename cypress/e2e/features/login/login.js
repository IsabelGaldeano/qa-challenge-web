import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginActions from './loginActions'
import loginExpectations from './loginExpectations'

/*actions*/
When('User clicks on account button', () => {
    loginActions.userClicksOnAccountButton()
})

Then('User introduces his email {string}', (email) => {
    loginActions.userIntroducesHisEmail(email)
})

Then('User introduces his password {string}', (password) => {
    loginActions.userIntroducesHisPassword(password)
})

Then('User wants to see the password', () => {
    loginActions.userWantsToSeeThePassword()
})

/*expectations*/
Then('User is logged correctly', () => {
    loginExpectations.userIsLoggedCorrectly()
})

Then('Login password {string} is shown', (password) => {
    loginExpectations.loginPasswordIsShown(password)
})

Then('Login password is not shown', () => {
    loginExpectations.loginPasswordIsNotShown()
})
