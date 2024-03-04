
/* 메뉴 보여주는 코드 시작 */
document.addEventListener("DOMContentLoaded", function() {
    // 메인 메뉴 영역, 서브 메뉴 영역
    const mainMenu = document.querySelector('.main_menu');
    const subMenuView = document.querySelector('.sub_menu_view');

    //첫번째 메인 메뉴 (AiGenia) , 서브 메뉴
    const subMenu1 = document.getElementById('sub_menu1');
    const mainMenu1 = document.getElementById('main_menu1');
    //두번째 메인 메뉴 (학교공부), 서브 메뉴
    const subMenu2 = document.getElementById('sub_menu2');
    const mainMenu2 = document.getElementById('main_menu2');
    //세번째 메인 메뉴 (수준별 국영수), 서브 메뉴
    const subMenu3 = document.getElementById('sub_menu3');
    const mainMenu3 = document.getElementById('main_menu3');

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
    mainMenu.addEventListener('mouseenter', function () {
        subMenuView.style.display = 'block';
        subMenuView.classList.add('slideDown');
    });
    subMenuView.addEventListener('mouseenter', function () {
        subMenuView.style.display = 'block';
        subMenuView.classList.add('slideDown');
    });

    // mainMenu와 subMenuView에서 마우스가 벗어날 때 메뉴창 닫음
    mainMenu.addEventListener('mouseleave', function (event) {
        // 마우스가 subMenuView로 이동한 경우는 무시
        if (!event.relatedTarget || !subMenuView.contains(event.relatedTarget)) {
            subMenuView.classList.remove('slideDown');
            subMenuView.addEventListener('transitionend', function () {
                subMenuView.style.display = 'none';
            }, {once: true});
        }
    });
    subMenuView.addEventListener('mouseleave', function (event) {
        // 마우스가 mainMenu로 이동한 경우는 무시
        if (!event.relatedTarget || !mainMenu.contains(event.relatedTarget)) {
            subMenuView.classList.remove('slideDown');
            subMenuView.addEventListener('transitionend', function () {
                subMenuView.style.display = 'none';
            }, {once: true});
        }
    });

    /* 메뉴 보여주는 코드 끝 */

    /*모바일 메뉴 보여주는 코드 시작*/
    const mobile_menu_btn = document.getElementById('mobile_menu_btn');
    const mobile_menu = document.getElementById('mobile_menu');
    mobile_menu_btn.addEventListener('click', function () {
        if (mobile_menu.style.display === 'block') {
            mobile_menu.style.display = 'none';
        } else {
            mobile_menu.style.display = 'block';
        }
    });
    /*모바일 메뉴 보여주는 코드 끝*/
});