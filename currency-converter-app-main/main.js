const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
  firstOption.addEventListener("change", exchange);
  secondOption.addEventListener("change", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());

  if (!amount || amount <= 0) {
    resultInput.value = "0.000";
    return;
  }

  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      if (result !== null) {
        resultInput.value = result.toFixed(3);
      } else {
        resultInput.value = "Hata!";
      }
    });
}
