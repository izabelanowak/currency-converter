{
    const toggletable = () => {
        const tableElement = document.querySelector(".js-table");
        const buttonText = document.querySelector(".js-buttonText");
        const showText = "Wyświetl";
        const hideText = "Ukryj";

        tableElement.classList.toggle("table--hidden");
        buttonText.innerText === showText ? hideText : showText;
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
                return amount / exchangeRate;
            case "GBP":
                exchangeRate = poundExchangeRate;
                return amount / exchangeRate;
            case "USD":
                exchangeRate = dollarExchangeRate;
                return amount / exchangeRate;
            case "CHF":
                exchangeRate = francExchangeRate;
                return amount / exchangeRate;
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-currencyAmount");
        const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");

        const amount = +amountElement.value;
        const currency = selectedCurrencyElement.value;

        const result = convertCurrency(amount, currency);
        updateResultText(result, currency);
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-formResult");

        resultElement.innerHTML = `Otrzymasz: ${result.toFixed(2)} ${currency}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const tableButtonElement = document.querySelector(".js-tableButton");

        tableButtonElement.addEventListener("click", toggletable);
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}