balaozinhoEl = document.querySelector("#balaozinho");
regiaoAnotada = document.querySelectorAll(".regiao-anotada");
for (let i = 0; i < regiaoAnotada.length; i++) {
  regiaoAnotada[i].addEventListener('mouseover', function(e)
  {
    balaozinhoEl.innerHTML = '<h2>' + regiaoAnotada[i].dataset.titulo + '</h2>';
    balaozinhoEl.innerHTML += '<p>' + regiaoAnotada[i].dataset.conteudo + '</p>';
    balaozinhoEl.style.display = 'block';
  });
  regiaoAnotada[i].addEventListener('mouseout', function(e)
  {
    balaozinho.innerHTML = '';
    balaozinhoEl.style.display = 'none';
  })
  regiaoAnotada[i].addEventListener('mousemove', function(e)
  {
    balaozinhoEl.style.top = e.pageY + 'px';
    balaozinhoEl.style.left = e.pageX + 'px';
  })
}
