window
.addEventListener('wheel',(e)=>{
    if(e.deltaY>0){
        document.querySelector('.level_inner_bar')
            .className = 'level_inner_bar hideBar';
    }else{
        document.querySelector('.level_inner_bar')
            .className = 'level_inner_bar showBar';
    }
});