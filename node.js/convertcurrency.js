const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})


const converter = () => {
   const convo =  currencyConverter.convert().then((response) => {
        console.log(response) //or do something else
    })
    return convo;
}
console.log(converter());

