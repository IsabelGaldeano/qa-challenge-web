import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import registrationActions from './registrationActions'
import registrationExpectations from './registrationExpectations'

var email

/*actions*/
When('User clicks on Hacerse miembro button', () => {
    registrationActions.userClicksOnMemberButton()
})

Then('User enters his email', () => {
    email = registrationActions.createAleatoryEmail()
    registrationActions.userEntersHisEmail(email)
})

Then('User selects Saludo', () => {
    registrationActions.userSelectsSaludo()
})

Then('User enters his name {string}', (name) => {
    registrationActions.userEntersHisName(name)
})

Then('User enters his last name {string}', (lastName) => {
    registrationActions.userEntersHisLastName(lastName)
})

Then('User enters his password {string}', (password) => {
    registrationActions.userEntersHisPassword(password)
})

Then('User accepts receive personalized emails', () => {
    registrationActions.userAceptsReceivePersonalizedEmails()
})

Then('User enters an email already used', () => {
    registrationActions.userEntersAnEmailAlreadyUsed(email)
})

Then('User enters an incorrect format email {string}', (incorrectEmail) => {
    registrationActions.userEntersAnIncorrectEmail(incorrectEmail)
})

Then('User enters an empty email', () => {
    registrationActions.userEntersEmptyEmail()
})

Then('User clicks on Modificar button', () => {
    registrationActions.userClicksOnModificarButton()
})

Then('User enters an empty name', () => {
    registrationActions.userEntersAnEmptyName()
})

Then('User enters an empty last name', () => {
    registrationActions.userEntersAnEmptyLastName()
})

Then('User clicks on privacy policy', () => {
    registrationActions.userClicksOnPrivacyPolicy()
})

Then('User clicks on Data Protection', () => {
    registrationActions.userClicksOnDataProtection()
})

/*expectations*/
Then('User is registered correctly', () => {
    registrationExpectations.userIsRegisteredCorrectly()
})

Then('{string} text is not shown', (text) => {
    registrationExpectations.textIsNotShown(text)
})

Then('Password field is shown', () => {
    registrationExpectations.passwordFieldIsShown()
})

Then('An error under email field is shown', () => {
    registrationExpectations.emailErrorIsShown()
})

Then('Eye icon inactive is shown', () => {
    registrationExpectations.eyeIconInactiveIsShown()
})

Then('Password {string} is shown', (password) => {
    registrationExpectations.passwordIsShown(password)
})

Then('Password is not shown', () => {
    registrationExpectations.passwordIsNotShown()
})

Then('New email is shown', () => {
    registrationExpectations.newEmailIsShown(email)
})

Then('Privacy policy web is open', () => {
    registrationExpectations.privacyPolicyWebIsShown()
})

Then('Data protection web is open', () => {
    registrationExpectations.dataProtectionWebIsShown()
})
