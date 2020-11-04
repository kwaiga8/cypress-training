import {onContactPage} from "../../support/page_objects/ContactPage";
import {clearField, form} from "../../support/page_objects/FormPage";

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
};

describe('Check submission on contact form', () => {

    beforeEach('Open application', () => {
        cy.openPage('contact');
    });

    it(`should be not possible to send a message without filling the form`, () => {
        onContactPage.submitContactInfo();
        cy.get('.content').invoke('text').then(isSend => {
            expect(isSend).to.not.contain('We have your message');
        });
    });


    it(`should be visible success message after correct filling the form`, () => {
        onContactPage.fillContactFormWithRandomDataAndSubmit();
            cy.get('.content').invoke('text').then(isSend => {
                expect(isSend).to.contain('We have your message');
            });
        });

    for (let n in form) {
        it(`should not be possible to send contact form without ${form[n]} value`, () => {
            onContactPage.fillContactFormWithRandomData();
            clearField(form[n]);
            const stub = cy.stub();
            cy.on('window:alert', stub);
            cy.get('#submit_message').click().then(() => {
                expect(stub.getCall(0), `Message in pop-up was: ${stub.getCall(0).args[0]}`).to.be.calledWith(`${form[n].capitalize()} field is empty`);
            })

        });
    }

});

