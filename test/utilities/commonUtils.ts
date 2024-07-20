class CommonUtils{

     removeTextFromTaxAmount(taxAmount: string):string{
        return taxAmount.replace('Tax: $','')
    }

    removeTextFromTotalAmount(totalAmount:string):string{
        return totalAmount.replace('Total: $','')
    }
    removeTextFromSubtotal(subtotal:string):string{
        return subtotal.replace('Item total: $','')
    }
}
export default new CommonUtils()