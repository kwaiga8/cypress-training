import {fillFormWithRandomData} from "./FormPage";

export class ContactPage{

    selectRadioButton(radiobuttonName) {
        cy.get(`input[value="${radiobuttonName.toString().toLowerCase()}"]`).click();
    };

    selectCheckboxZooVolunteer() {
        cy.get('#cdona').click();
    };

    selectCheckboxEmaillNewsletter() {
        cy.get('#cadop').click();
    };

    submitContactInfo() {
        cy.get('#submit_message').click();
    }

    fillContactFormWithRandomData() {
        this.selectCheckboxZooVolunteer();
        this.selectRadioButton('Information');
        fillFormWithRandomData();
    }

    fillContactFormWithRandomDataAndSubmit() {
        this.fillContactFormWithRandomData();
        this.submitContactInfo();
    }

}

export const onContactPage = new ContactPage();
