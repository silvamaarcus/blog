// pegar os elementos.
const bx = document.querySelector(".bx");
const menu_mobile = document.querySelector(".menu-mobile");
const link_mobile = document.querySelectorAll(".link-menu-mobile");

// add um evento de clique com uma função em callback.
bx.addEventListener("click", () => {
  // add ou remover a classe 'active' na classe 'bx'.
  bx.classList.toggle('active');
  // add ou remover a classe 'showmenu' na classe 'menu-mobile'.
  menu_mobile.classList.toggle('showmenu');
});

// percorrer todos elementos que possuem a classe 'link-menu-mobile'.
link_mobile.forEach((item) => {
  // para cada item encontrado com essa classe, add um evento de clique com uma função callback.
  item.addEventListener('click', () => {
    // callback será responsável por: 
    // remover a classe 'showmenu', assim o menu se fecha na tela.
    menu_mobile.classList.remove('showmenu');
    // remover a classe 'active', assim o simbolo do menu volte ao estado original de hamburguer.
    bx.classList.toggle('active');
  })
})