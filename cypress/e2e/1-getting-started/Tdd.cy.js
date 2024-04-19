///<reference types="cypress"/>

describe('its is a tdd assertion practice',function()
{
    it('validate tdd asssertion',function()
    {
        cy.visit('www.google.com')
        let firstName='testingFunda'

        assert.equal(firstName,'testingFunda')

    })
})