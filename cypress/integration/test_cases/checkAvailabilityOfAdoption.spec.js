import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";


describe('Check if adoption without some important information will be possible', () => {
    // let arrDate = ['First day of the next week', 'First day of the next month', 'Today'];

    beforeEach('Open application', () => {
        cy.openPage('adoption');
        onAdoptionPage.selectAnimalByRow(2);
    });


    it('should not be possible to see adopt form without selecting date', () => {

        cy.get('#result').invoke('text').then(isAvailable => {
            expect(isAvailable, `${isAvailable}`).to.not.contain('CONGRATULATIONS, ANIMAL AVAILABLE');
        });
    });

    it('should not be possible to see adopt form without selecting date', () => {
        cy.get('#table2').should('not.exist');
        });

 });
