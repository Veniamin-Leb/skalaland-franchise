
	$(document).on('click', '.rndr_1', function(){
		Fancybox.show([{src: 'assets/img/rndr0.jpeg'}]);
	});
	$(document).on('click', '.rndr_2', function(){
		Fancybox.show([{src: 'assets/img/rndr1.jpeg'}]);
	});
	$(document).on('click', '.rndr_3', function(){
		Fancybox.show([{src: 'assets/img/rndr2.jpeg'}]);
	});
	
	$(document).on('click', '.open_polit', function(e){
		e.preventDefault();
		Fancybox.show([{src: '#modal-polit'}]);
	});
	
	$(document).on('click', '.geo__map', function(e){
		e.preventDefault();
		Fancybox.show([{
			src: '#mapa',
		}]);
	});
	
	
	$(document).on('click', '.hlink', function(e){
		e.preventDefault();
		
		var fof = $(this).attr('href');
		
		var fofset = $(fof).offset().top;
		$('html, body').animate({ scrollTop: fofset }, 1000);
		
	});
	
	$(document).ready(function(e){
		var hash = window.location.hash.substr(1);
		if(hash){
		if($('#'+hash).length){
			var fofset = $('#'+hash).offset().top;
			if(fofset>0){
					$('html, body').animate({ scrollTop: fofset }, 1000);
			}
		}
		}
	});
	
	
	
	$(document).on('click', 'input', function(e){
		$(this).removeClass('invalid');
	});
		
		
	$(document).on('click', '#pup_submit_calc', function(e){
		
		e.preventDefault();
		
		var name = $('#pup_name_calc').val();
		var tel = $('#pup_tel_calc').val();
		var city = $('#pup_city_calc').val();
		var mail = $('#pup_mail_calc').val();
		
		
		var err = false;
		
		if(!name){ $('#pup_name_calc').addClass('invalid'); err = true; } else { $('#pup_name_calc').removeClass('invalid'); }
		if(!tel){ $('#pup_tel_calc').addClass('invalid'); err = true; } else { $('#pup_tel_calc').removeClass('invalid'); }
		if(!city){ $('#pup_city_calc').addClass('invalid'); err = true; } else { $('#pup_city_calc').removeClass('invalid'); }
		if(!mail){ $('#pup_mail_calc').addClass('invalid'); err = true; } else { $('#pup_mail_calc').removeClass('invalid'); }
		
		if(!err){
		
			$.ajax({
				type: "POST",
				data: {
					'name' : name,
					'tel' : tel,
					'city' : city,
					'mail' : mail,
					'square' : square,
					'money' : money,
					'income' : income,
				},
				url: '/wp-content/themes/twentytwentyone/sm.php?' + Math.random(),
				dataType: 'json',
				beforeSend: function(e){
					if(window.aja){ return false;} else { window.aja = true; }
					
				},
				success: function(data) {
					if (data.status == 'ok') {

						Fancybox.show([{
							src: '<p style="padding: 40px;font-size: 1.2em;">Заявка принята.</p>',
							type: 'html',
						}]);
						
						$('#pup_name').val('');
						$('#pup_tel').val('');
						$('#pup_city').val('');
						$('#pup_mail').val('');
						
					}
				},
				complete: function(e){
					window.aja = false;
					
				}
			});
		}
		
	});			
		
	$(document).on('click', '#pup_submit', function(e){
		
		e.preventDefault();
		
		var name = $('#pup_name').val();
		var tel = $('#pup_tel').val();
		var city = $('#pup_city').val();
		var mail = $('#pup_mail').val();
		
		var err = false;
		
		if(!name){ $('#pup_name').addClass('invalid'); err = true; } else { $('#pup_name').removeClass('invalid'); }
		if(!tel){ $('#pup_tel').addClass('invalid'); err = true; } else { $('#pup_tel').removeClass('invalid'); }
		if(!city){ $('#pup_city').addClass('invalid'); err = true; } else { $('#pup_city').removeClass('invalid'); }
		if(!mail){ $('#pup_mail').addClass('invalid'); err = true; } else { $('#pup_mail').removeClass('invalid'); }
		
		if(!err){
		
			$.ajax({
				type: "POST",
				data: {
					'name' : name,
					'tel' : tel,
					'mail' : mail,
					'city' : city
				},
				url: '/wp-content/themes/twentytwentyone/sm.php?' + Math.random(),
				dataType: 'json',
				beforeSend: function(e){
					if(window.aja){ return false;} else { window.aja = true; }
					
				},
				success: function(data) {
					if (data.status == 'ok') {

						Fancybox.show([{
							src: '<p style="padding: 40px;font-size: 1.2em;">Заявка принята.</p>',
							type: 'html',
						}]);
						
						$('#pup_name').val('');
						$('#pup_tel').val('');
						$('#pup_city').val('');
						$('#pup_mail').val('');
						
					}
				},
				complete: function(e){
					window.aja = false;
					
				}
			});
		}
		
	});		
		
	$(document).on('click', '#ftr_submit', function(e){
		
		e.preventDefault();
		
		var name = $('#ftr_name').val();
		var tel = $('#ftr_tel').val();
		var city = $('#ftr_city').val();
		var mail = $('#ftr_mail').val();
		
		var err = false;
		
		if(!name){ $('#ftr_name').addClass('invalid'); err = true; } else { $('#ftr_name').removeClass('invalid'); }
		if(!tel){ $('#ftr_tel').addClass('invalid'); err = true; } else { $('#ftr_tel').removeClass('invalid'); }
		if(!city){ $('#ftr_city').addClass('invalid'); err = true; } else { $('#ftr_city').removeClass('invalid'); }
		if(!mail){ $('#ftr_mail').addClass('invalid'); err = true; } else { $('#ftr_mail').removeClass('invalid'); }
		
		if(!err){
		
			$.ajax({
				type: "POST",
				data: {
					'name' : name,
					'tel' : tel,
					'mail' : mail,
					'city' : city
				},
				url: '/wp-content/themes/twentytwentyone/sm.php?' + Math.random(),
				dataType: 'json',
				beforeSend: function(e){
					if(window.aja){ return false;} else { window.aja = true; }
					
				},
				success: function(data) {
					if (data.status == 'ok') {

						Fancybox.show([{
							src: '<p style="padding: 40px;font-size: 1.2em;">Заявка принята.</p>',
							type: 'html',
						}]);
						
						$('#ftr_name').val('');
						$('#ftr_tel').val('');
						$('#ftr_mail').val('');
						$('#ftr_city').val('');
						
					}
				},
				complete: function(e){
					window.aja = false;
					
				}
			});
		}
		
	});
	
	
	
	// Оп, неактуалочка
	
	// $(document).on('click', '#calculator-format--mini', function(e){
		
		// $("input[name=calculator-square]").val((150).toLocaleString() + ' м2');
		// $('.calculator__square').slider({
			// animate: true,
			// range: 'min',
			// value: 150,
			// min: 150,
			// max: 300,
			// step: 1,
			// slide: function( event, ui ) {
				// $("input[name=calculator-square]").val(ui.value.toLocaleString() + ' м2');
			// },
		// })

		// $("input[name=calculator-money]").val((3000000).toLocaleString() + ' р.');
		// $('.calculator__money').slider({
			// animate: true,
			// range: 'min',
			// value: 3000000,
			// min: 3000000,
			// max: 6000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-money]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })

		// $("input[name=calculator-income]").val((2000000).toLocaleString() + ' р.');
		// $('.calculator__income').slider({
			// animate: true,
			// range: 'min',
			// value: 2000000,
			// min: 2000000,
			// max: 3000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-income]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })
		
	// });	
	
	// $(document).on('click', '#calculator-format--standart', function(e){
		
		// $("input[name=calculator-square]").val((300).toLocaleString() + ' м2');
		// $('.calculator__square').slider({
			// animate: true,
			// range: 'min',
			// value: 300,
			// min: 300,
			// max: 700,
			// step: 1,
			// slide: function( event, ui ) {
				// $("input[name=calculator-square]").val(ui.value.toLocaleString() + ' м2');
			// },
		// })

		// $("input[name=calculator-money]").val((6000000).toLocaleString() + ' р.');
		// $('.calculator__money').slider({
			// animate: true,
			// range: 'min',
			// value: 6000000,
			// min: 6000000,
			// max: 15000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-money]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })

		// $("input[name=calculator-income]").val((3000000).toLocaleString() + ' р.');
		// $('.calculator__income').slider({
			// animate: true,
			// range: 'min',
			// value: 3000000,
			// min: 3000000,
			// max: 10000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-income]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })
		
	// });
	
	// $(document).on('click', '#calculator-format--maxi', function(e){
		
		// $("input[name=calculator-square]").val((700).toLocaleString() + ' м2');
		// $('.calculator__square').slider({
			// animate: true,
			// range: 'min',
			// value: 700,
			// min: 700,
			// max: 1500,
			// step: 1,
			// slide: function( event, ui ) {
				// $("input[name=calculator-square]").val(ui.value.toLocaleString() + ' м2');
			// },
		// })

		// $("input[name=calculator-money]").val((15000000).toLocaleString() + ' р.');
		// $('.calculator__money').slider({
			// animate: true,
			// range: 'min',
			// value: 15000000,
			// min: 15000000,
			// max: 30000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-money]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })

		// $("input[name=calculator-income]").val((10000000).toLocaleString() + ' р.');
		// $('.calculator__income').slider({
			// animate: true,
			// range: 'min',
			// value: 10000000,
			// min: 10000000,
			// max: 18000000,
			// step: 1000,
			// slide: function( event, ui ) {
				// $("input[name=calculator-income]").val(ui.value.toLocaleString() + ' р.');
			// },
		// })
		
	// });
	
	// Оп, снова актуалочка
	
	$(document).on('click', '#calculator-format--mini', function(e){
		
		$("input[name=calculator-square]").val((300).toLocaleString() + ' м2');
		$('.calculator__square').slider({
			value: 300,
		})
		
		$("input[name=calculator-money]").val((10500000).toLocaleString() + ' р.');
		$('.calculator__money').slider({
			value: 10500000,
		})
		
		$('#income').text('от 2 000 000 р. до 3 000 000 р.');
		
	});	
	
	$(document).on('click', '#calculator-format--standart', function(e){
		
		$("input[name=calculator-square]").val((700).toLocaleString() + ' м2');
		$('.calculator__square').slider({
			value: 700,
		})
		
		$("input[name=calculator-money]").val((21000000).toLocaleString() + ' р.');
		$('.calculator__money').slider({
			value: 24500000,
		})
		
		$('#income').text('от 3 000 000 р. до 10 000 000 р.');
		
	});
	
	$(document).on('click', '#calculator-format--maxi', function(e){
		
		$("input[name=calculator-square]").val((1500).toLocaleString() + ' м2');
		$('.calculator__square').slider({
			value: 1500,
		})
		
		$("input[name=calculator-money]").val((52500000).toLocaleString() + ' р.');
		$('.calculator__money').slider({
			value: 45000000,
		})
		
		$('#income').text('от 10 000 000 р. до 18 000 000 р.');
		
	});
	
	// $(document).on('click', '#calculator-format--mini, #calculator-format--standart, #calculator-format--maxi', function(e){
		// e.preventDefault();
	// });
	
	
	
	
	
	