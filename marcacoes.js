let marcacao =  document.querySelector("#pikachu"),
    botaoEl = document.querySelector("#definir-regiao"),
    balaox = document.querySelector("#balao-x"),
    balaoy = document.querySelector("#balao-y"),
    balaoaltura = document.querySelector("#balao-altura"),
    balaolargura = document.querySelector("#balao-largura");
  botaoEl.addEventListener('click', function()
  {
    marcacao.style.left = balaox.value + 'px';
    marcacao.style.top = balaoy.value + 'px';
    marcacao.style.height = balaoaltura.value + 'px';
    marcacao.style.width = balaolargura.value + 'px';
  });
