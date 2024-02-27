document.querySelector('#advertise_right_button').onclick=function(){

    if(document.querySelector('#advertise_right_button')
            .innerHTML===`<img src="img/왼화살표.png"><p>밀크T<br>학습<br>시작</p>`){
        document.querySelector('#advertise_right_button')
            .innerHTML =`<img src="img/오른화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    else {
        document.querySelector('#advertise_right_button')
            .innerHTML = `<img src="img/왼화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    document.querySelector('.advertise_right').classList.
    toggle("showAd");

};


document.querySelector('#advertise_left_button').onclick=function(){

    if(document.querySelector('#advertise_left_button')
        .innerHTML===`<img src="img/오른화살표.png"><p>밀크T<br>학습<br>시작</p>`){
        document.querySelector('#advertise_left_button')
            .innerHTML =`<img src="img/왼화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    else {
        document.querySelector('#advertise_left_button')
            .innerHTML = `<img src="img/오른화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    document.querySelector('.advertise_left').classList.
    toggle("showAd");

};


document.querySelector('#inner_tab_button').onclick=function(){
    document.querySelector('.inner_tab_wrap').classList.
    toggle("inner_tab_wrap_open");

    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_open");
    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_close");
}

document.querySelector('#nyangi').onclick=function(){
    document.querySelector('.inner_tab_wrap').classList.
    toggle("inner_tab_wrap_open");

    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_open");
    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_close");
}





/*
let main = document.getElementById('main_section');
main.addEventListener("wheel",function (e){
    let scaleY=e.deltaY;
    if(scaleY > 0){
        main.scrollBy(0,main.offsetHeight-scaleY);
    }

})
*/
