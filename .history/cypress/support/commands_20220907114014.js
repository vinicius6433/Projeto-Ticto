// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("cadastrarId", (id) => {
    let filePath = "cypress/fixtures";
    cy.writeFile(`${filePath}/idUsuario.json`, {
        id:id
    })
})
Cypress.Commands.add("lerUsuario", (key) => {
    let filePath = "cypress/fixtures";
    cy.readFile(`${filePath}/usuario.json`)
		.its(key)
		.then((valor) => {
			cy.contains(valor)
		});
})