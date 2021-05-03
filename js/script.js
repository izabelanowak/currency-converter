{
    const toggleTable = () => {
        const tableElement = document.querySelector(".js-table");
        const buttonText = document.querySelector(".js-buttonText");
        const showText = "Wyświetl";
        const hideText = "Ukryj";

        tableElement.classList.toggle("table--hidden");
        buttonText.innerText = tableElement.classList.contains("table--hidden") ? showText : hideText;
    };

    const convertCurrency = (amount, currency) => {
        const euroExchangeRate = +document.querySelector(".js-euroExchangeRate").innerText;
        const poundExchangeRate = +document.querySelector(".js-poundExchangeRate").innerText;
        const dollarExchangeRate = +document.querySelector(".js-dollarExchangeRate").innerText;
        const francExchangeRate = +document.querySelector(".js-francExchangeRate").innerText;

        switch (currency) {
            case "EUR":
                return amount / euroExchangeRate;
            case "GBP":
                return amount / poundExchangeRate;
            case "USD":
                return amount / dollarExchangeRate;
            case "CHF":
                return amount / francExchangeRate;
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

        tableButtonElement.addEventListener("click", toggleTable);
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}