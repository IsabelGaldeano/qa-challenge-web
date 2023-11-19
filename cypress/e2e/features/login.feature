Feature: Login on c and a website

Background: Navigate to c and a website and click on Hacerse miembro button
Given User navigates to c and a website
When User clicks on account button

Scenario: User login correctly on c and a website
Then "Ir a tu cuenta" page is shown
    And User introduces his email "qachallengecodinguseremail@yopmail.com"
    And User introduces his password "UsuarioPrueba.1"
    And User clicks on button for continue
Then User is logged correctly

Scenario: User tries to login with an empty email
    And User clicks on button for continue
Then "Introduce una dirección de correo electrónico válida." text is shown

Scenario: User tries to login with a not register email
    And User introduces his email "emailnotregistered@yopmail.com"
    And User introduces his password "UsuarioPrueba.1"
    And User clicks on button for continue
Then "¡Vaya! La dirección de correo electrónico o la contraseña indicada no es correcta." text is shown

Scenario: User tries to login with an invalid password
    And User introduces his email "qachallengecodinguseremail@yopmail.com"
    And User introduces his password "PasswordNotValid"
    And User clicks on button for continue
Then "¡Vaya! La dirección de correo electrónico o la contraseña indicada no es correcta." text is shown

Scenario: User tries to login with an invalid email and invalid password
    And User introduces his email "invalidemail"
    And User introduces his password "PasswordNotValid"
    And User clicks on button for continue
Then "Introduce una dirección de correo electrónico válida." text is shown

Scenario: User tries to login with a not registered email and invalid password
    And User introduces his email "emailnotregistered@yopmail.com"
    And User introduces his password "PasswordNotValid"
    And User clicks on button for continue
Then "¡Vaya! La dirección de correo electrónico o la contraseña indicada no es correcta." text is shown

Scenario: User can show the password
    And User introduces his password "PasswordNotValid"
Then User clicks on eye icon inactive
    And Login password "PasswordNotValid" is shown
Then User clicks on eye icon
    And Login password is not shown
