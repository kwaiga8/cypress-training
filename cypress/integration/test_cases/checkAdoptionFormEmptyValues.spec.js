import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";
import {clearField, fillFormWithRandomData, form} from "../../support/page_objects/FormPage";

describe('Check if adoption without some important information will be possible', () => {



    const successAdoptionMsg = 'YOUR ADOPTION HAS BEEN SET UP';


    beforeEach('Open application', () =>{
        cy.openPage('adoption');
    });

    it('should not be possible to adopt animal without filling any values in form', () => {
        onAdoptionPage.selectDate('First day of the next month');
        onAdoptionPage.selectAnimalByRow(2);
        onAdoptionPage.checkTerms();
        onAdoptionPage.submitAdoption();
        cy.get('.content').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.not.contain(successAdoptionMsg);
        });
    });

    for (let n in form) {
        it(`should not be possible to adopt animal with empty ${form[n]} values in form`, () => {
            onAdoptionPage.selectDate('First day of the next week');
            onAdoptionPage.selectAnimalByRow(2);
            onAdoptionPage.checkTerms();
            fillFormWithRandomData();
            clearField(form[n]);
            onAdoptionPage.submitAdoption();
            cy.get('.content').invoke('text').then(isAvailable => {
                expect(isAvailable, `${isAvailable}`).to.not.contain(successAdoptionMsg);
            });
        });
    }

});
