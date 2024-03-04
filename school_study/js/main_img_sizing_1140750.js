let img_class;

let img_list = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');


let sizing_function = function(){
    let win_width = document.querySelector('.container>#main_section>.main_section_img_wrap').offsetWidth;
    let win_height = document.querySelector('.container>#main_section>.main_section_img_wrap').offsetHeight;
    if ((win_width / win_height) >= 1140/750) {
        img_class = 'img_height100';
    } else {
        img_class = 'img_width100';
    }
    for (let i = 0; i < img_list.length; i++) {
        img_list[i].className = img_class;
    }
}
sizing_function();

window.addEventListener("resize", sizing_function);

//버튼을 누를때 main 의 크기가 작아지니깐 버튼의 이벤트리스너도 받아야할듯
document.querySelector('#advertise_right_button').addEventListener('click',sizing_function);
document.querySelector('#advertise_left_button').addEventListener('click',sizing_function);
document.querySelector('#inner_tab_button').addEventListener('click',sizing_function);
document.querySelector('#inner_tab_button2').addEventListener('click',sizing_function);

