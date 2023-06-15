$( document ).ready(function() {
    $('.header__btn, .home__btn, .room__btn, .formats__btn, .numbers__button, .indicators__btn, .variants__btn')
        .on('click', function(){
            $('#modal-callback').addClass('active')
    })

    $('.calculator__form').on('submit', function (e) {
        e.preventDefault();
		
		$('#pup_city_calc').val($('#calculator-city').val());
		
		//////////////
		////сюдааа////
		
		window.square = $('#calculator-square_val').val();
		window.money = $('#calculator-money_val').val();
		window.income = $('#income').text();
		
		
		
		//////////////

        $('#modal-callback_calc').addClass('active')
    })

    $('.modal__close, .modal__outside').on('click', function () {
        $('.modal').removeClass('active')
    })

    $('.header__toggle').on('click', function () {
        $(this).toggleClass('active')
        $('.header__links').toggleClass('active')
    })

    geoSlick()

    $('.geo__btns button').on('click', function () {
        $('.geo__btns button, .geo__city').removeClass('active')
        $(this).addClass('active')
        $('.geo__city').eq($(this).index()).addClass('active')
        $('.geo__slider').slick('unslick')
        geoSlick()
    })

    formatsSlick()
    variantsSlick()

    $(window).on('resize', function () {
        formatsSlick()
        variantsSlick()
    })

    $('.indicators__slider').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })

	function rangeSCH(r){
		if(r>150 && r<=300){
			$('#calculator-format--mini').prop('checked', true);
			
			$('#income').text('from 24 000 $. to 36 000 $.');
			
		} else if(r>300 && r<=700){
			$('#calculator-format--standart').prop('checked', true);
			
			$('#income').text('from 36 000 $. to  120 000 $.');
			
			
		} else if(r>700 && r<=1500){
			$('#calculator-format--maxi').prop('checked', true);
			
			$('#income').text('from 120 000 $. to 215 000 $.');
			
			
		}
	}

	$("input[name=calculator-square]").val((700).toLocaleString() + ' m2');
    $('.calculator__square').slider({
        animate: true,
        range: 'min',
        value: 700,
        min: 150,
        max: 1500,
        step: 1,

        slide: function(event, ui){
            $("input[name=calculator-square]").val(ui.value.toLocaleString() + ' m2');
			rangeSCH(ui.value);
			
			var svar = (ui.value/10)*350000;

			$(".calculator__money").slider({
			  value: svar
			});
			$("input[name=calculator-money]").val((svar).toLocaleString() + ' $.');
			
        },
    })

	$("input[name=calculator-money]").val((24500000).toLocaleString() + ' $.');
    $('.calculator__money').slider({
        animate: true,
        range: 'min',
        value: 24500000,
        min: 63000,
        max: 630000,
        step: 1000,

        slide: function( event, ui ) {
            $("input[name=calculator-money]").val(ui.value.toLocaleString() + ' $.');
			
			var svar = (ui.value/350000)*10
			rangeSCH(svar);
			$(".calculator__square").slider({
			  value: svar
			});
			$("input[name=calculator-square]").val((svar).toLocaleString() + ' m2');
			
        },
    })


	$("input[name=calculator-income]").val((8500000).toLocaleString() + ' $.');
    $('.calculator__income').slider({
        animate: true,
        range: 'min',
        value: 8500000,
        min: 2000000,
        max: 18000000,
        step: 1000,

        slide: function( event, ui ) {
            $("input[name=calculator-income]").val(ui.value.toLocaleString() + ' $.');
        },
    })

    $('input[name=phone]').each(function () {
        IMask($(this)[0], {mask: '+{7} (000) 000-00-00'})
    })


    // Анимации
    const animItems = document.querySelectorAll('.home__img, .about, .about p, .room__card, .geo, ' +
        '.opening__card, .formats, .formats__table, .indicators, .variants, .step, .footer, .calculator__text,' +
        '.calculator__ul li')

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        setTimeout(() => {
            animOnScroll()
        }, 300)
    }

    function animOnScroll () {
        animItems.forEach((item, index) => {
            const animItemHeight = item.offsetHeight
            const animItemOffset = offset(item).top
            const animStart = 2

            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                item.classList.add('animate')
            }
        })
    }

    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
});

function geoSlick () {
    $('.geo__slider').slick({
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            },
        ]
    })
}

function formatsSlick () {
    if ($(this).width() > 770 && $('.formats__cards.slick-initialized').length > 0) {
        $('.formats__cards').slick('unslick')
    } else if ($(this).width() <= 770 && $('.formats__cards.slick-initialized').length === 0) {
        $('.formats__cards').slick({
            arrows: true,
            variableWidth: true,
            slidesToShow: 1,
            mobileFirst: true,
            touchThreshold: 100,
            responsive: [{
                breakpoint: 770,
                settings: 'unslick'
            }]
        })
    }
}

function variantsSlick () {
    if ($(this).width() > 640 && $('.variants__cards.slick-initialized').length > 0) {
        $('.variants__cards').slick('unslick')
    } else if ($(this).width() <= 640 && $('.variants__cards.slick-initialized').length === 0) {
        $('.variants__cards').slick({
            arrows: true,
            variableWidth: true,
            slidesToShow: 1,
            mobileFirst: true,
            touchThreshold: 100,
            responsive: [{
                breakpoint: 640,
                settings: 'unslick'
            }]
        })
    }
}