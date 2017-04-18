(function( $ ){
	$.fn.extend({
		bai_windows:function(){
			$( this ).show();
			$( '.m-windows-con-box', this ).css('opacity','0.1');
			$( '.m-windows-con-box', this ).animate({
				'opacity':'1'
			},300);
			
			$( '.m-windows-close', this ).click(function(){
				$( this ).parent().parent().hide();	
			});
		}
	});
	
	$(document).on('click','[bai-click]',function(){
		var $this = $( this );
		if( $('#'+tag).index() == -1 ){
			var tag = $this.attr('bai-click');
			var title = $this.attr('bai-title');
			var con = $this.attr('bai-con');
			$('body').append('<div id="'+ tag +'" class="m-windows-box"><div class="m-windows-bg"></div><div class="m-windows-con-box"><i class="m-windows-close"></i><h3 class="m-windows-title">'+title+'</h3><div class="m-windows-con">'+con+'</div></div></div>');
		};
		$('#'+tag).bai_windows();
	});


	function updateValidate(elementId, selectorStr) {
		var element = $(elementId).find(selectorStr);
		var inputValue = parseFloat(element.val());
		var btnElment = $(elementId).find("#withdrawConfirmBtn");
		var limitValueStr = element.attr("limitValue");
		
		if(element.val() == null || element.val()== ""  || limitValueStr == null) {
			btnElment.attr("disabled", "disabled");
			return;
		}
		var limitValue = parseFloat(element.attr("limitValue").replace(/,/ig,""));
		var realNum =  parseFloat(btnElment.attr("data-realNum").replace(/,/ig,""));
		var redeemType = btnElment.attr("data-redeemType");
		if(redeemType == 'fast' && btnElment.attr("data-realNum") != null && btnElment.attr("data-realNum") != "" && realNum <= 0) {
			btnElment.attr("disabled", "disabled");
			return;
		}

		if(inputValue > limitValue) {
			btnElment.attr("disabled", "disabled");
		} else {
			btnElment.removeAttr("disabled");
		}
	}

	$(document).on('focus focusout keyup', '#asset-withdraw-home1 [update-validate=amount]', function() {
		updateValidate('#asset-withdraw-home1', '[update-validate]');
	});

	$(document).on('focus focusout keyup', '#asset-withdraw-home2 [update-validate=amount]', function() {
		updateValidate('#asset-withdraw-home2', '[update-validate]');
	});


})( jQuery );