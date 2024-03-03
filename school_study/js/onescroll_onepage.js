
let main = document.querySelector('#main_section');
let main_section_num = document.querySelectorAll('.main_section_img_wrap').length;

let pc_scroll = function(){

    main.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });

    main.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            main.scrollBy(0, main.offsetHeight + 2);
            if (main.scrollTop >= (main.offsetHeight * (main_section_num - 1) - 20)) window.scrollBy(0, 500);
        } else if (e.deltaY < 0) {
            main.scrollBy(0, -main.offsetHeight);
        }
    });

    document.getElementById('main_section_up_button').onclick = function () {
        main.scrollBy(0, -main.offsetHeight);
    }
    document.getElementById('main_section_down_button').onclick = function () {
        main.scrollBy(0, main.offsetHeight + 2);
    }
}

let tab_mobile_scroll = function(){
    main.addEventListener('wheel',function(e){
        e.unbind('wheel');
    });
}

if(document.body.offsetWidth >=1024) pc_scroll();

window.addEventListener('resize',function(){
    let body_width=document.body.offsetWidth;
    
    if(body_width>=1024){
        pc_scroll();
    }else{
        tab_mobile_scroll();
    }


});



/*

    let main = document.querySelector('#main_section');
    let main_section_num = document.querySelectorAll('.main_section_img_wrap').length;

    main.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });

    main.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            main.scrollBy(0, main.offsetHeight + 2);
            if (main.scrollTop >= (main.offsetHeight * (main_section_num - 1) - 20)) window.scrollBy(0, 500);
        } else if (e.deltaY < 0) {
            main.scrollBy(0, -main.offsetHeight);
        }
    });

    document.getElementById('main_section_up_button').onclick = function () {
        main.scrollBy(0, -main.offsetHeight);
    }
    document.getElementById('main_section_down_button').onclick = function () {
        main.scrollBy(0, main.offsetHeight + 2);
    }
*/