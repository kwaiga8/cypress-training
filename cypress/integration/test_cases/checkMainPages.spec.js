
describe('Check if every main page is correctly opened', () => {

    const pageTitles ={
        'index':'WELCOME TO THE ZOO ADOPTION CENTER',
        'adoption': 'ADOPTION OPTIONS',
        'about': 'ABOUT',
        'contact': 'CONTACT US'
    };

    for (const [key, value] of Object.entries(pageTitles)){
        it(`should be visible correct header on ${key} page`, () => {
            cy.openPage(key);
            cy.get('h1').then(header => {
                expect(header.text()).to.contain(value);
            })
        });
    }



});
