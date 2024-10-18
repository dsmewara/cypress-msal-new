Test Case ID	Title	Description	Preconditions	Step	Actions	Expected Result	
TC-001	Full Access for Designer Role (sc.write, sc.read, sc.delete, psd.write, psd.read, psd.delete)	Verify full access to SC (Site Concept) and PSD (Proposed Site Deliverable) functionalities for a user with Designer AD role and Designer customer role.	"User has Designer AD role and Designer customer role.
User must have valid Microsoft account credentials and MFA configured."	1	Open the application URL.	The login page is displayed.	
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page with full access to SC and PSD functionalities.	
				6	Navigate to the SC section from the main menu.	User can access the Site Concept functionalities.	
				7	Perform SC actions: Create, View, Edit, Delete.	User can create a new Site Concept, view the list of existing Site Concepts, edit details, and delete Site Concepts.	
				8	Navigate to the PSD section from the main menu.	User can access the Proposed Site Deliverable functionalities.	
				9	Perform PSD actions: Create, View, Edit, Delete.	User can create a new Proposed Site Deliverable, view the list of existing Proposed Site Deliverables, edit details, and delete Proposed Site Deliverables.	
				10	Verify access control for SC and PSD actions.	All SC and PSD actions (Create, Edit, Delete) are enabled and accessible without restrictions.	
TC-002	Full Approval Rights for Approver Role (sc.write, sc.read, sc.delete, psd.write, psd.read, psd.delete)	Verify full approval/reject rights for SC (Site Concept) and PSD (Proposed Site Deliverable) for a user with Approver AD role and Approver customer role.	"User has Approver AD role and Approver customer role.
User must have valid Microsoft account credentials and MFA configured."	1	Open the application URL.	The login page is displayed.	
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page with full approval rights for SC and PSD.	
				6	Navigate to SC section from the main menu.	User can access the SC functionalities.	
				7	Perform an approval action on a Site Concept.	Approve Site Concept.	
				8	Perform a rejection action on a Site Concept.	Reject Site Concept.	
				9	Navigate to PSD section from the main menu.	User can access the PSD functionalities.	
				10	Perform an approval action on a Proposed Site Deliverable.	Approve Proposed Site Deliverable.	
				11	Perform a rejection action on a Proposed Site Deliverable.	Reject Proposed Site Deliverable.	
					Access Control Verification:	All approval actions (Approve, Reject) should be enabled and accessible without restrictions.	
TC-003	Read-Only Access for App User Role	Verify read-only access to SC (Site Concept) and PSD (Proposed Site Deliverable) for a user with App User AD role and Designer customer role.	"User has App User AD role and Designer customer role.
User must have valid Microsoft account credentials and MFA configured."	1	Open the application URL.	The login page is displayed.	
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page with read-only access to SC and PSD.	
				6	Navigate to SC section from the main menu.	User can access the SC functionalities.	
				7	Attempt to create a new Site Concept.	Create action is disabled or not accessible.	
				8	Attempt to edit an existing Site Concept.	Edit action is disabled or not accessible.	
				9	Attempt to delete a Site Concept.	Delete action is disabled or not accessible.	
				10	Navigate to PSD section from the main menu.	User can access the PSD functionalities.	
				11	Attempt to create a new Proposed Site Deliverable.	Create action is disabled or not accessible.	
				12	Attempt to edit an existing Proposed Site Deliverable.	Edit action is disabled or not accessible.	
				13	Attempt to delete a Proposed Site Deliverable.	Delete action is disabled or not accessible.	
					Access Control Verification:	All actions (Create, Edit, Delete) should be disabled and not accessible for the user.	
TC-004	No AD Role with Designer Customer Role	Verify that a user with no AD role and Designer customer role cannot create/edit/delete SC (Site Concept) or PSD (Proposed Site Deliverable).	"User has no AD role and Designer customer role.
User must have valid Microsoft account credentials and MFA configured."	1	Open the application URL.	The login page is displayed.	"Users with the Designer customer role but no AD Designer role should not be able to create, edit, or delete Site Concepts or PSDs.
"
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page but cannot create/edit/delete SC or PSD.	
				6	Navigate to SC section from the main menu.	User can access the SC functionalities but should see no options to create, edit, or delete.	
				7	Attempt to create a new Site Concept.	Create action is disabled or not accessible.	
				8	Attempt to edit an existing Site Concept.	Edit action is disabled or not accessible.	
				9	Attempt to delete a Site Concept.	Delete action is disabled or not accessible.	
				10	Navigate to PSD section from the main menu.	User can access the PSD functionalities but should see no options to create, edit, or delete.	
				11	Attempt to create a new Proposed Site Deliverable.	Create action is disabled or not accessible.	
				12	Attempt to edit an existing Proposed Site Deliverable.	Edit action is disabled or not accessible.	
				13	Attempt to delete a Proposed Site Deliverable.	Delete action is disabled or not accessible.	
					Access Control Verification:	All actions (Create, Edit, Delete) should be disabled and not accessible for the user.	
