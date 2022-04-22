// Crg-test.js created with Cypress
/// <reference types="cypress" />

describe('*****Login', () => {

  beforeEach(() => {

    cy.visit('*******')
  })

  it('Has a login button', () => {
    cy.get('#login').should('be.visible')

  })
  it('Can login', () => {
    cy.get('#login').should('be.visible').click()
    cy.get('input[type="email"]').type('******{enter}')
    cy.get('input[type="password"]').type('****{enter}')
    cy.get('#loggingin').should('be.visible').click()

  })
    })

// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
