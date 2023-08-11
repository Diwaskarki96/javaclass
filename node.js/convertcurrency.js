
// const CC = require('currency-converter-lt')
// let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})


// const converter = () => {
//    const convo =  currencyConverter.convert().then((response) => {
//         console.log(response) //or do something else
//     })
//     return convo;
// }
// console.log(converter());

// sir ko
const CC = require('currency-converter-lt');
const currencyConverter = new CC();

const converter = async (from, to, amount) => {
  const result = await currencyConverter
    .from(from)
    .to(to)
    .amount(amount)
    .convert();
  return result;
};

async function solve() {
  try {
    const answer = await converter("INR", "NPR", 100);
    console.log({ answer });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

solve();









