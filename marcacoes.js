let marcacao1 =  document.querySelector("#pikachu"),
    marcacao2 =  document.querySelector("#electrode"),
    balaox1 = document.querySelector("#balao-x1"),
    balaox2 = document.querySelector("#balao-x2"),
    balaoy1 = document.querySelector("#balao-y1"),
    balaoy2 = document.querySelector("#balao-y2"),
    balaoaltura1 = document.querySelector("#balao-altura1"),
    balaoaltura2 = document.querySelector("#balao-altura2"),
    balaolargura1 = document.querySelector("#balao-largura1"),
    balaolargura2 = document.querySelector("#balao-largura2");
  balaox1.addEventListener('keyup', function()
  {
    marcacao1.style.left = balaox1.value + 'px';
    marcacao1.style.top = balaoy1.value + 'px';
    marcacao1.style.height = balaoaltura1.value + 'px';
    marcacao1.style.width = balaolargura1.value + 'px';
  });
  balaoy1.addEventListener('keyup', function()
  {
    marcacao1.style.left = balaox1.value + 'px';
    marcacao1.style.top = balaoy1.value + 'px';
    marcacao1.style.height = balaoaltura1.value + 'px';
    marcacao1.style.width = balaolargura1.value + 'px';
  });
  balaoaltura1.addEventListener('keyup', function()
  {
    marcacao1.style.left = balaox1.value + 'px';
    marcacao1.style.top = balaoy1.value + 'px';
    marcacao1.style.height = balaoaltura1.value + 'px';
    marcacao1.style.width = balaolargura1.value + 'px';
  });
  balaolargura1.addEventListener('keyup', function()
  {
    marcacao1.style.left = balaox1.value + 'px';
    marcacao1.style.top = balaoy1.value + 'px';
    marcacao1.style.height = balaoaltura1.value + 'px';
    marcacao1.style.width = balaolargura1.value + 'px';
  });
  balaox2.addEventListener('keyup', function()
  {
    marcacao2.style.left = balaox2.value + 'px';
    marcacao2.style.top = balaoy2.value + 'px';
    marcacao2.style.height = balaoaltura2.value + 'px';
    marcacao2.style.width = balaolargura2.value + 'px';
  });
  balaoy2.addEventListener('keyup', function()
  {
    marcacao2.style.left = balaox2.value + 'px';
    marcacao2.style.top = balaoy2.value + 'px';
    marcacao2.style.height = balaoaltura2.value + 'px';
    marcacao2.style.width = balaolargura2.value + 'px';
  });
  balaoaltura2.addEventListener('keyup', function()
  {
    marcacao2.style.left = balaox2.value + 'px';
    marcacao2.style.top = balaoy2.value + 'px';
    marcacao2.style.height = balaoaltura2.value + 'px';
    marcacao2.style.width = balaolargura2.value + 'px';
  });
  balaolargura2.addEventListener('keyup', function()
  {
    marcacao2.style.left = balaox2.value + 'px';
    marcacao2.style.top = balaoy2.value + 'px';
    marcacao2.style.height = balaoaltura2.value + 'px';
    marcacao2.style.width = balaolargura2.value + 'px';
  });
