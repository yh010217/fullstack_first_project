let inner_inner_tab_exist = document.querySelectorAll('.inner_inner_tab_exist');
for(let i = 0 ; i < inner_inner_tab_exist.length ; i++){
    inner_inner_tab_exist[i].addEventListener('mouseover',()=>{
        document.querySelector('.inner_inner_tab').
            className = 'inner_inner_tab visible';
    });
    inner_inner_tab_exist[i].addEventListener('mouseout',()=>{
        document.querySelector('.inner_inner_tab').
            className = 'inner_inner_tab hidden';
    });
}
