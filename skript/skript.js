$(document).ready(function(){

    $(".imgggg").click(function(){
        $(".menu_search").removeClass('menu_search--active');
    });
    $('.menu_search .image').click(function(){
        $(".menu_search").addClass('menu_search--active');
    });



    $(".head_link .popap_menu").slideDown(0);
    $(".menu").click(function(){
        $('.head_link').toggleClass("head_link--active");
        $(".head_link .popap_menu").slideToggle(500);

    });

    $(".button_slide-hover--block").slideUp(0);
    $('.button_slide').click(function(){
        $('.menu_mobile').toggleClass("menu_mobile--act");
        $(".menu_mobile .button_slide-hover--block").slideToggle(500);
    });

    $('.popap_menu').slideUp(0);
    $(".menu").click(function(){
        event.stopPropagation();
    })
    $(window).click(function(){
        $('.head_link').removeClass("head_link--active") ;
        $(".head_link .popap_menu").slideUp(500);
    });
    $('.popap_menu .left li').hover(function(){
        $('.right').toggleClass("right--active")
    });

    $('.menu_mobile').slideUp(0);
    $(".menu_burger").click(function(){
        $('.menu_burger').toggleClass("menu_burger--active")
        $('.menu_mobile').slideToggle(500)
    });

    $('.client_slider').owlCarousel({
        items:6,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:false,
        loop:true,
        dots:true,
        dotsEach: 2,
        margin: 90,
        responsive:{ 
            0:{
                items: 2
            },
            517:{
                items: 3
            },
            694:{
                items: 4
            },
            831:{
                items: 5
            },
            1170:{
                items:6
            }
        }
    });
    $('.about_card-contener-mobile ').slideUp(0);
    $('.about_card-contener-mobile-fal').slideDown(0);
    $('.about_card-contener-pech').click(function(){
        $('.about_card-contener-mobile ').slideUp(0)
        $('.about_body-top').removeClass("about_body-top--act");
        $('.about_card-contener-falc').removeClass("about_card-contener-falc--active");
        $('.about_card-contener-brosh').removeClass("about_card-contener-brosh--active");
        $(this).addClass("about_card-contener-pech--active").next().slideDown(500);
        $('.about_body-top-pech').addClass('about_body-top--act');
    })
    $('.about_card-contener-falc').click(function(){
        $('.about_card-contener-mobile ').slideUp(0);
        $('.about_body-top').removeClass("about_body-top--act");
        $('.about_card-contener-falc').removeClass("about_card-contener-falc--active");
        $('.about_card-contener-pech').removeClass("about_card-contener-pech--active");
        $('.about_card-contener-brosh').removeClass("about_card-contener-brosh--active");
        $(this).addClass("about_card-contener-falc--active").next().slideDown(500);
        $('.about_body-top-falc').addClass('about_body-top--act');
    })
    $('.about_card-contener-brosh').click(function(){
        $('.about_card-contener-mobile ').slideUp(0);
        $('.about_body-top').removeClass("about_body-top--act");
        $('.about_card-contener-falc').removeClass("about_card-contener-falc--active");
        $('.about_card-contener-pech').removeClass("about_card-contener-pech--active");
        $(this).addClass("about_card-contener-brosh--active").next().slideDown(500);
        $('.about_body-top-brosh').addClass('about_body-top--act');
    })

    
    $('.using_mobile-cards-inf').slideUp(0);
    $('.using_mobile-cards-card').click(function(){
        $('.using_mobile-cards-inf').slideUp(500);
        $('.using_mobile-cards-card').removeClass('using_mobile-cards-card--active');
        $(this).addClass("using_mobile-cards-card--active");
        $(this).next().slideDown(500);
    });



    $(".reviews_slider").owlCarousel({
        center: true,
        items:2,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:false,
        loop:true,
        dots:true,
        dotsEach: 2,
        margin: 40,
        responsive:{ 
            0:{
                items: 1,
                margin: 0,
            },
            975:{
                items: 2
            }
        }
    });



    $('.about-team_slider').owlCarousel({
        items:4,
        autoplay: true,
        autoplayTimeout: 5000,
        nav:false,
        loop:true,
        dotsEach: 2,
        margin: 20,
        responsive:{ 
            0:{
                items: 1
            },
            502:{
                items: 2
            },
            761:{
                items: 3
            },
            911:{
                items: 4
            }
        }
    });
    $('.about-team_slider-next').on('click', function () {
        $('.about-team_slider .owl-nav .owl-prev').click();
    });;
    $('.about-team_slider-prev').on('click', function () {
        $('.about-team_slider .owl-nav .owl-next').click();
    });


    $(function(){
        $('input[type=file]').each(function() {
          var $input = $(this),
              $label = $input.next('.js-labelFile'),
              labelVal = $label.html();
    
          $input.hide();
          $input.on('change', function(element) {
              var fileName = '';
              if (element.target.value) fileName = element.target.value.split('\\').pop();
              fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
          });
        });
    });

    $(".using_right-cards_card-str").click(function(){
        $('.using_right-text .bottom').removeClass("bottom--act");
        $('.using_right-cards_card').removeClass("using_right-cards_card--act");
        $('.using_image').removeClass("using_image--act");
        $(this).addClass("using_right-cards_card--act").show(500);
        $('.using_image-str').addClass("using_image--act").show(500);
        $(".using_right-text .bottom-str").addClass("bottom--act").show(500);
    })
    $(".using_right-cards_card-diz").click(function(){
        $('.using_right-text .bottom').removeClass("bottom--act");
        $('.using_right-cards_card').removeClass("using_right-cards_card--act");
        $('.using_image').removeClass("using_image--act");
        $(this).addClass("using_right-cards_card--act").show(500);
        $('.using_image-diz').addClass("using_image--act").show(500);
        $(".using_right-text .bottom-diz").addClass("bottom--act").show(500);
    })
    $(".using_right-cards_card-arhitec").click(function(){
        $('.using_right-text .bottom').removeClass("bottom--act");
        $('.using_right-cards_card').removeClass("using_right-cards_card--act");
        $('.using_image').removeClass("using_image--act");
        $(this).addClass("using_right-cards_card--act").show(500);
        $('.using_image-arhitec').addClass("using_image--act").show(500);
        $(".using_right-text .bottom-arhitec").addClass("bottom--act").show(500);
    })

    $('.services_card-main').hover(function(){
        // $('.services_card-main').removeClass('services_card-main--active ')
        $(this).toggleClass('services_card-main--active ').show(500);
    })



    $('.printing-queshion_cards-left-text').on("click", function(){
        $('.printing-queshion_cards-left-text').removeClass("printing-queshion_cards-left-title--active");
        $(this).addClass("printing-queshion_cards-left-title--active");
    })


    $('.printing-queshion_cards-right-card .slide_printing').slideUp(0);
    $('.printing-queshion_cards-right-card .titles').click(function(){
        $('.plus_contener').removeClass("plus_contener--active");
        $('.printing-queshion_cards-right-card .slide_printing').slideUp(500);
        $(this).next().slideDown(500);
        $(this).next().next().addClass("plus_contener--active");
    });


    $(".printing-order_tab-text").click(function(){
        $(".printing-order_tab-text").removeClass("printing-order_tab-text--active");
        $(this).addClass("printing-order_tab-text--active");
    })

    
    $('.printing-order_form-left-blocks-right-slider').slider({
        range: "max",
        min: 1,
        max: 10,
        value: 1,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
        }
    });  
    $( ".printing-order_form-left-blocks-left-speed" ).selectmenu();
    
});

