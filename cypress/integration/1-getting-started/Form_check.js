// write tests here
describe('Lambda Eats App', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })
  
    const nameInput = () => cy.get('input[name=name]');
    const instructionInput = () => cy.get('input[name=instruction]')
    const sizeDropdown = () => cy.get('select')
    const toppingsBoxInput = () => cy.get('[type=checkbox]');
    const submitBtn = () => cy.get("button[id='order-button']");
    const  foobarInput = () => cy.get('input[name=foobar]');
  
    it('SANITY CHECK to make sure tests work', () => {
  
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
      expect({}).not.to.equal({}); // strict ===
      expect({}).to.eql({}); // not strict ==
  
    })
  
    it('the proper elements are showing', () => {
      nameInput().should('exist');
      instructionInput().should('exist');
      sizeDropdown().should('exist');
      toppingsBoxInput().should('exist');
      submitBtn().should('exist');
      foobarInput().should('not.exist');
      // cy.contains('Submit').should('exist');
      // cy.contains(/submit/i).should('exist');
    })
  
    describe('Filling out the inputs and submitting', () => {
      // We can use optional describe blocks to organize and group our tests
      // Can we navigate to the url
      it('can navigate to the url', () => {
          cy.url()
            .should('include', 'localhost');
      })
  
      // submit button should start out disabled
      it('submit button starts out disabled', () => {
          submitBtn()
            .should('be.disabled');
      })
  
      // type in the inputs
      it('can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('username')
            .should('have.value', 'username');
        instructionInput()
            .should('have.value', '')
            .type('Here are the special instructions')
            .should('have.value', 'Here are the special instructions');
      })

      it('can select a size', () => {
        sizeDropdown()
          .should('have.value', '')
          .select('small')
          .select('medium')
          .select('large')
          .select('extra-large')
      })
  
      it('can check the toppings boxes', () => {
        toppingsBoxInput()
            .check()
      })
      
      // submit button is NOT disabled after typing in the inputs
      it('the submit button enables when all inputs are filled out', () => {
          nameInput()
            .type('Mark');
          instructionInput()
            .type('Here are the special instructions');
          sizeDropdown()
            .should('have.value', '')
            .select('small');
          toppingsBoxInput()
            .check();
          submitBtn()
            .should('not.be.disabled');
      })
  
      it('button works and can submit a form', () => {
        nameInput()
          .type('Janita');
        instructionInput()
          .type('Here are the special instructions');
        sizeDropdown()
          .should('have.value', '')
          .select('medium');
        toppingsBoxInput()
          .check();
        submitBtn()
          .click();
      })
      // submit button should be enabled if all required inputs are filled
      it('checking for validation', () => {
        nameInput()
          .type('Mark')
          .should('have.value', 'Mark');
        instructionInput()
          .type('Here are the special instructions')
          .should('have.value', 'Here are the special instructions');
        toppingsBoxInput()
          .check()
      })
     // clears the text fields
      it('can empty text fields', () => {
        nameInput()
          .type('Mark')
          .clear();
        instructionInput()
          .type('Here are the special instructions')
          .clear();
        sizeDropdown()
          .should('have.value', '')
          .select('large')
          .wait(500)
          .select('');
        toppingsBoxInput()
          .check()
          .wait(500)
          .check();
    })
  
  })
    describe('Adding a new order' , () => {
      it('can submit a new order', () => {
        // first user
          nameInput()
            .type('Mark');
          instructionInput()
            .type('Here are the special instructions');
          toppingsBoxInput()
            .check();
          sizeDropdown()
            .should('have.value', '')
            .select('large')
            .wait(500)
          submitBtn()
            .click()
            .wait(1000);
  
        // second user
          nameInput()
            .type('Mark');
          instructionInput()
            .type('Here are the special instructions');
          toppingsBoxInput()
            .check();
          sizeDropdown()
            .should('have.value', '')
            .select('large')
            .wait(500);
          submitBtn()
              .click();
      })
  
    })
  
  })