///<reference types="cypress"/>

describe ('validate login functionality', () =>
{
    it('validate login with valid credentials', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body').contains('Apply').click()

         
    }
    )
}
)