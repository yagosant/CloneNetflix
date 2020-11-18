//jquery
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, //setas para passar de um lado para o outro
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})