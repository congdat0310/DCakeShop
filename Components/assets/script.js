$(document).ready(function() {
    $("#myimage").imagezoomsl({

        zoomrange: [1, 10],
        zoomstart: 4,

        magnifiereffectanimate: 'fadeIn',

    });
    $('.thumb').click(function() {
        var vm = this;
        $('#myimage').fadeOut(200, function() {
            $(this).attr("src", $(vm).attr("src")).fadeIn(200);
        });
        return false;
    });
});