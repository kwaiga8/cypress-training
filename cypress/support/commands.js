Cypress.Commands.add('openPage', (page)=> {
    cy.visit(`${page}.html`)
})
