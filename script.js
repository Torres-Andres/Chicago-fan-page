$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").fadeOut()
    });
    $(".btn2").click(function(){
        $("p").fadeIn();
    });
});
$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".box").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $(".box").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $(".box").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $(".box").finish().animate({
            top: "+=50"
        });
        break;
    }
});