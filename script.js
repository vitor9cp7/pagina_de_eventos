function abrirLogin(){
    const modal = document.getElementById('janela-login')
    modal.classList.add('abrir')

modal.addEventListener('click',(e) => {
    if(e.target.id == 'fechar' || e.target.id == 'janela-login'){
        modal.classList.remove('abrir')
    }
})
}

let slideIndex = 1;
mostrarSlides(slideIndex);

function maisSlides(n){
    mostrarSlides(slideIndex += n);
}

function atualSlide(n){
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let bolinhas = document.getElementsByClassName("bolinha");
    if (n > slides.length) {
        slideIndex=1
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display= "none";
    }
    for (i=0; i < bolinhas.length; i ++){
        bolinhas[i].className = bolinhas[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block";
    bolinhas[slideIndex-1].className+= " active";
}
