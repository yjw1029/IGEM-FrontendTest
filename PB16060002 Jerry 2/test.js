var div = $(document);
div.ready(function(){
    $("img").click(function(){
        $("#out").fadeOut("1000");
        $("#up").delay(500).animate({
            top: '30%',
            fontSize: '5vw',
            left: '10%'
        });
        $("#in").delay(1500).fadeIn("1000");
    });
});
