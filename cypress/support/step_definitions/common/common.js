import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"
import commonActions from './commonActions'
import commonExpectations from './commonExpectations'

/*actions*/
Given('User navigates to c and a website', () => {
    commonActions.userNavigatesToCAndAWebsite()
})

Then('User clicks on button for continue', () => {
    commonActions.userClicksOnButtonForContinue()
})

Then('User clicks on eye icon inactive', () => {
    commonActions.userClicksOnEyeIconInactive()
})

Then('User clicks on eye icon', () => {
    commonActions.userClicksOnEyeIcon()
})

/*expectations*/
Then('{string} page is shown', (pageName) => {
    commonExpectations.pageIsShown(pageName)
})

Then('{string} text is shown', (text) => {
    commonExpectations.textIsShown(text)
})