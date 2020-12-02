export class FormPage {

    fillFormWithRandomData() {
        let faker = require('faker');
        cy.typeInField('name', faker.name.findName());
        cy.typeInField('address', faker.address.streetAddress());
        cy.typeInField('postcode', faker.address.zipCode());
        cy.typeInField('email', faker.internet.email());
    };

    clearField(fieldName) {
        cy.get(`[name="${fieldName}_field"]`).clear();
    };
};

export const onForm = new FormPage();
export const form = ['name', 'email', 'address', 'postcode'];
