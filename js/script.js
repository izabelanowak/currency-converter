let formElement = document.querySelector(".js-form");

let euroExchangeRate = document.querySelector(".js-euroExchangeRate").innerText;
let poundExchangeRate = Number(document.querySelector(".js-poundExchangeRate").innerText);
let dollarExchangeRate = Number(document.querySelector(".js-dollarExchangeRate").innerText);
let francExchangeRate = Number(document.querySelector(".js-francExchangeRate").innerText);

let currencyAmount = document.querySelector(".js-currencyAmount");

let computedValue = document.querySelector(".js-result");
let selectedMark = document.querySelector(".js-currency");
let showResult = document.querySelector(".js-formResult");

let tableElement = document.querySelector(".js-table");
let tableButton = document.querySelector(".js-tableButton");
let buttonText = document.querySelector(".js-buttonText");

tableButton.addEventListener("click", () => {
    let showText = "Wyświetl";
    let hideText = "Ukryj";
    tableElement.classList.toggle("table--hidden");
    buttonText.innerText = buttonText.innerText === showText ? hideText : showText;

});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let selectedCurrency = document.querySelector(".js-selectedCurrency").value;
    let exchangeRate;
    let currencyMark;

    switch (selectedCurrency) {
        case "euro":
            exchangeRate = euroExchangeRate;
            currencyMark = " EUR";
            break;
        case "pound":
            exchangeRate = poundExchangeRate;
            currencyMark = " GBP";
            break;
        case "dollar":
            exchangeRate = dollarExchangeRate;
            currencyMark = " USD";
            break;
        case "franc":
            exchangeRate = francExchangeRate;
            currencyMark = " CHF";
            break;
    };

    let amount = +currencyAmount.value;
    let result = amount / exchangeRate;

    computedValue.innerText = result.toFixed(2);
    selectedMark.innerText = currencyMark;

    let jsResult = document.querySelector(".js-formResult");
    jsResult.innerHTML = `Otrzymasz: ${result.toFixed(2)} ${currencyMark}`;

});