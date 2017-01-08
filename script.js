$(document).ready(function() {
	$('.hide').hide();
	$('#requestMeeting').click(function() {
		if ( $('#doNotRequestMeeting').css('visibility') == 'hidden' ) {
			$('#doNotRequestMeeting').css('visibility','visible');
		}
		
		$('#requestMeeting').hide();
		$('#doNotRequestMeeting').show();
		$('#requestMeeting').hide();
		$('#doNotRequestMeeting').show();
		$('.hide').slideToggle(400);
		return false;
	});
	
	$('#doNotRequestMeeting').click(function() {
		$('#doNotRequestMeeting').css('visibility','hidden');
		$('#requestMeeting').show();
		$('#doNotRequestMeeting').hide();
		$('.hide').slideToggle(400);
		$('#meetTime').val("");
		$('#meetDate').val("");
		$('#location').val("");
		return false;
	});
	
	$('#MySubmit').click(function() {
		if($('#fName').val() == "" || $('#fName').val().length < 2 || $('#fName').val() == null) {
			alert('Please enter your first name.');
			$('#fName').css('backgroundColor', 'yellow');
			return false;
		}
		if($('#lName').val() == "" || $('#lName').val().length < 2 || $('#lName').val() == null) {
			alert("Please enter your last name.");
			$('#lName').css('backgroundColor', 'yellow');
			return false;
		}
		if($('#email').val() == "" || $('#email').val().length < 2) {
			alert('Please enter your email.');
			$('#email').css('backgroundColor', 'yellow');
			return false;
		}
		if($('#doNotRequestMeeting').css('visibility') == 'visible') {
			if($('#meetDate').val() == null || $('#meetDate').val() == "" || $('#meetDate').val().length < 2) {
				alert('Please enter a valid date.');
				alert($('#meetDate').val());
				$('#meetDate').css('backgroundColor', 'yellow');
				return false;
			}
			else {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth();
				var day = date.getDay();
				if($('#meetDate').val().getFullYear() < year) {
					alert('Please enter valid year.');
					$('#meetDate').css('backgroundColor', 'yellow');
					return false;
				}
				if($('#meetDate').val().getFullYear() == year && $('#meetDate').getMonth() < month) {
					alert('Please enter valid month.');
					$('#meetDate').css('backgroundColor', 'yellow');
					return false;
				}
				if($('#meetDate').val().getFullYear() == year && $('#meetDate').getMonth() == month && $('#meetDate').getDay() < day) {
					alert('Please enter day after today.');
					$('#meetDate').css('backgroundColor', 'yellow');
					return false;
				}
			}
			if($('#meetTime').val() == null || $('#meetTime').val() == "" || $('#meetTime').val().length < 2) {
				alert('Please enter a valid time.');
				$('#meetTime').css('backgroundColor', 'yellow');
				return false;
			}
			else {
				if($('#meetTime').val().getHours() < hour) {
					alert('Please enter valid hour.');
					$('#meetTime').css('backgroundColor', 'yellow');
					return false;
				}
				if($('#meetTime').val().getHours() == hour && $('#meetDate').val().getMinutes() < minute) {
					alert('Please enter valid minute.');
					$('#meetTime').css('backgroundColor', 'yellow');
					return false;
				}
			}
			if($('#location').val() == null || $('#location').val() == "" || $('#location').val().length < 2) {
				alert('Please enter the location.');
				return false;
			}
		}
		return true;
	});
	
	$('#MyLocation').click(function() {
		var source = $('#location').val();
		if(source == "" || source == null) {
			alert('Please enter the location.');
			return false;
		}
		else {
			$('#location').val('http://www.google.com/search?q=' + source);
		}
		return true;
	});
	
	$('#MyClear').click(function() {
		$('#fName').val("");
		$('#lName').val("");
		$('#email').val("");
		$('#meetDate').val("");
		$('#meetTime').val("");
		$('#location').val("");
		$('#message').val("");
	});
	
	$('.gallery #item1 .mainIconImage').click(function() {
		$('#display').html($('#item1 span').html());
		$('.gallery #item1 .mainIconImage').css('border', '2px solid #019');
        $('.gallery #item2 .mainIconImage').css('border', 'none');
        $('.gallery #item3 .mainIconImage').css('border', 'none');
        $('.gallery #item4 .mainIconImage').css('border', 'none');
		return false;
	});
	
	$('.gallery #item2 .mainIconImage').click(function() {
		$('#display').html($('#item2 span').html());
		$('.gallery #item1 .mainIconImage').css('border', 'none');
		$('.gallery #item2 .mainIconImage').css('border', '2px solid #019');
		$('.gallery #item3 .mainIconImage').css('border', 'none');
		$('.gallery #item4 .mainIconImage').css('border', 'none');
		return false;
	});
	
	$('.gallery #item3 .mainIconImage').click(function() {
		$('#display').html($('#item3 span').html());
		$('.gallery #item1 .mainIconImage').css('border', 'none');
        $('.gallery #item2 .mainIconImage').css('border', 'none');
        $('.gallery #item3 .mainIconImage').css('border', '2px solid #019');
        $('.gallery #item4 .mainIconImage').css('border', 'none');
		return false;
	});
	
	$('.gallery #item4 .mainIconImage').click(function() {
		$('#display').html($('#item4 span').html());
		$('.gallery #item1 .mainIconImage').css('border', 'none');
        $('.gallery #item2 .mainIconImage').css('border', 'none');
        $('.gallery #item3 .mainIconImage').css('border', 'none');
        $('.gallery #item4 .mainIconImage').css('border', '2px solid #019');
		return false;
	});
	
	$(document).on('click', '#WEB1', function() {
	    var url = $('#data').attr('data');
        if(url != null || url != " ") {
            window.open(url);
            return true;
        }
        return false;
	});
	
	$(document).on('click', '#WEB2', function() {
	    var url = $('#data2').attr('data');
        if(url != null || url != " ") {
            window.open(url);
            return true;
        }
        return false;
	});
});