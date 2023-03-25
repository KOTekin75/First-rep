let page = document.querySelector(".body");
let themeButton = document.querySelector(".themeButton");
let condition = true;
let start = 0;
let end = 0;

themeButton.onclick = function() {
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
};


$('.menu_small_icon').click(function(){
    if (condition) {
        open()
    } else {
        close()
    }
});

$('.container').on('touchstart', function(e){
    start = e.originalEvent.touches[0].pageX;
    console.log(start)
});
$('.container').on('touchend', function(e){
    end = e.originalEvent.changedTouches[0].pageX;
    console.log(end)
    if (start < 50) {
        if (end - start >= 100 && condition) {
                open()
            } else if ( start - end >= 100 && !condition) {
                close()
            }
    } else {

    }
}); 


//Функции//

function open(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false;
}

function close(){
    anime({
        targets: '.menu-small',
        translateX: [ '0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}