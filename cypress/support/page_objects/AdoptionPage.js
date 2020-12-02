import {onForm} from "./FormPage";

export class AdoptionPage {
    Animals = {
        'lion': '1',
        'turtle': '2',
    };

    selectAnimalByType(animalType) {
        cy.get(`#check_btn_0${this.Animals[animalType]}`).click();
    };

    selectDate(date) {
        cy.get('#start_select').select(`${date}`);
    };

    submitAdoption() {
        cy.get('[type="button"][value="Check"]').click();
    };

    checkTerms() {
        cy.get('#footer_term').click();
    };

    fillAdoptionFormWithRandomDataAndSubmit() {
        onForm.fillFormWithRandomData();
        this.submitAdoption();
    };
};

export const onAdoptionPage = new AdoptionPage();
