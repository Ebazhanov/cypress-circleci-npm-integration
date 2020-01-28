describe('Comatch UI test', () => {
    describe('given comatch `Home` page', () => {
        before(() => {
            cy.visit('/');
        });
        describe('when user clicks on `FIND CONSULTANT` button', () => {
            before(() => {
                cy.get('.homepage .button[href*="/public_createproject"]').click();
            });
            it('should navigate to `/en/public_createproject` page', () => {
                cy.url().should('include', '/en/public_createproject');
                cy.get('.Alert.info.box').should('contain.text', 'Welcome to COMATCH');
            });
        });
    });
});
