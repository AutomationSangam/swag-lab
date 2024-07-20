class CartPage {

    get yourCartText(){
        return $('//span[text()="Your Cart"]')
    }
    get swagLabsHeader(){
        return $('//div[text()="Swag Labs" and @class="app_logo"]')
       }

    get continueShoppingButton(){
        return $('button[data-test="continue-shopping"]')
    }

    get checkoutButton(){
        return $('button#checkout')
    }
    get backPackProductTitle(){
        return $('//div[text()="Sauce Labs Backpack"]')
    }
    get backPackProductDescription(){
        return $('//div[text()="Sauce Labs Backpack"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    get backPackPrice(){
        return $('//button[contains(@id,"sauce-labs-backpack")]/preceding-sibling::div[@data-test="inventory-item-price"]')
    }
    get backPackRemoveButton(){
        return $('button#remove-sauce-labs-backpack')
    }

    //Bolt T shirt Product

    get boltTShirtProductTitle(){
        return $('//div[text()="Sauce Labs Bolt T-Shirt"]')
    }

    get boltTShirtProductDescription(){
        return $('//div[text()="Sauce Labs Bolt T-Shirt"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    get boltTShirtPrice(){
        return $('//button[contains(@id,"sauce-labs-bolt-t-shirt")]/preceding-sibling::div[@data-test="inventory-item-price"]')
    }

    get boltTShirtRemoveButton(){
        return $('button#remove-sauce-labs-bolt-t-shirt')
    }

    //Onesie Product
    get oneSieProductTitle(){
        return $('//div[text()="Sauce Labs Onesie"]')
    }

    get oneSieProductDescription(){
        return $('//div[text()="Sauce Labs Onesie"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }

    
    get oneSieProductPrice(){
        return $('//button[contains(@id,"sauce-labs-onesie")]/preceding-sibling::div[@data-test="inventory-item-price"]')
    }

    get oneSieRemoveButton(){
        return $('button#remove-sauce-labs-onesie')
    }


}
export default new CartPage()