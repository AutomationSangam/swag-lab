class CheckoutPage {

    get checkoutOverviewText(){
        return $('//span[text()="Checkout: Overview"]')
    }
    get swagLabsHeader(){
        return $('//div[text()="Swag Labs" and @class="app_logo"]')
       }
    get finishButton(){
        return $('button#finish')
    }

    get cancelButton(){
        return $('button#cancel')
    }

    get totalAmountExcludingTax(){
        return $('div[data-test="subtotal-label"]')
    }

    get taxAmount(){
        return $('div[data-test="tax-label"]')
    }

    get totalAmount(){
        return $('div[data-test="total-label"]')
    }
    get paymentInformationText(){
        return $('//div[text()="Payment Information:"]')
    }
    get paymentInfoValue(){
        return $('//div[text()="Payment Information:"]/following-sibling::div[@data-test="payment-info-value"]')
    }
    get shippingInformationText(){
        return $('//div[text()="Shipping Information:"]')
    }
    get deliveryCompanyInfo(){
        return $('//div[text()="Shipping Information:"]/following-sibling::div[@data-test="shipping-info-value"]')
    }
    get priceTotalText(){
        return $('//div[text()="Price Total"]')
    }
    get backPackProductTitle(){
        return $('//div[text()="Sauce Labs Backpack"]')
    }
    get backPackProductDescription(){
        return $('//div[text()="Sauce Labs Backpack"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    get backPackPrice(){
        return $('//div[text()="Sauce Labs Backpack"]/parent::a/following-sibling::div/div[@data-test="inventory-item-price"]')
    }
   

    //Bolt T shirt Product

    get boltTShirtProductTitle(){
        return $('//div[text()="Sauce Labs Bolt T-Shirt"]')
    }

    get boltTShirtProductDescription(){
        return $('//div[text()="Sauce Labs Bolt T-Shirt"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    get boltTShirtPrice(){
        return $('//div[text()="Sauce Labs Bolt T-Shirt"]/parent::a/following-sibling::div/div[@data-test="inventory-item-price"]')
    }

    //Onesie Product
    get oneSieProductTitle(){
        return $('//div[text()="Sauce Labs Onesie"]')
    }

    get oneSieProductDescription(){
        return $('//div[text()="Sauce Labs Onesie"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    
    get oneSieProductPrice(){
        return $('//div[text()="Sauce Labs Onesie"]/parent::a/following-sibling::div/div[@data-test="inventory-item-price"]')
    }

}
export default new CheckoutPage()