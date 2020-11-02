import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";


describe('Check if adoption without some important information will be possible', () => {
    const congratulationsAvailabilityMsg = 'CONGRATULATIONS, ANIMAL AVAILABLE';
    let arrDate = ['First day of the next week', 'First day of the next month', 'Today'];

    beforeEach('Open application', () => {
        cy.openPage('adoption');
    });


    it('should not be possible to see adopt form without selecting date', () => {
        onAdoptionPage.selectAnimalByRow(2);
        cy.get('#result').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.not.contain(congratulationsAvailabilityMsg);
        });
    });

}