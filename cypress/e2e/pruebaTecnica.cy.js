/// <reference types="cypress" />

import { HomePage } from "../support/Pages/HomePage"
import { ColombiaHomePage } from "../support/Pages/ColombiaHomePage"
import { PostulacionPage } from "../support/Pages/PostulacionPage"



describe('Prueba Tecnica', () => {

    const homePage = new HomePage
    const colombiaHomePage = new ColombiaHomePage
    const postulacionPage = new PostulacionPage


    before("Ingresamos a la pagina Web", ()=> {
      cy.visit('https://www.computrabajo.com/')
    })

    it("BusquedaPostulacionYTest", () => {

        // Accedes a colombia
        homePage.clickColombia()
        // Incertamos los datos y buscamos la oferta
        colombiaHomePage.completarDatosDeBusqueda("Guainía", "qa")
        // Seleccionamos filtros
        colombiaHomePage.seleccionarFiltros()
        // Validamos que se visualice la oferta de empleo y la ubicación
        colombiaHomePage.validarNombreOfertaDeEmpleo().should('be.visible')
        colombiaHomePage.validarUbicacionOfertaDeEmpleo("Guainía").should('be.visible')
        // Nos postulamos a la oferta
        colombiaHomePage.seleccionarOferta()
        // Cargamos el email
        postulacionPage.completarMail("prueba@test.com")
        // Completamos el formulario y colocamos el captcha con los valores "0000"
        postulacionPage.completarFormulario("Prueba", "Test", "A123456789", "Tester QA", "0000")
        // Validamos que se visualice el error del captcha
        postulacionPage.validarErrorCaptcha().should("be.visible")

    })



})