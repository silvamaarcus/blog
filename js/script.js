// Ativando Menu Mobile

// setando classes
const bx = document.querySelector(".bx");
const menu_mobile = document.querySelector(".menu-mobile");
const link_mobile = document.querySelectorAll(".link-menu-mobile");

// criando evento de clique ao menu hamburguer  
bx.addEventListener("click", () => {
  // ao clicar no menu, ativa classe 'active' a classe 'bx', se estiver ativa, será desativada.
  bx.classList.toggle("active");
   // ao clicar no menu, ativa classe 'showmenu' a classe 'menu-mobile', se estiver ativa, será desativada.
  menu_mobile.classList.toggle("showmenu");
});

// criando um laço de tarefas para todos os links
link_mobile.forEach((item) => {
  item.addEventListener("click", () => {
    menu_mobile.classList.remove("showmenu");
    bx.classList.toggle("active");
  });
});
