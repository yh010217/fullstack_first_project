let main = document.getElementById('main_section');
let img_class;

//let img_list = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
//let last_img = img_list[img_list.length-1];


let img_list = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
let last_img = img_list[img_list.length - 1];

last_img.addEventListener("load", () => {
    console.log('load');
    let load_function = () => {
        let main_width = main.offsetWidth;
        let main_height = main.offsetHeight;

        let img_width = [];
        let img_height = [];
        let img_select = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
        for (let i = 0; i < img_select.length; i++) {
            img_width[i] = img_select[i].offsetWidth;
            img_height[i] = img_select[i].offsetHeight;
        }
        //let img_class='img_height100';
        let nth_img_width;
        let nth_img_height;
        for (let i = 0; i < img_width.length; i++) {
            //img_class='img_height100';//여기 추가
            nth_img_width = img_width[i];
            nth_img_height = img_height[i];
            if (nth_img_width > main_width) {
                img_class = 'img_width100';
                if ((main_width / nth_img_width) * nth_img_height >= main_height) {
                    img_class = 'img_height100';
                }
            } else img_class = "img_height100";
            img_select[i].className = img_class;
        }
    }
    load_function();
    window.addEventListener("resize",load_function);
});


/*
let sizing = function(){

    //let main_width = document.getElementById('main_section').offsetWidth;
    //let main_height = document.getElementById('main_section').offsetHeight;

    let main_width=main.offsetWidth;
    let main_height=main.offsetHeight;

    let img_width = [];
    let img_height = [];
    let img_select = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
    for(let i = 0 ; i <img_select.length ; i++){
        img_width[i] = img_select[i].offsetWidth;
        img_height[i] = img_select[i].offsetHeight;
    }
    let img_class='img_height100';
    let nth_img_width;
    let nth_img_height;
    for(let i = 0 ; i < img_width.length ; i++){
        nth_img_width=img_width[i];
        nth_img_height=img_height[i];
        if(nth_img_width > main_width){
            img_class='img_width100';
            if((main_width/nth_img_width)*nth_img_height >= main_height){
                img_class='img_height100';
            }
        } else img_class = "img_height100";
        img_select[i].className=img_class;
    }
}
*/

//main.onload = sizing();

//window.addEventListener('resize', sizing);


/*let load_function = ()=>{
    let img_list = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
    let last_img = img_list[img_list.length-1];

    last_img.onload =()=>{
        let main_width=main.offsetWidth;
        let main_height=main.offsetHeight;

        let img_width = [];
        let img_height = [];
        let img_select = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
        for(let i = 0 ; i <img_select.length ; i++){
            img_width[i] = img_select[i].offsetWidth;
            img_height[i] = img_select[i].offsetHeight;
        }
        //let img_class='img_height100';
        let nth_img_width;
        let nth_img_height;
        for(let i = 0 ; i < img_width.length ; i++){
            //img_class='img_height100';//여기 추가
            nth_img_width=img_width[i];
            nth_img_height=img_height[i];
            if(nth_img_width > main_width){
                img_class='img_width100';
                if((main_width/nth_img_width)*nth_img_height >= main_height){
                    img_class='img_height100';
                }
            } else img_class = "img_height100";
            img_select[i].className=img_class;
        }
    }
}*/
//load_function();
//window.addEventListener('resize', load_function);