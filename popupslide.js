$(document).ready(function () {

$('#openPopup').click(function () {
    $('#popupContainer').fadeIn();
    $('#popup').fadeOut();
});

$("#getStarted").click(function () {
    $("#secondScreen").fadeIn();
    $("#popupContainer").fadeOut();
})

var $slides = $('.Dashboard');
var slideCount = $slides.length;
var currentSlide =0;

$($slides[currentSlide]).addClass('active');

var $dots = $('.dots');
for(var i=0; i<slideCount; i++){
    $dots.append('<span class="dot"></span>');
}
$($dots.find('.dot')[currentSlide]).addClass('active');


function showSlide(index){
     $($slides[currentSlide]).removeClass('active')
     $($dots.find('.dot')[currentSlide]).removeClass('active');
     currentSlide = index;
     $($slides[currentSlide]).addClass('active');
     $($dots.find('.dot')[currentSlide]).addClass('active');
   

    if(currentSlide === slideCount-1){
        $('.next').hide();
        $('.close').show();
    }else{
        $('.next').show();
        $('.close').hide()
    }

    if (currentSlide === 0) {
        $('.prev').addClass('hidden'); 
    } else {
        $('.prev').removeClass('hidden'); 
    }
}

$('.next').click(function(){
    var index = currentSlide + 1;
    if(index >= slideCount){
        index = 0;
    }
    showSlide(index);          
})

$('.prev').click(function(){  
    var index = currentSlide-1;
    if(index<0){
        index = slideCount - 1;
    }
    showSlide(index);
})

$('.dot').click(function(){
    var index = $(this).index();
    showSlide(index);
})


$('.close').click(function(){
   $("#secondScreen").fadeOut();
   showSlide(index = 0);
   $("#popupContainer").fadeIn();
})


$("#getStarted").click(function () {
    showSlide(currentSlide);
    $("#popupContainer").fadeOut();
    $("#secondScreen").fadeIn();
});
});