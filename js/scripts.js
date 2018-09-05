$("#mycarousel").carousel( { interval: 2000 } );
$("#carouselButton").click(function(){
    var carouselButtonSpan = $("#carouselButton").children("span");
    var classSwitch = function(element, before, after){
        element.removeClass(before);
        element.addClass(after);
    }
    var pause = 'fa-pause';
    var play = 'fa-play';
    if (carouselButtonSpan.hasClass(pause)) {
        $("#mycarousel").carousel('pause');
        classSwitch(carouselButtonSpan, pause, play)
    }
    else if (carouselButtonSpan.hasClass(play)){
        $("#mycarousel").carousel('cycle');
        classSwitch(carouselButtonSpan, play, pause)                 
    }
});
$('#reservationModal').on('shown.bs.modal', function (event) {
    $("#defaultButtonToggle").button("toggle");
});