function calculateNumbers(var1, var2)
{
    var sumTotal = var1 + var2;
    var productTotal = var1 * var2;
    var differenceTotal = var1 - var2;
    var quotientTotal = var1 / var2;
    console.log("Sum: " + sumTotal);
    console.log("Product: " + productTotal);
    console.log("Difference: " + differenceTotal);
    console.log("Quotient: " + quotientTotal);
    return [sumTotal, productTotal, differenceTotal, quotientTotal];
}