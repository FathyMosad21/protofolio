function toggleMenu() {
    const btn = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    btn.classList.toggle('open');
    drawer.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('drawer').classList.remove('open');
}


