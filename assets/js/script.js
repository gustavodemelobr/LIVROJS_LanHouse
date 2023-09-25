const frm = document.querySelector("form");
const mostraValor = document.querySelector("#outPreco");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    const preco = Math.ceil(tempo / 15) * valor;

    mostraValor.innerText = `Valor a pagar R$: ${preco.toFixed(2)}`;

    e.preventDefault();
})