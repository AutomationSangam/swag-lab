import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import customerInformationPage from '../pageobjects/customerInformation.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import checkoutCompletePage from '../pageobjects/checkoutComplete.page.js'
import swagLabConstants from '../constants/constant.js'
import AllureReporter from '@wdio/allure-reporter'
import commonUtils from '../utilities/commonUtils.js'


describe('Swag Lab Checkout', () => {
    it('Validate that user can checkout with 3 products', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await productPage.productsText.waitForDisplayed()
        let productCount:number=0;
        await expect(productPage.swagLabsHeader).toBeDisplayed()
        await expect(productPage.backPackProductTitle).toBeDisplayed()
        await expect(productPage.backPackProductDescription).toHaveText(swagLabConstants.backpackDescription)
        await productPage.backPackAddToCartButton.click()
        productCount++
        await expect(productPage.backPackRemoveButton).toBeDisplayed()
        await expect(productPage.backPackAddToCartButton).not.toBeDisplayed()
        await expect(productPage.shoppingCartItemCount).toHaveText(productCount.toString())
        const backpackProductPrice:string=await productPage.backPackPrice.getText()
        AllureReporter.addStep("Back pack product price:"+backpackProductPrice)
        
        await expect(productPage.boltTShirtProductTitle).toBeDisplayed()
        await expect(productPage.boltTShirtProductDescription).toHaveText(swagLabConstants.boltTShirtDescription)
        await productPage.boltTShirtAddToCartButton.click()
        productCount++
        await expect(productPage.boltTShirtRemoveButton).toBeDisplayed()
        await expect(productPage.boltTShirtAddToCartButton).not.toBeDisplayed()
        await expect(productPage.shoppingCartItemCount).toHaveText(productCount.toString())
        const boltTshirtProductPrice:string=await productPage.boltTShirtPrice.getText()
        AllureReporter.addStep("Bolt tshirt product price:"+boltTshirtProductPrice)
        
        await expect(productPage.oneSieProductTitle).toBeDisplayed()
        await expect(productPage.oneSieProductDescription).toHaveText(swagLabConstants.onesieDescription)
        await productPage.oneSieAddToCartButton.click()
        productCount++
        await expect(productPage.oneSieRemoveButton).toBeDisplayed()
        await expect(productPage.oneSieAddToCartButton).not.toBeDisplayed()
        await expect(productPage.shoppingCartItemCount).toHaveText(productCount.toString())
        AllureReporter.addStep("Total added product in cart:"+productCount)
        const onesieProductPrice=await productPage.oneSieProductPrice.getText()
        AllureReporter.addStep("One sie product price:"+onesieProductPrice)
        
        //Go to Cart
        await productPage.shoppingCartLink.click()
        await cartPage.checkoutButton.waitForDisplayed()
        await expect(cartPage.swagLabsHeader).toBeDisplayed()
        await expect(cartPage.yourCartText).toBeDisplayed()
        await expect(cartPage.continueShoppingButton).toBeDisplayed()
        //validating first product details in cart
        await expect(cartPage.backPackProductTitle).toBeDisplayed()
        await expect(cartPage.backPackProductDescription).toHaveText(swagLabConstants.backpackDescription)
        await expect(cartPage.backPackRemoveButton).toBeDisplayed()
        await expect(cartPage.backPackPrice).toHaveText(backpackProductPrice)

        //validating second product details in cart
        await expect(cartPage.boltTShirtProductTitle).toBeDisplayed()
        await expect(cartPage.boltTShirtProductDescription).toHaveText(swagLabConstants.boltTShirtDescription)
        await expect(cartPage.boltTShirtRemoveButton).toBeDisplayed()
        await expect(cartPage.boltTShirtPrice).toHaveText(boltTshirtProductPrice)

        //validating third product details in cart
        await expect(cartPage.oneSieProductTitle).toBeDisplayed()
        await expect(cartPage.oneSieProductDescription).toHaveText(swagLabConstants.onesieDescription)
        await expect(cartPage.oneSieRemoveButton).toBeDisplayed()
        await expect(cartPage.oneSieProductPrice).toHaveText(onesieProductPrice)
        //Go to your information page

        await cartPage.checkoutButton.click()
        await customerInformationPage.checkoutInformationText.waitForDisplayed()
        await expect(customerInformationPage.swagLabsHeader).toBeDisplayed()
        await expect(customerInformationPage.continueButton).toBeDisplayed()
        await expect(customerInformationPage.cancelButton).toBeDisplayed()
        await customerInformationPage.firstNameField.setValue("Lean")
        await customerInformationPage.lastNameField.setValue("Technologies")
        await customerInformationPage.zipCodeField.setValue("411027")

        //Goto Checkout Page
        await customerInformationPage.continueButton.click()
        await checkoutPage.checkoutOverviewText.waitForDisplayed()
        await expect(checkoutPage.swagLabsHeader).toBeDisplayed()
        await expect(checkoutPage.backPackProductTitle).toBeDisplayed()
        await expect(checkoutPage.backPackProductDescription).toHaveText(swagLabConstants.backpackDescription)
        await expect(checkoutPage.backPackPrice).toHaveText(backpackProductPrice)
        await expect(checkoutPage.boltTShirtProductTitle).toBeDisplayed()
        await expect(checkoutPage.boltTShirtProductDescription).toHaveText(swagLabConstants.boltTShirtDescription)
        await expect(checkoutPage.boltTShirtPrice).toHaveText(boltTshirtProductPrice)
        await expect(checkoutPage.oneSieProductTitle).toBeDisplayed()
        await expect(checkoutPage.oneSieProductDescription).toHaveText(swagLabConstants.onesieDescription)
        await expect(checkoutPage.oneSieProductPrice).toHaveText(onesieProductPrice)
        let subTotal:string=await checkoutPage.totalAmountExcludingTax.getText()
        AllureReporter.addStep('Item total excluding tax:'+subTotal)
        subTotal=commonUtils.removeTextFromSubtotal(subTotal)
        const totalprice=parseFloat(backpackProductPrice.replace('$',''))+parseFloat(boltTshirtProductPrice.replace('$',''))+parseFloat(onesieProductPrice.replace('$',''))
        await expect(totalprice).toEqual(parseFloat(subTotal))
        let taxAmount:string=await checkoutPage.taxAmount.getText()
        AllureReporter.addStep(taxAmount)
        taxAmount=commonUtils.removeTextFromTaxAmount(taxAmount)
        let totalAmount:string=await checkoutPage.totalAmount.getText()
        AllureReporter.addStep(totalAmount)
        totalAmount=commonUtils.removeTextFromTotalAmount(totalAmount)
        const sum=totalprice+parseFloat(taxAmount)
        await expect(sum).toEqual(parseFloat(totalAmount))
        await expect(checkoutPage.cancelButton).toBeDisplayed()
        await expect(checkoutPage.finishButton).toBeDisplayed()
        await expect(checkoutPage.paymentInformationText).toBeDisplayed()
        const paymentInfo:string=await checkoutPage.paymentInfoValue.getText()
        AllureReporter.addStep('Payment value:'+paymentInfo)
        await expect(checkoutPage.shippingInformationText).toBeDisplayed()
        const deliveryPartner:string=await checkoutPage.deliveryCompanyInfo.getText()
        AllureReporter.addStep('Delivery partner:'+deliveryPartner)

        //Goto checkout complete page
        await checkoutPage.finishButton.click()
        await checkoutCompletePage.checkoutCompleteText.waitForDisplayed()
        await expect(checkoutCompletePage.swagLabsHeader).toBeDisplayed()
        await expect(checkoutCompletePage.checkoutCompleteLogo).toBeDisplayed()
        await expect(checkoutCompletePage.thankYouMsg).toHaveText(swagLabConstants.thankYouMsg)
        await expect(checkoutCompletePage.dispatchMsg).toHaveText(swagLabConstants.dispatchMsg)
        await expect(checkoutCompletePage.backHomeButton).toBeDisplayed()

        //Back home
        await checkoutCompletePage.backHomeButton.click()
        await expect(productPage.productsText).toBeDisplayed()
        await expect(productPage.swagLabsHeader).toBeDisplayed()

    })
})

