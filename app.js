function remise50() {
  let price50 = document.getElementById("remise50").value;
  let btn50 = document.getElementById("btn50").value;
  let result50 = parseFloat(price50) * parseFloat(btn50);
  if (!isNaN(result50)) {
    document.getElementById("answer").innerHTML = "Réponse : " + result50 + "€";
  }
}

function remise70() {
  let price70 = document.getElementById("remise70").value;
  let btn70 = document.getElementById("btn70").value;
  let result70 = parseFloat(price70) * parseFloat(btn70);
  if (!isNaN(result70)) {
    document.getElementById("answer2").innerHTML =
      "Réponse : " + result70 + "€";
  }
}

function globalFree() {
  let priceFree1 = document.getElementById("remiseFree1").value;
  let priceFree2 = document.getElementById("remiseFree2").value;
  let resultFree = parseFloat(priceFree1) * parseFloat(1 - priceFree2 / 100);
  if (!isNaN(resultFree)) {
    document.getElementById("answerFree").innerHTML =
      "Réponse : " + resultFree.toFixed(2) + "€";
  }
}