TC-005	No AD Role with Approver Customer Role	Verify that a user with no AD role and an Approver customer role can read metadata, SC, and PSD but cannot approve or reject them.	"User has no AD role and an Approver customer role. 
 User must have valid Microsoft account credentials and MFA configured."	1	Open the application URL.	The login page is displayed.	
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page with access to metadata, SC, and PSD functionalities.	
				6	Navigate to the Metadata section from the main menu.	User can view metadata details.	
				7	Navigate to SC section from the main menu.	User can access the SC functionalities and see the list of Site Concepts.	
				8	Select a Site Concept to view details.	User can view the details of the selected Site Concept.	
				9	Attempt to approve the selected Site Concept.	The approve action is disabled or not accessible.	
				10	Attempt to reject the selected Site Concept.	The reject action is disabled or not accessible.	
				11	Navigate to the PSD section from the main menu.	User can access the PSD functionalities and see the list of Proposed Site Deliverables.	
				12	Select a Proposed Site Deliverable to view details.	User can view the details of the selected Proposed Site Deliverable.	
				13	Attempt to approve the selected Proposed Site Deliverable.	The approve action is disabled or not accessible.	
				14	Attempt to reject the selected Proposed Site Deliverable.	The reject action is disabled or not accessible.	
					Access Control Verification:	All read actions should be accessible for the user, but approve/reject actions should be disabled.	
TC-006	No Customer Role	Verify that a user with no customer role can see the list and details for SC and PSD but cannot perform any actions.	User has no customer role.	1	Open the application URL.	The login page is displayed.	
				2	Log in with valid Microsoft account credentials for an existing user.	The MSAL login window is displayed.	
				3	Click on the sign-in button.	The MSAL authentication window appears.	
				4	Receive MFA code via SMS/Email/App.	User is prompted for MFA.	
				5	Enter MFA code.	User is redirected to the home page.	
				6	Navigate to the SC section from the main menu.	User can see the list of Site Concepts (SC) and can view the details.	
				7	Attempt to view details of a specific Site Concept (SC).	User can view the details of the selected Site Concept (SC).	
				8	Navigate to the PSD section from the main menu.	User can see the list of Proposed Site Deliverables (PSD) and can view the details.	
				9	Attempt to view details of a specific Proposed Site Deliverable (PSD).	User can view the details of the selected Proposed Site Deliverable (PSD).	
							
SC-001	Successful Login with MFA	Verify that a registered user can log in successfully with valid credentials and complete MFA verification.	User is registered with valid credentials and MFA enabled.	1	Open the login page.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Click on the sign-in button.	The user is prompted for MFA verification.	
				5	Receive MFA code via SMS/Email/App.	User is prompted to enter the MFA code.	
				6	Enter the MFA code.	User is successfully logged in and redirected to the homepage.	
SC-002	MFA Code Expiry	Verify that the user cannot complete the login process if the MFA code has expired.	User is registered with valid credentials and MFA enabled.	1	Open the login page.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Click on the sign-in button.	The user is prompted for MFA verification.	
				5	Receive MFA code via SMS/Email/App.	User is prompted to enter the MFA code.	
				6	Wait for the MFA code to expire.	The MFA code expires.	
				7	Enter the expired MFA code.	An error message is displayed indicating the code has expired, and the login fails.	
SC-003	Incorrect MFA Code	Verify that entering an incorrect MFA code prevents the user from logging in.	User is registered with valid credentials and MFA enabled.	1	Open the login page.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Click on the sign-in button.	The user is prompted for MFA verification.	
				5	Receive MFA code via SMS/Email/App.	User is prompted to enter the MFA code.	
				6	Enter an incorrect MFA code.	An error message is displayed indicating the MFA code is incorrect.	
				7	Attempt to log in again.	User remains on the MFA prompt and is not logged in.	
SC-004	Multi-Factor Authentication Bypass Option	Verify that the user can select a different method for receiving the MFA code if multiple options are available.	User is registered for multiple MFA methods.	1	Open the login page.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Click on the sign-in button.	The user is prompted for MFA verification.	
				5	Select an alternative method for MFA code.	The alternative MFA method options are displayed.	
				6	Choose a different method (e.g., SMS, email).	The selected method is confirmed.	
				7	Receive the MFA code through the selected method.	User receives the MFA code through the alternative method.	
				8	Enter the MFA code.	User successfully logs in and is redirected to the home page.	
SC-005	Successful Login from Different Device	Verify that a user can log in from a different device using valid credentials and MFA.	User is registered with valid credentials and MFA enabled.	1	Open the login page on a different device.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Click on the sign-in button.	User is prompted for MFA verification.	
				5	Receive MFA code via SMS/email/app.	User receives the MFA code through the selected method.	
				6	Enter the MFA code.	User is redirected to the dashboard/homepage.	
SC-006	Session Timeout Handling	Verify that the user is logged out after a session timeout and must log in again with MFA.	User is logged in successfully.	1	Log in with valid credentials.	User is redirected to the homepage.	
				2	Wait for session timeout.	User is logged out automatically.	
				3	Attempt to access a protected resource.	User is redirected to the login page.	
				4	Enter valid username.	The username is entered successfully.	
				5	Enter valid password.	The password is entered successfully.	
				6	Click on the sign-in button.	User is prompted for MFA verification.	
				7	Receive MFA code via SMS/email/app.	User receives the MFA code through the selected method.	
				8	Enter the MFA code.	User is redirected to the dashboard/homepage.	
SC-007	MFA Retry Limit	Verify that after exceeding the maximum number of failed MFA attempts, the user cannot log in.	User is registered with valid credentials and MFA enabled.	1	Open the login page.	The login page is displayed.	
				2	Enter valid username.	The username is entered successfully.	
				3	Enter valid password.	The password is entered successfully.	
				4	Enter incorrect MFA code (3 times).	User is prompted for MFA verification each time.	
				5	Enter incorrect MFA code again.	Error message: "Too many failed attempts. Please try again later."	
SC-008	Login with Locked Account	Verify that a user cannot log in if their account is locked after multiple failed login attempts.	User account is locked due to multiple failures.	1	Open the login page.	The login page is displayed.	
				2	Enter locked username.	The locked username is entered successfully.	
				3	Enter any password.	The password is entered successfully.	
				4	Click on the sign-in button.	Error message: "Account is locked."	
