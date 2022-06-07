const btnmobile = document.getElementById('btn-mobile');

function togglemenu(event) {
    if (event.type === 'touchstart') event.preventdefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu');
    }
}

btnmobile.addEventListener('click', togglemenu)
btnmobile.addEventListener('touchstart', togglemenu)
