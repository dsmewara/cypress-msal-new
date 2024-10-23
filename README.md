SC-001	
Successful Login with MFA	
Verify that a registered user can log in successfully with valid credentials and complete MFA verification.	
User is registered with valid credentials and MFA enabled.	

Open the login page.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Receive MFA code via SMS/Email/App.
Enter the MFA code.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
The user is prompted for MFA verification.
User is prompted to enter the MFA code.
User is successfully logged in and redirected to the homepage.

----------------------------------------------------------------

SC-002	
MFA Code Expiry	
Verify that the user cannot complete the login process if the MFA code has expired.	
User is registered with valid credentials and MFA enabled.

Open the login page.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Receive MFA code via SMS/Email/App.
Wait for the MFA code to expire.
Enter the expired MFA code.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
The user is prompted for MFA verification.
User is prompted to enter the MFA code.
The MFA code expires.
An error message is displayed indicating the code has expired, and the login fails.

--------------------------------------------------------------------------------------

SC-003	Incorrect MFA Code	
Verify that entering an incorrect MFA code prevents the user from logging in.	
User is registered with valid credentials and MFA enabled.

Open the login page.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Receive MFA code via SMS/Email/App.
Enter an incorrect MFA code.
Attempt to log in again.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
The user is prompted for MFA verification.
User is prompted to enter the MFA code.
An error message is displayed indicating the MFA code is incorrect.
User remains on the MFA prompt and is not logged in.


---------------------------------------------------------------------------------


SC-004	
Multi-Factor Authentication Bypass Option	
Verify that the user can select a different method for receiving the MFA code if multiple options are available.	
User is registered for multiple MFA methods.

Open the login page.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Select an alternative method for MFA code.
Choose a different method (e.g., SMS, email).
Receive the MFA code through the selected method.
Enter the MFA code.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
The user is prompted for MFA verification.
The alternative MFA method options are displayed.
The selected method is confirmed.
User receives the MFA code through the alternative method.
User successfully logs in and is redirected to the home page.

-------------------------------------------------------------------------------------------

SC-005	
Successful Login from Different Device	
Verify that a user can log in from a different device using valid credentials and MFA.	
User is registered with valid credentials and MFA enabled.

Open the login page on a different device.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Receive MFA code via SMS/email/app.
Enter the MFA code.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
User is prompted for MFA verification.
User receives the MFA code through the selected method.
User is redirected to the dashboard/homepage.

--------------------------------------------------------------------------------------

SC-006	
Session Timeout Handling	
Verify that the user is logged out after a session timeout and must log in again with MFA.	
User is logged in successfully.

Log in with valid credentials.
Wait for session timeout.
Attempt to access a protected resource.
Enter valid username.
Enter valid password.
Click on the sign-in button.
Receive MFA code via SMS/email/app.
Enter the MFA code.

User is redirected to the homepage.
User is logged out automatically.
User is redirected to the login page.
The username is entered successfully.
The password is entered successfully.
User is prompted for MFA verification.
User receives the MFA code through the selected method.
User is redirected to the dashboard/homepage.

--------------------------------------------------------------------------------------------------------

SC-007	
MFA Retry Limit	
Verify that after exceeding the maximum number of failed MFA attempts, the user cannot log in.	
User is registered with valid credentials and MFA enabled.

Open the login page.
Enter valid username.
Enter valid password.
Enter incorrect MFA code (3 times).
Enter incorrect MFA code again.

The login page is displayed.
The username is entered successfully.
The password is entered successfully.
User is prompted for MFA verification each time.
Error message: "Too many failed attempts. Please try again later."

--------------------------------------------------------------------------------------

SC-008	Login with Locked Account	
Verify that a user cannot log in if their account is locked after multiple failed login attempts.	
User account is locked due to multiple failures.

Open the login page.
Enter locked username.
Enter any password.
Click on the sign-in button.

The login page is displayed.
The locked username is entered successfully.
The password is entered successfully.
Error message: "Account is locked."

------------------------------------------------------------
