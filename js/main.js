jQuery(document).ready(function($) {


    ///////////////////////////////////////////////////////*/
    /*
    * :: ACCORDION ::
    *
    ///////////////////////////////////////////////////////*/

    // $("#accordion ul li:first").addClass('open');
    // $("#accordion ul li:first h3").addClass('active');
    // $("#accordion ul li").find('div').not("#accordion ul li div:first").hide();
    // $("#accordion ul li h5:first").addClass('active');

    // $("#accordion").on('click', 'h3', function(event) {
    //     event.preventDefault();
    //     $(this).next("div").slideToggle(300);
    //     $(this).toggleClass('active');
    //     $(this).parent("li").toggleClass('open');
    // });



    ///////////////////////////////////////////////////////*/
    /*
    * :: NAV MENU ::
    *
    ///////////////////////////////////////////////////////*/

    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $('#main-nav').stop().slideToggle(300, function() {
            $(this).toggleClass('is-open');
        });
    });



});