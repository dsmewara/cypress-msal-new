// cypress/support/pageObjects/siteFormPage.js
class SiteFormPage {
  // Selectors for the form fields
  nameField = '#name'; // Replace with the actual selector for the Name field
  nodesField = '#nodes'; // Replace with the actual selector for Number of Nodes
  sectorsField = '#sectors'; // Replace with the actual selector for Number of Physical Sectors
  sitesField = '#sites'; // Replace with the actual selector for Number of Sites
  externalNameField = '#externalName'; // Replace with the actual selector for External Name
  externalCodeField = '#externalCode'; // Replace with the actual selector for External Code
  submitButton = '#submit-button'; // Replace with the actual selector for Submit button

  // Method to get current date and time with seconds
  getCurrentDateTime() {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now
      .getHours()
      .toString()
      .padStart(2, '0')}${now.getMinutes()
      .toString()
      .padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
  }

  // Method to generate unique values for the form, including External Name and Code
  generateUniqueInputValues() {
    const dateTimeString = this.getCurrentDateTime(); // Get the current date and time with seconds

    return {
      name: `SC DS ${dateTimeString}`, // Name field with SC DS + current date-time
      externalName: `SC EN ${dateTimeString}`, // External Name field with SC EN + current date-time
      externalCode: `SC EC ${dateTimeString}`, // External Code with SC EC + current date-time
      nodes: this.generateRandomNumber(1, 100), // Random number for Nodes (or replace with other logic)
      sectors: this.generateRandomNumber(1, 10), // Random number for Sectors (or replace with other logic)
      sites: this.generateRandomNumber(1, 50), // Random number for Sites (or replace with other logic)
    };
  }

  // Method to fill the form
  fillForm(uniqueValues) {
    cy.get(this.nameField).clear().type(uniqueValues.name); // Enter Name with prefix SC DS
    cy.get(this.externalNameField).clear().type(uniqueValues.externalName); // Enter External Name with prefix SC EN
    cy.get(this.externalCodeField).clear().type(uniqueValues.externalCode); // Enter External Code with prefix SC EC
    cy.get(this.nodesField).clear().type(uniqueValues.nodes.toString()); // Enter Number of Nodes
    cy.get(this.sectorsField).clear().type(uniqueValues.sectors.toString()); // Enter Number of Physical Sectors
    cy.get(this.sitesField).clear().type(uniqueValues.sites.toString()); // Enter Number of Sites
  }

  // Method to submit the form
  submitForm() {
    cy.get(this.submitButton).click();
  }
}

export default SiteFormPage;
