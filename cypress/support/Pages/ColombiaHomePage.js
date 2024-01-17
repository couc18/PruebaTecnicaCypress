export class ColombiaHomePage{

    constructor(){
        this.ubicacionInput = 'input[id="place-search-input"]',
        this.empleoInput = '#prof-cat-search-input',
        this.bttnBuscar = 'button[id="search-button"]',
        this.bttnSalario = '/html/body/main/div[8]/div/div[1]/div[6]/p',
        this.filtroSalario = 'span[data-path="?sal=1"]',
        this.bttnExperencia = '/html/body/main/div[8]/div/div[1]/div[6]/p',
        this.filtroExperiencia = 'span[data-path="?iex=4&sal=1"]'
        this.bttnOferta = 'div[class="opt_dots"]',
        this.opcionPostularse = 'a[class="dB fc_base it-blank mb5"]'
        this.ofertaNombre = 'Test automation Engineer QA',
        this.ofertaUbicacion = 'p[class="fs16 fc_base mt5"]'
        this.idPostulacion = '#7A797577CC74F11161373E686DCF3405'
    }

    completarDatosDeBusqueda(ubicacion, empleo){
        cy.get(this.ubicacionInput).type(ubicacion);
        cy.get(this.empleoInput).type(empleo);
        cy.get(this.bttnBuscar).click()
    }

    seleccionarFiltros(){
        cy.xpath(this.bttnSalario).click();
        cy.get(this.filtroSalario).click();
        cy.xpath(this.bttnExperencia).click();
        cy.get(this.filtroExperiencia).click();
    }

    validarNombreOfertaDeEmpleo(){
        return cy.contains(this.ofertaNombre)
    }

    validarUbicacionOfertaDeEmpleo(ubicacion){
        return cy.get(this.idPostulacion).children(this.ofertaUbicacion).contains(ubicacion)
         
    }

    seleccionarOferta(){
        cy.get(this.idPostulacion).children(this.bttnOferta).click()
        cy.get(this.idPostulacion).find(this.opcionPostularse).click()
    }

}