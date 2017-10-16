theme.forms = {
	checkboxListeners: function(){
		$('.display-element__checkbox.enabled').click(function(){
			$(this).toggleClass('selected');
			var checkbox = $(this).parent().find('input.checkbox--input');
			if ($(checkbox).prop('checked') === true ){
				$(checkbox).prop('checked', false);
			} else {
				$(checkbox).prop('checked', true);
			};
			console.log($(checkbox).prop('checked'));
		});
	},
	radioListeners: function(){
		$('.display-element__radio.enabled').click(function(){
			$(this).toggleClass('on');
			var checkbox = $(this).parent().find('input.radio--input');
			if ($(checkbox).prop('checked') === true ){
				$(checkbox).prop('checked', false);
			} else {
				$(checkbox).prop('checked', true);
			};
			console.log($(checkbox).prop('checked'));
		});
	},
	textInputListeners: function(){
		$('.text--input.enabled').focusin(function(){
			let labelID = $(this).data('label');
			let label = $('#'+labelID);
			$(label).animate({opacity: 1 }, 500)
		}).focusout(function(){
			let labelID = $(this).data('label');
			let label = $('#'+labelID);
			$(label).animate({opacity: 0 }, 500)
		});
	}
};