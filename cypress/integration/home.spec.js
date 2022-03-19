
// O describe serve para definir o nome da suite de testes
// Cada caso de teste é definido dentro do "it"
// Cada item após a palavra reservada Cy são funções e métodos do JavaScript
// a tag # é utilizada para buscar elementos pelo id utilizando o CSS selector


describe('home pag ', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440,900)
        cy.visit ('https://buger-eats.vercel.app/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
    
})