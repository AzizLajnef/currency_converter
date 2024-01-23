function convert(){
    var amount = Number($("#amount").val())
    var fromCurrency = $("#fromCurrency").val()
    var toCurrency = $("#toCurrency").val()
    var conversionRates = { USD: 1, EUR: 0.89, GBP: 0.78, TND: 2.78, CNY: 6.42, JPY: 114.51}
    var result = amount * (conversionRates[toCurrency] / conversionRates[fromCurrency])
    $("#result").text(result.toFixed(2)+toCurrency)
    
}
