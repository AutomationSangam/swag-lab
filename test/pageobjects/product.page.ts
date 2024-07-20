class ProductPage  {
    
    get productsText(){
        return $('//span[text()="Products"]')
    }
    get swagLabsHeader(){
        return $('//div[text()="Swag Labs" and @class="app_logo"]')
       }
    get shoppingCartLink(){
        return $('div#shopping_cart_container')
    }

    get shoppingCartItemCount(){
        return $('span[data-test="shopping-cart-badge"]')
    }
    //Back Pack Product
    get backPackProductTitle(){
        return $('//div[text()="Sauce Labs Backpack"]')
    }
    get backPackProductDescription(){
        return $('//div[text()="Sauce Labs Backpack"]/parent::a/following-sibling::div[@data-test="inventory-item-desc"]')
    }
    get backPackAddToCartButton(){
        return $('button#add-to-cart-sauce-labs-backpack')
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

    get boltTShirtAddToCartButton(){
        return $('button#add-to-cart-sauce-labs-bolt-t-shirt')
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

    get oneSieAddToCartButton(){
        return $('button#add-to-cart-sauce-labs-onesie')
    }
    
    get oneSieProductPrice(){
        return $('//button[contains(@id,"sauce-labs-onesie")]/preceding-sibling::div[@data-test="inventory-item-price"]')
    }

    get oneSieRemoveButton(){
        return $('button#remove-sauce-labs-onesie')
    }

}
export default new ProductPage()