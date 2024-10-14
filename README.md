Testcase ID	Test Case Title	Description	Precondition	Steps	Expected Result	Actual Result
TC-001	Login with Valid Credentials (Existing User)	Verify that an existing user can log in with valid credentials.	User account exists.	"1. Navigate to the login page.
2. Enter valid credentials.
3. Click Login."	User is redirected to the Microsoft login, then to the home page with the active customer displayed.	Same as Expected
TC-002	Login with Invalid Credentials	Verify that an existing user cannot log in with invalid credentials.	User account exists.	"1. Navigate to the login page.
2. Enter invalid credentials.
3. Click Login."	Error message is displayed, and user remains on the login page.	Same as Expected
TC-003	Login with Valid Credentials (New User)	Verify that a new user can log in with valid credentials.	User account is created.	"1. Navigate to the login page.
2. Enter valid credentials.
3. Click Login."	User is redirected to the Microsoft login, then to the home page with no active customer displayed.	Same as Expected
TC-004	No Customers for New User	Verify that a new user sees no customers in the dropdown.	User account is created.	"1. Log in with new user credentials.
2. Click on the user icon."	"No customer for this user" message is displayed.	Same as Expected
TC-005	Active Customer Display on Login	Verify that the active customer is displayed upon login.	User account exists with an active customer.	1. Log in with valid credentials.	Active customer is shown in the left corner.	Same as Expected
TC-006	Switch Active Customer	Verify that selecting a new customer from the dropdown updates the view.	User is logged in with multiple associated customers.	"1. Click on the user icon.
2. Select a different customer from the dropdown."	The view updates to reflect the newly selected customer and its associated data.	Same as Expected
TC-007	Role-Based Access - Designer Role (Vodafone Portugal)	Verify actions for Designer role at Vodafone Portugal.	User is logged in with Designer role.	"1. Access Site Concept.
2. Perform actions (Read, Write, Delete)."	User can perform actions as per permissions.	Same as Expected
TC-008	Role-Based Access - Approver Role (Orange Spain)	Verify actions for Approver role at Orange Spain.	User is logged in with Approver role.	"1. Access Site Concept.
2. Perform actions (Approve, Reject)."	User can perform actions as per permissions.	Same as Expected
TC-009	Role-Based Access - App Role (Vodafone Spain)	Verify actions for App role at Vodafone Spain.	User is logged in with App role.	"1. Access Site Concept.
2. Perform actions (Read, List)."	User can perform actions as per permissions.	Same as Expected
TC-010	Role-Based Access - All Roles (Demo User)	Verify actions for Demo user with all roles.	User is logged in as a Demo user.	"1. Access Site Concept.
2. Perform all actions."	User can perform all actions as per permissions.	Same as Expected
TC-011	Designer Role - PSD Permissions (Vodafone Portugal)	Verify actions for Designer role on PSDs at Vodafone Portugal.	User is logged in with Designer role.	"1. Access PSD.
2. Perform actions (Read, Write, Delete)."	User can perform actions as per permissions.	Same as Expected
TC-012	Approver Role - PSD Permissions (Orange Spain)	Verify actions for Approver role on PSDs at Orange Spain.	User is logged in with Approver role.	"1. Access PSD.
2. Perform actions (Approve, Reject)."	User can perform actions as per permissions.	Same as Expected
TC-013	App Role - PSD Permissions (Vodafone Spain)	Verify actions for App role on PSDs at Vodafone Spain.	User is logged in with App role.	"1. Access PSD.
2. Perform actions (Read, List)."	User can perform actions as per permissions.	Same as Expected
TC-014	All Roles - PSD Permissions (Demo User)	Verify actions for Demo user on PSDs.	User is logged in as a Demo user.	"1. Access PSD.
2. Perform all actions."	User can perform all actions as per permissions.	Same as Expected
TC-015	Role-Based Access - Metadata Read for All Roles	Verify metadata read permissions for all roles.	User is logged in with respective roles.	1. Access metadata for Site Concepts and PSDs.	User can read metadata based on role.	Same as Expected
TC-016	Verify Page Refresh on Role Change	Verify that the page refreshes to reflect the correct roles upon login.	User is logged in with multiple roles.	"1. Log in and change roles.
2. Refresh page."	Page displays the updated role and associated permissions.	Same as Expected
TC-017	Session Timeout Handling	Verify the system's behavior when the session times out during an operation.	User is logged in.	"1. Leave the session idle until timeout.
2. Attempt to perform an action."	User is redirected to the login page with a timeout message.	Fail
TC-018	Verify Error Message on Action Post-Timeout	Verify that the appropriate error message is shown after timeout.	User is logged in.	"1. Leave the session idle until timeout.
2. Attempt to approve a Site Concept."	"Session expired" message is displayed.	Same as Expected
TC-019	Customer Change Notification	Verify that users are notified when their Customer changes.	User is logged in.	"1. Change Customer .
2. Refresh page."	User receives a notification of the Customer change.	Same as Expected
TC-020	Update Customer Association for Existing User	Verify that an existing user can update their associated customers.	User is logged in with existing associations.	"1. Go to user settings.
2. Update customer associations."	User's associations are updated successfully.	Same as Expected
TC-021	Verify Customer Association for New User	Verify that a new user has no customer associations upon login.	New user account exists.	1. Log in with new user credentials.	"No customer for this user" message is displayed.	Same as Expected
TC-022	Verify Default Customer Selection	Verify that the default customer is selected after login.	User is logged in with multiple customers.	"1. Log in.
2. Check the default customer in the dropdown."	Default active customer is selected.	Same as Expected
TC-023	Verify Permissions for Designer Role on Customer Change	Verify that a Designer role retains permissions when switching customers.	User is logged in as Designer.	"1. Switch customer.
2. Access Site Concept."	User retains Designer permissions for the new customer.	Same as Expected
TC-024	Verify Permissions for Approver Role on Customer Change	Verify that an Approver role retains permissions when switching customers.	User is logged in as Approver.	"1. Switch customer.
2. Access Site Concept."	User retains Approver permissions for the new customer.	Same as Expected
TC-025	Verify Permissions for App Role on Customer Change	Verify that an App role retains permissions when switching customers.	User is logged in as App role.	"1. Switch customer.
2. Access Site Concept."	User retains App permissions for the new customer.	Same as Expected
TC-026	Verify Custom Messages for No Customers	Verify that appropriate messages are shown when no customers are available.	User is logged in with no customer associations.	1. Click on the user icon.	"No customer for this user" message is displayed.	Same as Expected
TC-027	Validate Customer-Specific Roles and Permissions	Verify that users see permissions based on customer roles.	User is logged in with specific customer roles.	"1. Access Site Concept and PSD.
2. Check permissions based on customer role."	User sees permissions aligned with the customer role.	Same as Expected
TC-028	Validate Access Control for Site Concept Actions	Verify that users can perform actions on Site Concepts based on roles.	User is logged in with specific roles.	"1. Access Site Concepts.
2. Perform actions (Create, Read, Update, Delete)."	Actions are allowed or restricted based on user role.	Same as Expected
TC-029	Validate Access Control for PSD Actions	Verify that users can perform actions on PSDs based on roles.	User is logged in with specific roles.	"1. Access PSD.
2. Perform actions (Create, Read, Update, Delete)."	Actions are allowed or restricted based on user role.	Same as Expected
