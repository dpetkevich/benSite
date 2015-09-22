$( document ).ready(function() {
    mixpanel.track("Page Loaded");

    $('a').click(function(){

    	mixpanel.track("Click",{
    		Button:$(this).html();
    	})

    })

    $('#submitphone').click(function(){

    	mixpanel.track("Click",{
    		Button:"Get Started"
    	})

    })
});