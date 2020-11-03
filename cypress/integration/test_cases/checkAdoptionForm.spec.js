import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";

describe('Check basic behaviour of adoption form', () => {

    const successAdoptionMsg = 'YOUR ADOPTION HAS BEEN SET UP';
    const congratulationsAvailabilityMsg = 'CONGRATULATIONS, ANIMAL AVAILABLE';

    beforeEach('Open application', () => {
        cy.openPage('adoption');
    });

    it('should not be possible to adopt turtle without reading the terms', () => {
        onAdoptionPage.selectDate('First day of the next week');
        onAdoptionPage.selectAnimalByRow(2);
        onAdoptionPage.fillAdoptionFormWithRandomDataAndSubmit();
        cy.get('.content').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.not.contain(successAdoptionMsg);
        });
    });

    it('should be possible to adopt turtle when filling correctly all form', () => {
        onAdoptionPage.selectDate('Today');
        onAdoptionPage.selectAnimalByRow(2);
        cy.get('#result').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.contain(congratulationsAvailabilityMsg);
        });

        onAdoptionPage.checkTerms();
        onAdoptionPage.fillAdoptionFormWithRandomDataAndSubmit();
        cy.get('.content').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.contain(successAdoptionMsg);
        });
    });
})



