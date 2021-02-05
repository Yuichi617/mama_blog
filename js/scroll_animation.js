'use strict'

{
    const content = document.querySelectorAll('.content');

    function scrollAnimation() {
        for(var i=0; i < content.length; i++){
            var triggerMargin = 300;
            if(window.innerHeight > content[i].getBoundingClientRect().top + triggerMargin){
                content[i].classList.add('show');
            }
        }
    }

    window.addEventListener('load', scrollAnimation);
    window.addEventListener('scroll', scrollAnimation);
}