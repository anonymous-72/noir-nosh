describe('Home Page test', () => {
  it('Load Home Page', () => {
    cy.visit('/')
  })

  it('Open Menu Page Clicking "Our Menu" Navigation Link', () => {
    cy.visit('/')
    cy.contains('a', 'Our Menu').click()
    cy.url().should('include', '/menu')
  })

  it.only('Open Reservation Page Clicking "Reservation" Navigation Link', () => {
    cy.visit('/')
    cy.contains('a', 'Reservation').click()
    cy.url().should('include', '/reservation')
  })

  it('Open Reservation Page Clicking "Book a Reservation" Link-Button', () => {
    cy.visit('/')
    cy.contains('a', 'Book a Reservation').click()
    cy.url().should('include', '/reservation')
  })

  it('Open Reservation Page Clicking "Explore Our Menu" Link-Button', () => {
    cy.visit('/')
    cy.contains('a', 'Explore Our Menu').click()
    cy.url().should('include', '/menu')
  })
})
