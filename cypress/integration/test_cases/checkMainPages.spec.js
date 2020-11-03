

describe('Check if every main page is correctly opened', () => {
    const pages = ['index', 'adoption', 'about', 'contact'];
    const headers = ['WELCOME TO THE ZOO ADOPTION CENTER', 'ADOPTION OPTIONS', 'ABOUT', 'CONTACT US'];

    for (let n in pages) {
        it(`should be visible correct header on ${pages[n]} page`, () => {
            cy.openPage(pages[n].toString());
            cy.get('h1').then(header => {
                expect(header.text()).to.contain(headers[n]);
            })
        });
    }



});
