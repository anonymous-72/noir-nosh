describe('template spec', () => {
  it.only('Load Reservation Page', () => {
    cy.visit('/reservation')
  })

  it('Open Home Page Clicking "Home" Navigation Link', () => {
    cy.visit('/reservation')
    cy.contains('a', 'Home').click()
    cy.url().should('include', '/')
  })

  it('Open Menu Page Clicking "Our Menu" Navigation Link', () => {
    cy.visit('/reservation')
    cy.contains('a', 'Our Menu').click()
    cy.url().should('include', '/menu')
  })

  it('Create Reservation Using Form', () => {
    cy.visit('/reservation')
    cy.get('input[formcontrolname="firstName"]').type('Oleg')
    cy.get('input[formcontrolname="lastName"]').type('Caus')
    cy.get('input[formcontrolname="phoneNumber"]').type('068912365')
    cy.get('input[formcontrolname="email"]').type('olesca2005@gmail.com')
    cy.get('input[formcontrolname="date"]').type('2025-01-18')
    cy.get('select[formcontrolname="time"]').select('6:00 - 8:00 PM')
    cy.get('select[formcontrolname="numberOfSeats"]').select('3-4 seats')
    cy.get('#input-check').check()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('button[type="submit"]').click()
  })

  it.only('Create Reservation With Invalid Email', () => {
    cy.visit('/reservation')
    cy.get('input[formcontrolname="firstName"]').type('John')
    cy.get('input[formcontrolname="lastName"]').type('Doe')
    cy.get('input[formcontrolname="phoneNumber"]').type('068123321')
    cy.get('input[formcontrolname="email"]').type('john.doegmail.com')
    cy.get('input[formcontrolname="date"]').type('2025-01-17')
    cy.get('select[formcontrolname="time"]').select('6:00 - 8:00 PM')
    cy.get('select[formcontrolname="numberOfSeats"]').select('3-4 seats')
    cy.get('#input-check').check()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('button[type="submit"]').click()
  })
})
