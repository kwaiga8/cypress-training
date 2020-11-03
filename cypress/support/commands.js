Cypress.Commands.add('openPage', (page)=> {
    cy.visit(`${page}.html`)
});

Cypress.Commands.add('typeInField', (fieldName, value) =>{
    cy.get(`[name="${fieldName}_field"]`).type(value);
});
