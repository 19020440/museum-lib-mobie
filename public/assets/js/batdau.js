$(document).ready(function() {
    $('.main-top .bi-patch-question-fill').click(clickGuide);
    $('.overlay-main').click(off);

    $('.btn-start').click(clickStart)

})



function clickGuide(e) {
    console.log(`click`);
    on();
}

function on() {
    $(".overlay-main").css('display', 'block');
}

function off() {
    $(".overlay-main").css('display', 'none');
}

function clickStart() {
    window.location.href = './man1-base.html';
}