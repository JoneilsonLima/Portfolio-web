const sections = document.querySelectorAll('.js-scroll');
sections[0].classList.add('ativo');


function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < 400) {
            section.classList.add('ativo')
        }
    });
}

window.addEventListener('scroll', animaScroll);
