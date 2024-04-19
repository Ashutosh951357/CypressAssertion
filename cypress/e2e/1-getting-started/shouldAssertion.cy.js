///<reference types="cypress"/>

describe('BDD Style assertion',function()
{
    it('It validate OrangeHRM login page',function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','/auth/login')
        cy.title('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
                

    }
    )
})
