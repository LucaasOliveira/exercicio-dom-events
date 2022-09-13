/* Desenvolva aqui a rotina */
ler();

const valueBase = document.querySelector("#valor_base");
const valueTransport = document.querySelector("#valor_transporte");
const valueAlimentation = document.querySelector("#valor_alimentacao");
let valueRevenue = document.querySelector("#valor_receita");

const autoDiscount = document.querySelector("#valor_automovel");
const faults = document.querySelector("#faltas");
let totalDiscounts = document.querySelector("#valor_descontos");

let total = document.querySelector("#valor_total");

const btnCalc = document.querySelector("#btn_calcular");
const listInputs = document.querySelectorAll("input");

btnCalc.addEventListener("click", totalizar);

listInputs.forEach((element) => {
    element.addEventListener("change", totalizar);
});

function totalizar() {

    const totalinputsRevenue = parseFloat(valueBase.value) + parseFloat(valueTransport.value) + parseFloat(valueAlimentation.value);
    valueRevenue.value = totalinputsRevenue;

    const totalInputsDiscounts = parseFloat(autoDiscount.value) - (faults.value);
    totalDiscounts.value = totalInputsDiscounts;

    total.value = totalinputsRevenue + totalInputsDiscounts;

    salvar();
};

function salvar() {

    let inputsCalc = document.querySelectorAll("input");

    for (const input of inputsCalc) {
        localStorage.setItem(input.id, input.value);
    };
};

function ler() {

    let inputsCalc = document.querySelectorAll("input");

    for (const input of inputsCalc) {
        input.value = localStorage.getItem(input.id);
    };
};
