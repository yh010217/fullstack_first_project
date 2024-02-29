let img_class;

let img_list = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');


window.addEventListener("resize", function () {
    let win_width = document.querySelector('.container>#main_section>.main_section_img_wrap').offsetWidth;
    let win_height = document.querySelector('.container>#main_section>.main_section_img_wrap').offsetHeight;
    if ((win_width / win_height) >= 1040/725) {
        img_class = 'img_height100';
    } else {
        img_class = 'img_width100';
    }
    for (let i = 0; i < img_list.length; i++) {
        img_list[i].className = img_class;
    }
});