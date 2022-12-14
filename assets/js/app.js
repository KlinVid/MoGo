$(function() {

    var header = $('#header');
    var introH = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();


    // добавление в класс header дополнительынй класс fixed
    checkScroll(scrollOffset);

    $(window).on('scroll', function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });


    function checkScroll(scrollOffset){
        if( scrollOffset  >= introH){
            header.addClass('fixed');
        } else {    
            header.removeClass('fixed');
        }
    }


    // Плавный скролл
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

    });


    // активация меню на мобильных устройствах
    $('#nav-toggle').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });

    // отображение и скрытие содержимого контента
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('collapse');

        $this.toggleClass('active');
    });

   
});