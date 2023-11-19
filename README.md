# qa-challenge-web

## How to run the automated tests
In the project directory:

### `npm install` 
For install all the project dependencies

### `npm run cypress:open`
For run tests in visual mode.
Once cypress is open, click on feature file (registration.feature or login.feature) and tests will run

### `npm run cypress:run`
For run tests in not visual mode.
If a test fails, a screenshot will be generated on cypress/screenshots
A video of the tests will be generated on cypress/videos and its possible to see all the tests execution