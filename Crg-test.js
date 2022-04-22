// Crg-test.js created with Cypress
/// <reference types="cypress" />

describe('*****Login', () => {





  it('Can login', () => {
    cy.visit('*****');
    cy.get('#login').click();
    cy.get('#email').click();
    cy.get('#email').type('*****'');
    cy.get('#password').click();
    cy.get('#password').type('*****');
    cy.get('#loggingin').click().should('be.visible');

  })

  it('Can add a freight', () => {
  cy.wait(2000)
  cy.get('.bubble-r-box:nth-child(1) > .bubble-element > .bubble-r-line > .bubble-r-box > .Button').click();
  cy.get('.bubble-element:nth-child(12) > .bubble-r-line:nth-child(1) .bubble-r-box:nth-child(2) .bubble-r-line:nth-child(1) .content:nth-child(1)').click();
  cy.get('.MultiLineInput').click();
  cy.get('.MultiLineInput').type('Oslo-Riga,FTL,Mega,10000');
  cy.get('.bubble-r-line:nth-child(5) .Button').click().should('be.visible');
  })

  it('Can edit posted freight', () => {
  cy.wait(2000)
  cy.get('.bubble-element:nth-child(3) .Button').click();
  cy.get('.bubble-element:nth-child(2) .bubble-r-box:nth-child(1) .bubble-r-box:nth-child(2) .bubble-r-line:nth-child(1) .content:nth-child(1)').click();
  cy.wait(2000)
  cy.get('.bubble-element:nth-child(3) .bubble-r-box:nth-child(2) .ion-edit:nth-child(1)').click();
  cy.wait(2000)
  cy.contains('Update').click().should('be.visible');
  })
  it('Can log out', () => {
  cy.get('.bubble-r-box:nth-child(2) > .bubble-element:nth-child(3) .bubble-r-box:nth-child(2) > .bubble-element').click();
  cy.wait(1000)
  })
  it('Can view and delete(if made by current user) posted freight', () => {
  cy.visit('*****');
  cy.get('#login').click();
  cy.get('#email').click();
  cy.get('#email').type('*****');
  cy.get('#password').click();
  cy.get('#password').type('*****');
  cy.get('#loggingin').click();
  cy.wait(2000)
  cy.get('.bubble-r-box:nth-child(2) > .bubble-element > .bubble-r-line > .bubble-r-box:nth-child(1) > .bubble-element > .bubble-r-line > .bubble-r-box > .bubble-element > .content').click();
  cy.visit('*****');
  cy.get('.rows:nth-child(1) > .bubble-element:nth-child(3) .bubble-element:nth-child(1) > .bubble-r-line:nth-child(1) > .bubble-r-box:nth-child(3) > .bubble-element:nth-child(1) > .bubble-r-line:nth-child(1) > .bubble-r-box:nth-child(1) > .bubble-element:nth-child(1)').click();
  cy.get('.ion-ios-trash').click().should('be.visible');
  cy.get('.bubble-r-line:nth-child(2) > .bubble-r-box > .bubble-element > .bubble-r-line > .bubble-r-box:nth-child(2) > .Button').click();

  })
  it('Can filter the freights', () => {
  cy.wait(2000)
  cy.get('.bubble-r-box:nth-child(2) > .bubble-element > .bubble-r-line > .bubble-r-box:nth-child(1) > .bubble-element > .bubble-r-line > .bubble-r-box > .bubble-element > .content').click();
  cy.get('.bubble-r-box:nth-child(2) > .bubble-element:nth-child(1) .Button').click().should('be.visible');
  cy.get('.bubble-element:nth-child(2) .bubble-r-box:nth-child(1) > .Input:nth-child(2)').click();
  cy.get('.bubble-element:nth-child(2) .bubble-r-box:nth-child(1) > .Input:nth-child(2)').type('Oslo');
  cy.get('.bubble-element:nth-child(2) > .bubble-r-line:nth-child(1) > .bubble-r-box:nth-child(2) > .Input:nth-child(2)').click();
  cy.get('.bubble-element:nth-child(2) > .bubble-r-line:nth-child(1) > .bubble-r-box:nth-child(2) > .Input:nth-child(2)').type('Orimatilla');
  cy.wait(3000)
  cy.get('.bubble-r-line:nth-child(5) .bubble-r-box:nth-child(1) > .Button').click();
  cy.get('.bubble-r-box:nth-child(2) > .bubble-element:nth-child(1) .Button').click();
  cy.wait(3000)
  })








    })



// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
