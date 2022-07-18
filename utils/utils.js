function getCurrencyList(arr) {
  if (arr.length === 0) {
    return ["Nothing"];
  }
  let currency = [];
  arr.forEach((obj) => {
    currency.push(obj["currency"]);
  });
  return currency;
}


function getStrinFromList(list) {
  if (list[0].localeCompare("Nothing") === 0) {
    return "Your favourite list is empty!";
  }
  let str = "Your favourite currency: ";
  list.forEach((item) => {
    str += "\n/" + item;
  });
  return str;
}


module.exports = { getCurrencyList, getStrinFromList };
