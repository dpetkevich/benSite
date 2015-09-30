$( document ).ready(function() {

    mixpanel.track("Page Loaded", {
        "landing_page": $('.parent').attr('id')
    });

    $('a').click(function(){

    	mixpanel.track("Click",{
    		"Button": $(this).html()
    	})

    });

    $('#submitphone').click(function(){

    	mixpanel.track("Click",{
    		"Button":"Get Started",
    		"Content": $('#phone_number').val()
    	})

    });
});