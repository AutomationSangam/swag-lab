class CheckoutCompletePage{

    get checkoutCompleteText(){
        return $('//span[text()="Checkout: Complete!"]')
    }

    get checkoutCompleteLogo(){
        return $('img[data-test="pony-express"]')
    }
    get swagLabsHeader(){
        return $('//div[text()="Swag Labs" and @class="app_logo"]')
       }

    get thankYouMsg(){
        return $('h2[data-test="complete-header"]')
    }

    get dispatchMsg(){
        return $('[data-test="complete-text"]')
    }

    get backHomeButton(){
        return $('button#back-to-products')
    }

    


}
export default new CheckoutCompletePage()