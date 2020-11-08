import {onForm} from "./FormPage";

export class ContactPage{
    Radios = {
        'information': "#rinfo",
        "donation": "#rdona",
        "adoption": "#radop"
    };

    selectRadioButton(radiobuttonName) {
        cy.get(this.Radios[radiobuttonName]).click();
    };

    selectCheckboxZooVolunteer() {
        cy.get('#cdona').click();
    };

    selectCheckboxEmaillNewsletter() {
        cy.get('#cadop').click();
    };

    selectRandomRadiobutton() {
        const radios = Object.keys(this.Radios);
        const random = Math.floor(Math.random() * radios.length);
        this.selectRadioButton(radios[random])
    }

    submitContactInfo() {
        cy.get('#submit_message').click();
    }

    fillContactFormWithRandomData() {
        this.selectRandomRadiobutton();
        this.selectCheckboxEmaillNewsletter();
        this.selectCheckboxZooVolunteer();
        onForm.fillFormWithRandomData();
    }

    fillContactFormWithRandomDataAndSubmit() {
        this.fillContactFormWithRandomData();
        this.submitContactInfo();
    }

}

export const onContactPage = new ContactPage();
