export const form = ['name', 'email', 'address', 'postcode'];

export function fillFormWithRandomData() {
        let faker =require('faker');
        cy.typeInField('name', faker.name.findName());
        cy.typeInField('address', faker.address.streetAddress());
        cy.typeInField('postcode', faker.address.zipCode());
        cy.typeInField('email', faker.internet.email());
    }


export function clearField(fieldName) {
    cy.get(`[name="${fieldName}_field"]`).clear();
}
