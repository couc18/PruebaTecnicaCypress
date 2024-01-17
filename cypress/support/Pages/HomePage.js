export class HomePage {

    constructor(){
        this.colombia = "#Colombialink"
    }

    clickColombia(){
        cy.get(this.colombia).click()
    }
}

