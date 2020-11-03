import {fillFormWithRandomData} from "./FormPage";

export class AdoptionPage {

    selectAnimalByRow(numberInTable) {
        cy.get(`#check_btn_0${numberInTable}`).click();
    };

    selectDate(date) {
        cy.get('#start_select').select(`${date}`);
    }

    submitAdoption() {
        cy.get('[type="button"][value="Check"]').click();
    }

    checkTerms(){
        cy.get('#footer_term').click();
    }


    fillAdoptionFormWithRandomDataAndSubmit() {
        fillFormWithRandomData();
        this.submitAdoption();
    }
}

export const onAdoptionPage = new AdoptionPage();
