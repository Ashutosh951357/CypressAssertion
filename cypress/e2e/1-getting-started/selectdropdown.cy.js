///<reference types="cypress"/>

describe('validate dropdown',function()
{
    it('validate select based dropdown ',function()
    {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress Automation')
        cy.contains('cypress automation example').click()
        


    })
})