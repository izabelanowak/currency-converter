{
    const formElement = document.querySelector(".js-form");



    const currencyAmount = document.querySelector(".js-currencyAmount");

    const computedValue = document.querySelector(".js-result");
    const selectedMark = document.querySelector(".js-currency");
    const showResult = document.querySelector(".js-formResult");


    const tableButton = document.querySelector(".js-tableButton");



    const toggletable = () => {
        const tableElement = document.querySelector(".js-table");
        const buttonText = document.querySelector(".js-buttonText");
        const showText = "Wyświetl";
        const hideText = "Ukryj";

        tableElement.classList.toggle("table--hidden");
        buttonText.innerText = buttonText.innerText === showText ? hideText : showText;
    };
    const convertCurrency = (amount) => {
        const euroExchangeRate = document.querySelector(".js-euroExchangeRate").innerText;
        const poundExchangeRate = Number(document.querySelector(".js-poundExchangeRate").innerText);
        const dollarExchangeRate = Number(document.querySelector(".js-dollarExchangeRate").innerText);
        const francExchangeRate = Number(document.querySelector(".js-francExchangeRate").innerText);
        const selectedCurrency = document.querySelector(".js-selectedCurrency").value;
        let exchangeRate;
        let currencyMark;

        switch (selectedCurrency) {
            case "euro":
                exchangeRate = euroExchangeRate;
                currencyMark = " EUR";
                return amount / exchangeRate;
            case "pound":
                exchangeRate = poundExchangeRate;
                currencyMark = " GBP";
                return amount / exchangeRate;
            case "dollar":
                exchangeRate = dollarExchangeRate;
                currencyMark = " USD";
                return amount / exchangeRate;
            case "franc":
                exchangeRate = francExchangeRate;
                currencyMark = " CHF";
                return amount / exchangeRate;
        };


        const result = amount / exchangeRate;
    };

    tableButton.addEventListener("click", toggletable);

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = +currencyAmount.value;

        let result = convertCurrency(amount);
        computedValue.innerText = result.toFixed(2);
        selectedMark.innerText = currencyMark;

        const jsResult = document.querySelector(".js-formResult");
        jsResult.innerHTML = `Otrzymasz: ${result.toFixed(2)} ${currencyMark}`;

    });


}