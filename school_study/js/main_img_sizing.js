let sizing = function(){
    let main_width = document.getElementById('main_section').offsetWidth;
    let main_height = document.getElementById('main_section').offsetHeight;
    let img_width = [];
    let img_height = [];
    let img_select = document.querySelectorAll('.container>#main_section>.main_section_img_wrap>img');
    for(let i = 0 ; i <img_select.length ; i++){
        img_width[i] = img_select[i].offsetWidth;
        img_height[i] = img_select[i].offsetHeight;
    }

    for(let i = 0 ; i < img_width.length ; i++){
        if(img_width[i] > main_width-20){
            img_select[i].className='img_width100';
        }
        
        if(img_height[i] > main_height-20){
            
            img_select[i].className='img_height100';
        }

    }
}

sizing();

window.addEventListener('resize',sizing);