balaozinhoEl = document.querySelector("#balaozinho");
regiaoAnotada = document.querySelectorAll(".regiao-anotada");
for (let i = 0; i < regiaoAnotada.length; i++) {
  regiaoAnotada[i].addEventListener('mouseover', function(e)
  {
    balaozinhoEl.innerHTML = '<h2>' + regiaoAnotada[i].dataset.titulo + '</h2>';
    balaozinhoEl.innerHTML += '<p>' + regiaoAnotada[i].dataset.conteudo + '</p>';
  });
  regiaoAnotada[i].addEventListener('mouseout', function(e)
  {
    balaozinho.innerHTML = '';
  })
}
