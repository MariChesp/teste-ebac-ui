/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: login', ()=>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it ('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('chesp.teste@teste.com')
        cy.get('#password').type('teste123@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, chesp.teste (não é chesp.teste? Sair)')

    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, chesp.teste (não é chesp.teste? Sair)')
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
      cy.fixture('perfil').then( dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, chesp.teste (não é chesp.teste? Sair)')
      })
    });
})