/* 눈송이 애니메이션 효과 시작 */
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.className = 'snow';
    document.getElementById('start_main_wrap').appendChild(canvas);

    const context = canvas.getContext('2d');

    let canvasWidth = document.querySelector('#start_main_wrap').clientWidth;
    let canvasHeight = document.querySelector('#start_main_wrap').clientHeight;
    let lastDeviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';

    let snowParticles = [];

    function createParticle() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = Math.random() * 4 - 1;
        this.vy = Math.random() * 4 + 1;
        //this.color = 'rgba(109, 246, 234, ' + Math.random() + ')';
        this.color = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.random()})`;
        this.radius = Math.random() * 5 + 2;
    }

    function createParticles() {
        snowParticles = [];
        const particleCount = lastDeviceType === 'mobile' ? 40 : 100;
        for (let i = 0; i < particleCount; i++) {
            snowParticles.push(new createParticle());
        }
    }

    function setCanvasSize() {
        const currentDeviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';
        if (currentDeviceType !== lastDeviceType) {
            lastDeviceType = currentDeviceType;
            createParticles();
        }

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvasWidth;
        tempCanvas.height = canvasHeight;
        tempCtx.drawImage(canvas, 0, 0);

        canvasWidth = document.querySelector('#start_main_wrap').clientWidth;
        canvasHeight = document.querySelector('#start_main_wrap').clientHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        context.drawImage(tempCanvas, 0, 0);
    }

    function draw() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        snowParticles.forEach(function(particle) {
            context.beginPath();
            let gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius);
            gradient.addColorStop(1, particle.color);
            gradient.addColorStop(1, 'rgb(66, 66, 66)');
            context.fillStyle = gradient;
            context.arc(particle.x, particle.y, particle.radius, Math.PI * 2, 0);
            context.fill();

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -50) particle.x = canvasWidth + 50;
            if (particle.y < -50) particle.y = canvasHeight + 50;
            if (particle.x > canvasWidth + 50) particle.x = -50;
            if (particle.y > canvasHeight + 50) particle.y = -50;
        });
    }

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    createParticles();
    setInterval(draw, 33);
});
/* 눈송이 애니메이션 효과 끝 */

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