// $('.page-indicator > ul > li > a').click(function(e) {
//     var href = $(this).attr('href');
    
//     var targetTop = $(href).offset().top;
    
//     /*
//     // 한번에 가도록 하는 방법
//     $(window).scrollTop(targetTop);
//     */
    
//     $('html').stop().animate({scrollTop:targetTop}, 300);
    
//     e.preventDefault();
// });

// function Page__updateIndicatorActive() {
//     var scrollTop = $(window).scrollTop();
    
//     // 역순으로 검색해야 편하다
//     $($('.page').get().reverse()).each(function(index, node) {
//         var $node = $(this);
//         var offsetTop = parseInt($node.attr('data-offset-top'));
        
//         if ( scrollTop >= offsetTop ) {
//             // 기존 녀석에게 활성화 풀고
//             $('.page-indicator > ul > li.active').removeClass('active');
//             // 해당하는 녀석에게 활성화 넣고
            
//             var currentPageIndex = $node.index();
//             $('.page-indicator > ul > li').eq(currentPageIndex).addClass('active');
            
//             $('html').attr('data-current-page-index', currentPageIndex);
            
//             return false; // 더 이상 다른 페이지를 검사하지 않는다.
//         }
//     });
// }

// // 각 페이지의 offsetTop 속성을 업데이트
// function Page__updateOffsetTop() {
    
//     $('.page').each(function(index, node) {
//         var $page = $(node);
//         var offsetTop = $page.offset().top;
        
//         $page.attr('data-offset-top', offsetTop);
//     });
    
//     // 계산이 바뀌었으니까, 다시 상태 업데이트
//     Page__updateIndicatorActive();
// }

// function Page__init() {
//     Page__updateOffsetTop();
// }

// // 초기화
// Page__init();

// // 화면이 리사이즈 할 때 마다, offsetTop을 다시계산
// $(window).resize(Page__updateOffsetTop);

// // 스크롤이 될 때 마다, 인디케이터의 상태를 갱신
// $(window).scroll(Page__updateIndicatorActive); 