const  btnMobile = document.getElementById('btn-mobile'); //declarando a variavel que ira buscar o id no documento html, ou seja, manipulando o dom.


function toggleMenu(event) {
     // criando a funcao do clique do botao
     if (event.type === 'touchstart') event.preventDefault; 
    const  nav = document.getElementById('nav'); // chamando o id nav no html.
    const active = nav.classList.contains('active');
    nav.classList.toggle('active'); // adicionando classe via javascript.
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');;
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}


btnMobile.addEventListener('click', toggleMenu) //Adicionando um evento ao botao, apos o ato do clique. No final, ele adiciona uma classe, apenas quando ocorre o clique sobre o elemento selecionado, no caso, id do 'button'.

btnMobile.addEventListener('touchstart', toggleMenu); //adicionando um evento ao toque via smartphone ou table via, porém, gera um problema de ativar dois eventos, que deve ser corrigido a partir do preventDefault.