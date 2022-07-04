describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should be able to update the display of the running total with the number buttons', () => {
    cy.get('#number4').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '411');
  });

  it('should be able to update the display with the result of a arithmetical operation, addition', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11');
  });

  it('should be able to update the display with the result of a arithmetical operation, subtraction', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  });

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7');
  });

  it('should be able to display a positive number', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  });

  it('should be able to display a negative number', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4');
  });

  it('should be able to display a decimal number', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.5');
  });

  it('should be able to display a very large number', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '123456789123');
  });

  it('should display 0 if runningTotal is divided by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  })
})