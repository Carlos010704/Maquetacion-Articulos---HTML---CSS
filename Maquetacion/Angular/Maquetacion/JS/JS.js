window.addEventListener("load", function() {
  const item = document.getElementById("article-template");

  const articulo = document.getElementById('articles');

  for (let i = 1; i <= 5; i++) {
    const clonado = item.cloneNode(true);
    clonado.removeAttribute('id')
    const h2 = clonado.getElementsByTagName('h2')[0];
          h2.innerHTML += h2.textContent + ' ' + i;
        articulo.appendChild(clonado);
  }
});


const buscador = document.getElementById('buscador');
const boton = document.getElementById('btnS');

const articulos = document.querySelector('#article-template h2').textContent;

const productos = [articulos]

const filtrar  = (e) => { 
  e.preventDefault();
  console.log(buscador.value);

  const texto = buscador.value.toLowerCase();
  for( let producto of )

  let nombre = productos;

  console.log(nombre);


};

boton.addEventListener('click', filtrar);
