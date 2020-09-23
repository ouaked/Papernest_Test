describe(' Tests auto Papernest ', () => {

    before(() => {
        cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper-address-change')
        //cy.wait(9000)
        
    })
    it('Objet', () => {
        cy.wait(3000)
        cy.contains('Résilier votre ancien abonnement internet').click()
        //cy.get('#ppn-top-arrow').click()
        cy.wait(3000)
        cy.contains('Résilier mon ancienne box').click()
        cy.url().should('contain', '/resiliation-box')
       cy.wait(3000)
    })
    it('Actions / Fournisseur', () => {
        cy.contains("J'emménage bientôt").click()
        cy.wait(3000)
        cy.get('#5').click()
        cy.wait(3000)
        //cy.get('#box-cancellation.cancellation_date').click().should('contain', 'mat-datepicker-0')
        cy.get('#box-cancellation.cancellation_date').click()
        cy.wait(3000)
        cy.get('#mat-focus-indicator mat-calendar-next-button mat-icon-button mat-button-base').click()
        cy.wait(3000)
        cy.contains('1 octobre 2020').click()
        cy.wait(3000)
        cy.contains('31').click()
        cy.wait(3000)
        cy.contains('Suivant').click()
    })
    it('Adresse', () => {
        cy.get('#housing.address').type('157 Boulevard Macdonald 75019 Paris').should('have.value', '157 Boulevard Macdonald 75019 Paris')
        cy.contains('Suivant').click()
    })
    it('Coordonnées', () => {
        cy.get('#box-cancellation.reference').type('1508BO').should('have.value', '1508BO')
        cy.get('#box-cancellation.phone_number').type('0600000001').should('have.value', '0600000001')
        cy.get('#user.first_name').type('Toto').should('have.value', 'Toto')
        cy.get('#user.last_name').type('Tata').should('have.value', 'Tata')
        cy.contains('Oui').click()
        cy.get('#user.email').type('Test@papernest.com').should('have.value', 'Test@papernest.com')
        
        
       
    })
   /* it('Email', () => {
        
        cy.get('#email-input').type('toctoc@yopmail.com').should('have.value', 'toctoc@yopmail.com')
        cy.contains('Voir mon offre personnalisée').click()
        cy.url().should('contain', '/familysituation')
    })*/



 })