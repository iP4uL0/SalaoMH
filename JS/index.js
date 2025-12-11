
    let indice = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    document.querySelector('.next').addEventListener('click', function(){
        indice++;
        if(indice > totalSlides - 1) indice = 0;
        atualizarCarrossel();
    });

    document.querySelector('.prev').addEventListener('click', function(){
        indice--;
        if(indice < 0) indice = totalSlides - 1;
        atualizarCarrossel();
    });

    function atualizarCarrossel(){
        slides.style.transform = `translateX(${-indice * 100}%)`;
    }

    // Troca automática a cada 4 segundos
    setInterval(()=> {
        indice++;
        if(indice > totalSlides - 1) indice = 0;
        atualizarCarrossel();
    }, 5000);

