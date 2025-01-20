describe('Menu Page Test', () => {
  it('Load Menu Page', () => {
    cy.visit('/menu')
  })

  it('Open Home Page Clicking "Home" Navigation Link', () => {
    cy.visit('/menu')
    cy.contains('a', 'Home').click()
    cy.url().should('include', '/')
  })

  it('Open Reservation Page Clicking "Reservation" Navigation Link', () => {
    cy.visit('/menu')
    cy.contains('a', 'Reservation').click()
    cy.url().should('include', '/reservation')
  })

  it('Show All Menu Dishes', () => {
    cy.visit('/menu')
    cy.contains('h3', 'Appetizers').should('be.visible')
    cy.contains('h3', 'Main Courses').should('be.visible')
    cy.contains('h3', 'Vegetarian Delights').should('be.visible')
    cy.contains('h3', 'Dessert Ateliers').should('be.visible')
    cy.contains('h3', 'Beverages').should('be.visible')
  })
})
