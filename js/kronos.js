$(document).ready(function(){
    $(".open_side_nav").click(function(){
        $(".content").addClass("sidebar");
        $(this).addClass("open_side_nav_off");
        $(".cross").removeClass("cross_off");    
    });
    $(".open_side_nav").hover(function(){
        $(this).css("cursor","pointer");
    });
    $(".cross").hover(function(){
        $(this).css("cursor","pointer");
    });
    $(".cross").click(function(){
        $(".content").removeClass("sidebar");
        $(".open_side_nav").removeClass("open_side_nav_off");
        $(this).addClass("cross_off");    
    });        
    
});
        
        
