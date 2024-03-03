let row_box = document.querySelectorAll('.slide_slide_content');
let window_box = document.querySelector('.slide_slide');
let img_boxes = document.querySelectorAll('.slide_slide_content>img');


let rbh = row_box[0].offsetHeight;
let rbw = row_box[0].offsetWidth;
let wbh = window_box.offsetHeight;
let wbw = window_box.offsetWidth;
let iw = img_boxes[0].offsetWidth;

console.log(row_box);

let row_move_x = [0,0,0];
let row_move_y = [0,0,0];
let img_marginRight = 0;


row_box[0].style.transform = `
translate(${row_move_x[0] += wbw/2 - iw/2}px,
${row_move_y[0] += wbh/2 - rbh/2}px)`;

row_box[1].style.transform = `
translate(${row_move_x[1] += wbw/2 - iw/2}px,
${row_move_y[1] += wbh/2 - rbh/2}px)`;

row_box[2].style.transform = `
translate(${row_move_x[2] += wbw/2 - iw/2}px,
${row_move_y[2] += wbh/2 - rbh/2}px)`;



for(let i = 0 ; i < img_boxes.length ; i++){
    console.log(img_boxes[i]);
    img_boxes[i].style.marginRight = `
    ${img_marginRight = wbw/2 - iw/2}px`;
}



let next_move = function(content,k){
    content.style.transform = `
    translate(${row_move_x[k] -= iw + img_marginRight}px,${row_move_y[k]}px)`;
}


let before_move = function(content,k){
    content.style.transform = `
    translate(${row_move_x[k] += iw + img_marginRight}px,${row_move_y[k]}px)`;
}

let buttonArr = document.querySelectorAll('.slide_button>.button');



let now_page = [0,3,6];

buttonArr[now_page[0]].style.backgroundColor="lightskyblue";
buttonArr[now_page[1]].style.backgroundColor="lightskyblue";
buttonArr[now_page[2]].style.backgroundColor="lightskyblue";

for(let i = 0 ; i < buttonArr.length ; i++){
    buttonArr[i].addEventListener('click',function(){
        if(i<3){
            buttonArr[now_page[0]].style.backgroundColor="silver";
            buttonArr[i].style.backgroundColor="lightskyblue";

            let move_num = i - now_page[0];
            if(move_num>0){
                for(let j = 0 ; j < move_num ; j++){
                    next_move(row_box[0],0);
                }
            }
            else{
                for(let j = 0 ; j < -1* move_num ; j++){
                    before_move(row_box[0],0);
                }
            }
            now_page[0] = i;
        }else if(i>=3 && i<6){

            buttonArr[now_page[1]].style.backgroundColor="silver";
            buttonArr[i].style.backgroundColor="lightskyblue";

            let move_num = i - now_page[1];
            if(move_num>0){
                for(let j = 0 ; j < move_num ; j++){
                    next_move(row_box[1],1);
                }
            }
            else{
                for(let j = 0 ; j < -1* move_num ; j++){
                    before_move(row_box[1],1);
                }
            }
            now_page[1] = i;
        }else{

            buttonArr[now_page[2]].style.backgroundColor="silver";
            buttonArr[i].style.backgroundColor="lightskyblue";

            let move_num = i - now_page[2];
            if(move_num>0){
                for(let j = 0 ; j < move_num ; j++){
                    next_move(row_box[2],2);
                }
            }
            else{
                for(let j = 0 ; j < -1* move_num ; j++){
                    before_move(row_box[2],2);
                }
            }
            now_page[2] = i;
        }



    });
}
