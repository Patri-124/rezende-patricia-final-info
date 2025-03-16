let ultima_posicion_scroll = 0;
let animando = false;

function manejarScroll(posicion_scroll) {
 const img= document.querySelector("#imgcerradura")
  
}

window.addEventListener("scroll", () => {
  ultima_posicion_scroll = window.scrollY;
  if (!animando) {
    requestAnimationFrame(() => {
      manejarScroll(ultima_posicion_scroll);
      animando = false;
    });
    animando = true;
  }
});
