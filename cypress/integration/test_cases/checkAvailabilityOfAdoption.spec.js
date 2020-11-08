import {onAdoptionPage} from "../../support/page_objects/AdoptionPage";

describe('Check if every animal can be adopted so it is reasonable that it is on the list', () => {

    let arrDate = ['First day of the next week', 'First day of the next month', 'Today'];

    function iterateThroughDate(animalName) {
        for (let n = 0; n < arrDate.length; n++) {
            cy.openPage('adoption');
            onAdoptionPage.selectDate(arrDate[n]);
            onAdoptionPage.selectAnimalByType(animalName);
            cy.get('#result').invoke('text').as(`aviabilityMessage${n}`);
        };
    };


    it('should be possible to adopt every animal from the list - LION case', () => {
        iterateThroughDate('lion');
        cy.all(
            cy.get('@aviabilityMessage0'),
            cy.get('@aviabilityMessage1'),
            cy.get('@aviabilityMessage2')
        ).then(msg => {
            expect(msg.toString(), `\nIt is impossible to adopt LION in any term\n`).include('CONGRATULATIONS, ANIMAL AVAILABLE');
        });

    });

    it('should be possible to adopt every animal from the list - TURTLE case', () => {
        iterateThroughDate('turtle');
        cy.all(
            cy.get('@aviabilityMessage0'),
            cy.get('@aviabilityMessage1'),
            cy.get('@aviabilityMessage2')
        ).then(msg => {
            expect(msg.toString(), `\nIt is impossible to adopt TURTLE in any term\n`).include('CONGRATULATIONS, ANIMAL AVAILABLE');
        });
    });
});

describe('Check correctness of displaying the possibility of adoption', () => {

    beforeEach('Open application', () => {
        cy.openPage('adoption');
        onAdoptionPage.selectAnimalByType('turtle');
    });

    it('should not be possible to see congratulations message without selecting date', () => {
        cy.get('#result').invoke('text').then(isAvailable => {
            expect(isAvailable, `\nUnfortunately success aviability message visible\n`).to.not.contain('CONGRATULATIONS, ANIMAL AVAILABLE');
        });
    });

    it('also should not be possible to see adopt form without selecting date', () => {
        cy.get('#table2').should('not.exist');
    });
});
