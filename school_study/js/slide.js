let row_box = document.querySelector('.slide_slide_content');
let window_box = document.querySelector('.slide_slide');
let img_boxes = document.querySelectorAll('.slide_slide_content>img');

let rbh = row_box.offsetHeight;
let rbw = row_box.offsetWidth;
let wbh = window_box.offsetHeight;
let wbw = window_box.offsetWidth;
let iw = img_boxes[0].offsetWidth;

console.log(row_box);

let row_move_x = 0;
let row_move_y = 0;
let img_marginRight = 0;
row_box.style.transform = `
translate(${row_move_x += wbw/2 - iw/2}px,
${row_move_y += wbh/2 - rbh/2}px)`;
for(let i = 0 ; i < img_boxes.length ; i++){
    console.log(img_boxes[i]);
    img_boxes[i].style.marginRight = `
    ${img_marginRight = wbw/2 - iw/2}px`;
}

console.log(row_box.style.transform);


/*row_box.style.transform = `
translate(${row_move_x -= iw + img_marginRight}px,${row_move_y}px)`;*/

/*

document.getElementById('left_button').onclick=function (){
    row_box.style.transform = `
    translate(${row_move_x -= iw + img_marginRight}px,${row_move_y}px)`;
}

document.getElementById('right_button').onclick=function (){
    row_box.style.transform = `
    translate(${row_move_x += iw + img_marginRight}px,${row_move_y}px)`;
}

*/

let next_move = function(){
    row_box.style.transform = `
    translate(${row_move_x -= iw + img_marginRight}px,${row_move_y}px)`;
}

let before_move = function(){
    row_box.style.transform = `
    translate(${row_move_x += iw + img_marginRight}px,${row_move_y}px)`;
}

let buttonArr = document.querySelectorAll('.slide_button>.button');

let now_page = 0;
for(let i = 0 ; i < buttonArr.length ; i++){
    buttonArr[i].addEventListener('click',function(){
        let move_num = i - now_page;
        if(move_num>0){
            for(let j = 0 ; j < move_num ; j++){
                next_move();
            }
        }
        else{
            for(let j = 0 ; j < -1* move_num ; j++){
                before_move();
            }
        }
        now_page = i;
    });
}
