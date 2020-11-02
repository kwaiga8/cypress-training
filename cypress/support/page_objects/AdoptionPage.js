export class AdoptionPage {

    selectAnimalByRow(numberInTable) {
        cy.get(`#check_btn_0${numberInTable}`).click();
    };

    selectDate(date) {
        cy.get('#start_select').select(`${date}`);
    }

    typeInField(fieldName, value) {
        cy.get(`[name="${fieldName}_field"]`).type(value);
    }

    clearField(fieldName) {
        cy.get(`[name="${fieldName}_field"]`).clear();
    }

    submitAdoption() {
        cy.get('[type="button"][value="Check"]').click();
    }

    checkTerms(){
        cy.get('#footer_term').click();
    }

    fillAdoptionFormWithRandomData() {
        let faker =require('faker');
        this.typeInField('name', faker.name.findName());
        this.typeInField('address', faker.address.streetAddress());
        this.typeInField('postcode', faker.address.zipCode());
        this.typeInField('email', faker.internet.email());
    }

    fillAdoptionFormWithRandomDataAndSubmit() {
        this.fillAdoptionFormWithRandomData();
        this.submitAdoption();
    }
}

export const onAdoptionPage = new AdoptionPage();