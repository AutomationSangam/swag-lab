class CustomerInformationPage {

    get checkoutInformationText(){
        return $('//span[text()="Checkout: Your Information"]')
    }

    get firstNameField(){
        return $('input#first-name')
    }
    get swagLabsHeader(){
        return $('//div[text()="Swag Labs" and @class="app_logo"]')
       }

    get lastNameField(){
        return $('input#last-name')
    }

    get zipCodeField(){
        return $('input#postal-code')
    }

    get continueButton(){
        return $('input#continue')
    }

    get cancelButton(){
        return $('button#cancel')
    }
}
export default new CustomerInformationPage()