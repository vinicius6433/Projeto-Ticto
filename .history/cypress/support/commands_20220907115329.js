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
        "id":id
    })
})
Cypress.Commands.add("cadastrarUsuario", (nome,email) => {
    let filePath = "cypress/fixtures";
    cy.writeFile(`${filePath}/NovoUsuario.json`, {
        "nome":nome,
        "email":email
    })
})