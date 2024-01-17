export class PostulacionPage {
    
    constructor(){
        this.mailInput = 'input[id="LoginModel_Email"]',
        this.bttnContinueWMail = '#continueWithMailButton',
        this.nameInput = '#Name',
        this.lastNameInput = '#SurName',
        this.passInput = '#Password',
        this.cargo = '#Cargo',
        this.selectDept = 'div[class="nice-select cm-12"]',
        this.selectUbicacion = 'li[data-value="31"]',
        this.captchaInput = '#CaptchaInputText'
        this.bttnContinue = '#continueButton',
        this.captchaError = 'Captcha incorrecto'
    }


    completarMail(mail){
        cy.get(this.mailInput).type(mail)
        cy.get(this.bttnContinueWMail).click()
    }

    completarFormulario(nombre, apellido, pass, cargo, captcha){
        cy.get(this.nameInput).type(nombre)
        cy.get(this.lastNameInput).type(apellido),
        cy.get(this.passInput).type(pass)
        cy.get(this.cargo).type(`${cargo} {enter}`)
        cy.get(this.selectDept).click()
        cy.get(this.selectUbicacion).click()
        cy.get(this.captchaInput).type(captcha)
        cy.get(this.bttnContinue).click()
    }

    validarErrorCaptcha(){
        return cy.contains(this.captchaError)
    }
}