import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";
import {form, onForm} from "../../support/page_objects/FormPage";

describe('Check if adoption without some important information will be possible', () => {

    const successAdoptionMsg = 'YOUR ADOPTION HAS BEEN SET UP';

    beforeEach('Open application', () => {
        cy.openPage('adoption');
    });

    it('should not be possible to adopt animal without filling any values in form', () => {
        onAdoptionPage.selectDate('First day of the next month');
        onAdoptionPage.selectAnimalByType('turtle');
        onAdoptionPage.checkTerms();
        onAdoptionPage.submitAdoption();
        cy.get('.content').invoke('text').then(isAvailable => {
            expect(isAvailable, 'Unfortunately success adoption message is visible').to.not.contain(successAdoptionMsg);
        });
    });

    for (let n in form) {
        it(`should not be possible to adopt animal with empty ${form[n]} value in form`, () => {
            onAdoptionPage.selectDate('First day of the next week');
            onAdoptionPage.selectAnimalByType('turtle');
            onAdoptionPage.checkTerms();
            onForm.fillFormWithRandomData();
            onForm.clearField(form[n]);
            onAdoptionPage.submitAdoption();
            cy.get('.content').invoke('text').then(isAvailable => {
                expect(isAvailable, 'Unfortunately success adoption message is visible').to.not.contain(successAdoptionMsg);
            });
        });
    };

});
