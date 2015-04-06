$(document).ready(function() {
    // open and close settings

    $('.settings .icon').click(function  (e) {
        e.preventDefault();
        if($(this).hasClass('opened')) {

            //do close
            $('.settings').animate({
                left: '-140px'
            }, 'slow');

            $(this).addClass('closed');
            $(this).removeClass('opened');

        }
        else {

            //do open
            $('.settings').animate({
                left: '0px'
            }, 'slow');

            $(this).addClass('opened');
            $(this).removeClass('closed');

        }
    });


    // choose timer options

    $('.ts').click(function  () {
        var toActivate = $(this).attr('data-activate');
        var current = $('#current-active').val();

        // apply
        $('.timer').removeClass(current).addClass(toActivate);
        // change current
        $("#current-active").val(toActivate);

    });

    //theme changer
    $(".color").click(function () {
        var color = $(this).attr("data-style-name");
        $("#styles").attr("href", "css/" + color);
    });


});
