
        $('.owl-one').owlCarousel({
            loop: true,
            margin: 10,
            center:true,
            dots:false,
            //dotsEach:true,
            autoplay:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
            
        });
        var owl = $('.owl-one');
        owl.owlCarousel();

        
        $('.myowl').owlCarousel({
            loop:true,
            margin:10,
            center:true,
            nav:false,
            dots:false,
            autoplay:true,
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
        });
        var owl1 = $('.myowl');
        owl1.owlCarousel();    
    
        var img = ["w1.png", "w2.png", "w3.png", "w4.png"]; 
        var i = 0;
        function slide() {
            //alert("Hi");
            var div = document.getElementById("slider");
            div.innerHTML="<img src='img/" + img[i]+ "' alt='' class='w-75 mx-lg-5 my-2' style='transition:5s ease-in-out;'/>";
            div.style.transition="1s ease-in";
            div.style.transitionDelay="5s";
            i++;
            if (img.length == i) {
                i = 0;
            }
            window.setTimeout("slide()", 2000);
        }


        $('.owl_testi').owlCarousel({
            loop: true,
            margin: 10,
            center:true,
            dots:false,
            //dotsEach:true,
            autoplay:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
            
        });
        var owl2 = $('.owl_testi');
        owl2.owlCarousel();