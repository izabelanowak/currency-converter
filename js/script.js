{
    const toggletable = () => {
        const tableElement = document.querySelector(".js-table");
        const buttonText = document.querySelector(".js-buttonText");
        const showText = "Wyświetl";
        const hideText = "Ukryj";

        tableElement.classList.toggle("table--hidden");
        buttonText.innerText = buttonText.innerText === showText ? hideText : showText;
    };

    const convertCurrency = (amount, currency) => {
        const euroExchangeRate = Number(document.querySelector(".js-euroExchangeRate").innerText);
        const poundExchangeRate = Number(document.querySelector(".js-poundExchangeRate").innerText);
        const dollarExchangeRate = Number(document.querySelector(".js-dollarExchangeRate").innerText);
        const francExchangeRate = Number(document.querySelector(".js-francExchangeRate").innerText);

        let exchangeRate;

        switch (currency) {
            case "EUR":
                exchangeRate = euroExchangeRate;
                break;
            case "GBP":
                exchangeRate = poundExchangeRate;
                break;
            case "USD":
                exchangeRate = dollarExchangeRate;
                break;
            case "CHF":
                exchangeRate = francExchangeRate;
                break;
        };

        return amount / exchangeRate;
    };
    const formElement = document.querySelector(".js-form");
    const currencyAmount = document.querySelector(".js-currencyAmount");
    const computedValue = document.querySelector(".js-result");
    const selectedCurrency = document.querySelector(".js-selectedCurrency");
    const tableButton = document.querySelector(".js-tableButton");

    tableButton.addEventListener("click", toggletable);

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = +currencyAmount.value;
        const currency = selectedCurrency.value;

        let result = convertCurrency(amount, currency);
        computedValue.innerText = result.toFixed(2);

        const jsResult = document.querySelector(".js-formResult");
        jsResult.innerHTML = `Otrzymasz: ${result.toFixed(2)} ${currency}`;
    });


}