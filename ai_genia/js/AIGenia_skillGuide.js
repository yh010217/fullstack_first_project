AOS.init();
 
$('.page-indicator > ul > li > a').click(function(e) {
var href = $(this).attr('href');
var targetTop = $(href).offset().top;
$('html').stop().animate({scrollTop:targetTop}, 300);
    
e.preventDefault();
});

function Page__updateIndicatorActive() {
    var scrollTop = $(window).scrollTop();
    
    $($('.page').get().reverse()).each(function(index, node) {
        var $node = $(this);
        var offsetTop = parseInt($node.attr('data-offset-top'));
        
        if ( scrollTop >= offsetTop ) {
        
            $('.page-indicator > ul > li.active').removeClass('active');
       
            
            var currentPageIndex = $node.index();
            $('.page-indicator > ul > li').eq(currentPageIndex).addClass('active');
            
            $('html').attr('data-current-page-index', currentPageIndex);
            
            return false;
        }
    });
}

function Page__updateOffsetTop() {
    $('.page').each(function(index, node) {
        var $page = $(node);
        var offsetTop = $page.offset().top;
        $page.attr('data-offset-top', offsetTop);
    });
    Page__updateIndicatorActive();
}

function Page__init() {
    Page__updateOffsetTop();
}

Page__init();
$(window).resize(Page__updateOffsetTop);
$(window).scroll(Page__updateIndicatorActive);



