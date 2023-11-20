Feature: Registration tests

Background: Navigate to c and a website and click on Hacerse miembro button
Given User navigates to c and a website
When User clicks on Hacerse miembro button

Scenario: User registers on c and a website - Happy flow
Then "Únete y disfruta de muchas ventajas" page is shown
    And User enters his email
    And User clicks on button for continue
Then "Ya casi está" page is shown
    And User selects Saludo
    And User enters his name "Usuario"
    And User enters his last name "Prueba"
    And User enters his password "UsuarioPrueba.1"
    And User accepts receive personalized emails
    And User clicks on button for continue
Then User is registered correctly

Scenario: User enters an email already used
Then User enters an email already used
    And User clicks on button for continue
Then '¡Ey, ya tienes una cuenta de miembro; inicia sesión aquí!' text is shown
    And Password field is shown

Scenario: Validate email format
Then User enters an empty email
    And User clicks on button for continue
Then "Este campo no puede estar vacío." text is shown
    And User enters an incorrect format email "incorrectemail"
Then "Vaya, los datos introducidos son incorrectos." text is shown
    And User enters an incorrect format email "incorrectemail@"
Then "Vaya, los datos introducidos son incorrectos." text is shown
    And User enters an incorrect format email "incorrectemail@yopmail"
Then "Vaya, los datos introducidos son incorrectos." text is shown
    And User enters an incorrect format email "correctemail@yopmail.com"
Then "Vaya, los datos introducidos son incorrectos." text is not shown

Scenario: Modified email during registration process
    And User enters his email
    And User clicks on button for continue
    And User clicks on Modificar button
Then "Únete y disfruta de muchas ventajas" page is shown
    And User enters his email
    And User clicks on button for continue
Then New email is shown

Scenario: Name and Last name validation
    And User enters his email
    And User clicks on button for continue
    And User enters an empty name
Then "Este campo no puede estar vacío" text is shown
    And User enters an empty last name
Then "Este campo no puede estar vacío" text is shown
    And User enters his name "Usuario1"
Then "Vaya, los datos introducidos son incorrectos." text is shown   
    And User enters his last name "Prueba1"
Then "Vaya, los datos introducidos son incorrectos." text is shown  

Scenario: Show password when click on eye icon
    And User enters his email
    And User clicks on button for continue
Then Eye icon inactive is shown
    And User enters his password "UsuarioPrueba.1"
Then User clicks on eye icon inactive
    And Password "UsuarioPrueba.1" is shown
Then User clicks on eye icon
    And Password is not shown

Scenario: User registers on c and a website without accepts receive personalized emails
    And User enters his email
    And User clicks on button for continue
    And User selects Saludo
    And User enters his name "Usuario"
    And User enters his last name "Prueba"
    And User enters his password "UsuarioPrueba.1"
    And User clicks on button for continue
Then User is registered correctly

Scenario: User can open Privacy policy during registration process
    And User enters his email
    And User clicks on button for continue
Then User clicks on privacy policy
    And Privacy policy web is open

Scenario: User can open Data Protection during registration process
    And User enters his email
    And User clicks on button for continue
Then User clicks on Data Protection
    And Data protection web is open