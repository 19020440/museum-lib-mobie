function on() {
    $(".overlay-main").css('display', 'block');
}

function off() {
    $(".overlay-main").css('display', 'none');
}

$(document).ready(function() {
    $('.container-home-and-question .bi-house-fill').click(clickHome);
    $('.container-back_button').click(clickGoBack);
    $('.btn-scan').click(clickScan);

    $('.main-top .bi-patch-question-fill').click(clickGuide);
    $('.overlay-main').click(off);



})

function clickGuide(e) {
    console.log(`click`);
    on();
}

function clickHome() {
    window.location.href = './batdau.html';
}

function clickGoBack() {
    history.back();
}

function clickScan() {
    window.location.href = './quetqr.html';

}