	$(function() {
		var questionLabel = $( "#questionLabel" ),
		instructions = $( "#instructions" ),
		allFields = $( [] ).add( questionLabel ).add( instructions );

	$( "#dialog-form" ).dialog({
		autoOpen: false,
		height: 300,
		width: 350,
		buttons: { 
			"Add question": function () {
				$( "#participant-form" ).append( "<li class=\"question\">" +
					"<p>" + questionLabel.val() + "</p>" +
					"</li>" );
					$( this ).dialog( "close" );
			}, 
			Cancel: function() {
				$( this ).dialog( "close");
			},
		},
		close: function() {
			allFields.val( "").removeClass( "ui-state-error" );
		}
	});

	$( ".add-item" )
		.button()
		.click(function() {
			$( "#dialog-form" ).dialog( "open" );
		});
	});