
const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');
const teclaTim = document.querySelector('.tecla_tim');
const teclaPuff = document.querySelector('.tecla_puff');
const teclaSplash = document.querySelector('.tecla_splash');
const teclaToim = document.querySelector('.tecla_toim');
const teclaPsh = document.querySelector('.tecla_psh');
const teclaTic = document.querySelector('.tecla_tic');
const teclaTom = document.querySelector('.tecla_tom');

function tocaPom() {
    var audio = document.getElementById('som_tecla_pom');
    audio.play();
}

function tocaClap() {
    var audio = document.getElementById('som_tecla_clap');
    audio.play();
}

function tocaTim() {
    var audio = document.getElementById('som_tecla_tim');
    audio.play();
}

function tocaPuff() {
    var audio = document.getElementById('som_tecla_puff');
    audio.play();
}

function tocaSplash() {
    var audio = document.getElementById('som_tecla_splash');
    audio.play();
}

function tocaToim() {
    var audio = document.getElementById('som_tecla_toim');
    audio.play();
}

function tocaPsh() {
    var audio = document.getElementById('som_tecla_psh');
    audio.play();
}

function tocaTic() {
    var audio = document.getElementById('som_tecla_tic');
    audio.play();
}

function tocaTom() {
    var audio = document.getElementById('som_tecla_tom');
    audio.play();
}

teclaPom.addEventListener('click', tocaPom);
teclaClap.addEventListener('click', tocaClap);
teclaTim.addEventListener('click', tocaTim);
teclaPuff.addEventListener('click', tocaPuff);
teclaSplash.addEventListener('click', tocaSplash);
teclaToim.addEventListener('click', tocaToim);
teclaPsh.addEventListener('click', tocaPsh);
teclaTic.addEventListener('click', tocaTic);
teclaTom.addEventListener('click', tocaTom);
