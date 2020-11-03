import {onContactPage} from "../../support/page_objects/ContactPage";
import {clearField} from "../../support/page_objects/FormPage";


describe('Check submission on contact form', () => {

    beforeEach('Open application', () => {
        cy.openPage('contact');
    });

    it(`should be visible success message after correct filling the form`, () => {
        onContactPage.fillContactFormWithRandomDataAndSubmit();
            cy.get('.content').invoke('text').then(isAvailable => {
                expect(isAvailable, `${isAvailable}`).to.contain('We have your message');
            });
        });


    it(`should not be possible to send contact form without value`, () => {
        onContactPage.fillContactFormWithRandomData();
        clearField('name');
        onContactPage.submitContactInfo();
        const stub = cy.stub();
        cy.on('window:alert', (stub) => {
            expect(stub.getCall(0), 'LOL').to.be.equal('Email field is empty');
        });
    });



});
