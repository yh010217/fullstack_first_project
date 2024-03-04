document.addEventListener("DOMContentLoaded", function () {
    let fCheck = document.getElementById("fCheck");
    let check = document.querySelectorAll(".check");

    fCheck.addEventListener("click", function () {
        check.forEach(function (checkbox) {
            checkbox.checked = fCheck.checked;
        });
    });
    // 일반 홈페이지 체크 스크립트
    let mainCategory = document.getElementById('mainCategory');
    let subCategory = document.getElementById('subCategory');
    let subListli1 = document.querySelectorAll('#subList_li1_2,#subList_li1_1,#subList_li1_3,#subList_li1_4,#subList_li1_5,#subList_li1_6,#subList_li1_7')
    let subListli2 = document.querySelectorAll('#subList_li2_1,#subList_li2_2,#subList_li2_3,#subList_li2_4,#subList_li2_5,#subList_li2_6,#subList_li2_7,#subList_li2_8')
    mainCategory.addEventListener('change', function () {
        let selectedValue = mainCategory.value;
        let selectedId = mainCategory.options[mainCategory.selectedIndex].id;
        subCategory.innerHTML = '';
        if (selectedValue === '1') {
            appendOptions(subListli1);
        } else if (selectedValue === '2') {

            appendOptions(subListli2);
        }
    });
    function appendOptions(items) {
        items.forEach(function (listItem) {
            let anchor = listItem.querySelector('a');

            if (anchor) {
                let option = document.createElement('option');

                option.value = anchor.getAttribute('href');
                console.log(option.value);
                option.textContent = anchor.textContent;
                subCategory.appendChild(option);
            }
        });
    }//function

     subCategory.addEventListener('change', function(event){

          let data=event.target.value;
          console.log(data);
          location.href=data;
     })





    })  //마지막 document의 것


/* 메뉴 보여주는 코드 시작 */
document.addEventListener("DOMContentLoaded", function() {
    // 메인 메뉴 영역, 서브 메뉴 영역
    const mainMenu = document.querySelector('.main_menu');
    const subMenuView = document.querySelector('.sub_menu_view');

    //첫번째 메인 메뉴 (AiGenia) , 서브 메뉴
    const subMenu1=document.getElementById('sub_menu1');
    const mainMenu1=document.getElementById('main_menu1');
    //두번째 메인 메뉴 (학교공부), 서브 메뉴
    const subMenu2=document.getElementById('sub_menu2');
    const mainMenu2=document.getElementById('main_menu2');
    //세번째 메인 메뉴 (수준별 국영수), 서브 메뉴
    const subMenu3=document.getElementById('sub_menu3');
    const mainMenu3=document.getElementById('main_menu3');

    //첫번째 서브메뉴 탭에서 마우스가 올라가면 첫번째 메인메뉴 속성 지정
    subMenu1.addEventListener('mouseover', function () {
        mainMenu1.setAttribute('style', 'color:rgb(30,67,216); border-bottom: 4px solid rgb(30,67,216)');
    }, false);
    //첫번째 서브메뉴 탭에서 마우스가 떠나면 첫번째 메인메뉴 속성 제거
    subMenu1.addEventListener('mouseleave', function () {
        mainMenu1.removeAttribute('style');
    });

    //두번째 서브메뉴 탭에서 마우스가 올라가면 두번째 메인메뉴 속성 지정
    subMenu2.addEventListener('mouseover', function () {
        mainMenu2.setAttribute('style', 'color:rgb(30,67,216); border-bottom: 4px solid rgb(30,67,216);');
    }, false);
    //두번째 서브메뉴 탭에서 마우스가 떠나면 두번째 메인메뉴 속성 제거
    subMenu2.addEventListener('mouseleave', function () {
        mainMenu2.removeAttribute('style');
    });

    //세번째 서브메뉴 탭에서 마우스가 떠나면 세번째 메인메뉴 속성 제거
    subMenu3.addEventListener('mouseover', function () {
        mainMenu3.setAttribute('style', 'color:rgb(30,67,216); border-bottom: 4px solid rgb(30,67,216);');
    }, false);
    //세번째 서브메뉴 탭에서 마우스가 떠나면 세번째 메인메뉴 속성 제거
    subMenu3.addEventListener('mouseleave', function () {
        mainMenu3.removeAttribute('style');
    });


    // mainMenu와 subMenuView에 마우스가 올라갔을 때 메뉴창 내려서 보여줌
    mainMenu.addEventListener('mouseenter', function() {
        subMenuView.style.display = 'block';
        subMenuView.classList.add('slideDown');
    });
    subMenuView.addEventListener('mouseenter', function() {
        subMenuView.style.display = 'block';
        subMenuView.classList.add('slideDown');
    });

    // mainMenu와 subMenuView에서 마우스가 벗어날 때 메뉴창 닫음
    mainMenu.addEventListener('mouseleave', function(event) {
        // 마우스가 subMenuView로 이동한 경우는 무시
        if (!event.relatedTarget || !subMenuView.contains(event.relatedTarget)) {
            subMenuView.classList.remove('slideDown');
            subMenuView.addEventListener('transitionend', function() {
                subMenuView.style.display = 'none';
            }, { once: true });
        }
    });
    subMenuView.addEventListener('mouseleave', function(event) {
        // 마우스가 mainMenu로 이동한 경우는 무시
        if (!event.relatedTarget || !mainMenu.contains(event.relatedTarget)) {
            subMenuView.classList.remove('slideDown');
            subMenuView.addEventListener('transitionend', function() {
                subMenuView.style.display = 'none';
            }, { once: true });
        }
    });

    /* 메뉴 보여주는 코드 끝 */

    /*모바일 메뉴 보여주는 코드 시작*/
    const mobile_menu_btn = document.getElementById('mobile_menu_btn');
    const mobile_menu = document.getElementById('mobile_menu');
    mobile_menu_btn.addEventListener('click', function() {
        if (mobile_menu.style.display === 'block') {
            mobile_menu.style.display = 'none';
        } else {
            mobile_menu.style.display = 'block';
        }
    });
});
/*모바일 메뉴 보여주는 코드 끝*/
