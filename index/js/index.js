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
        this.color = 'rgba(109, 246, 234, ' + Math.random() + ')';
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
        mainMenu1.setAttribute('style', 'color:blue; border-bottom: 3px solid blue');
    }, false);
    //첫번째 서브메뉴 탭에서 마우스가 떠나면 첫번째 메인메뉴 속성 제거
    subMenu1.addEventListener('mouseleave', function () {
        mainMenu1.removeAttribute('style');
    });

    //두번째 서브메뉴 탭에서 마우스가 올라가면 두번째 메인메뉴 속성 지정
    subMenu2.addEventListener('mouseover', function () {
        mainMenu2.setAttribute('style', 'color:blue; border-bottom: 3px solid blue');
    }, false);
    //두번째 서브메뉴 탭에서 마우스가 떠나면 두번째 메인메뉴 속성 제거
    subMenu2.addEventListener('mouseleave', function () {
        mainMenu2.removeAttribute('style');
    });

    //세번째 서브메뉴 탭에서 마우스가 떠나면 세번째 메인메뉴 속성 제거
    subMenu3.addEventListener('mouseover', function () {
        mainMenu3.setAttribute('style', 'color:blue; border-bottom: 3px solid blue');
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


    /*리뷰 섹션 코드 시작*/
    const rv_btn1= document.getElementById('review_nav1');
    const rv_btn2= document.getElementById('review_nav2');
    const rv_btn3= document.getElementById('review_nav3');
    const rv_section1 = document.getElementById('rs_1');
    const rv_section2 = document.getElementById('rs_2');
    const rv_section3 = document.getElementById('rs_3');

    rv_btn1.addEventListener('click', function () {
        rv_section1.setAttribute('style','display: flex; justify-content: space-evenly');
        rv_section2.setAttribute('style','display: none');
        rv_section3.setAttribute('style','display: none');
    });
    rv_btn2.addEventListener('click', function () {
        rv_section2.setAttribute('style','display: flex; justify-content: space-evenly');
        rv_section1.setAttribute('style','display: none');
        rv_section3.setAttribute('style','display: none');
    });
    rv_btn3.addEventListener('click', function () {
        rv_section3.setAttribute('style','display: flex; justify-content: space-evenly');
        rv_section1.setAttribute('style','display: none');
        rv_section2.setAttribute('style','display: none');
    });
    /*리뷰 섹션 코드 끝*/


    /* 자동 슬라이더 코드 시작 */
    // 슬라이크 전체 크기(width 구하기)
    const slide = document.querySelector(".slide");
    let slideWidth = slide.clientWidth;

    // 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".slide_prev_button");
    const nextBtn = document.querySelector(".slide_next_button");

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    let slideItems = document.querySelectorAll(".slide_item");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = slideItems.length;

    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    let currSlide = 1;

    // 페이지네이션 생성
    const pagination = document.querySelector(".slide_pagination");

    for (let i = 0; i < maxSlide; i++) {
        if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
        else pagination.innerHTML += `<li>•</li>`;
    }

    const paginationItems = document.querySelectorAll(".slide_pagination > li");

    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
    const startSlide = slideItems[0];
    const endSlide = slideItems[slideItems.length - 1];
    const startElem = document.createElement("div");
    const endElem = document.createElement("div");

    endSlide.classList.forEach((c) => endElem.classList.add(c));
    endElem.innerHTML = endSlide.innerHTML;

    startSlide.classList.forEach((c) => startElem.classList.add(c));
    startElem.innerHTML = startSlide.innerHTML;

    // 각 복제한 엘리먼트 추가하기
    slideItems[0].before(endElem);
    slideItems[slideItems.length - 1].after(startElem);

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    slideItems = document.querySelectorAll(".slide_item");

    let offset = slideWidth + currSlide;
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });

    function nextMove() {
        currSlide++;
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        } else {
            // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
            currSlide = 0;
            let offset = slideWidth * currSlide;
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
            });
            currSlide++;
            offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            setTimeout(() => {
                // 각 슬라이드 아이템의 left에 offset 적용
                slideItems.forEach((i) => {
                    // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                    i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
                });
            }, 0);
            // // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        }
    }
    function prevMove() {
        currSlide--;
        // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
        if (currSlide > 0) {
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        } else {
            // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
            currSlide = maxSlide + 1;
            let offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
            });
            currSlide--;
            offset = slideWidth * currSlide;
            setTimeout(() => {
                // 각 슬라이드 아이템의 left에 offset 적용
                slideItems.forEach((i) => {
                    // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                    i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
                });
            }, 0);
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        }
    }

    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    nextBtn.addEventListener("click", () => {
        // 이후 버튼 누를 경우 현재 슬라이드를 변경
        nextMove();
    });
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    prevBtn.addEventListener("click", () => {
        // 이전 버튼 누를 경우 현재 슬라이드를 변경
        prevMove();
    });

    // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
    window.addEventListener("resize", () => {
        slideWidth = slide.clientWidth;
    });

    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    for (let i = 0; i < maxSlide; i++) {
        // 각 페이지네이션마다 클릭 이벤트 추가하기
        paginationItems[i].addEventListener("click", () => {
            // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
            currSlide = i + 1;
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        });
    }

    // 드래그(스와이프) 이벤트를 위한 변수 초기화
    let startPoint = 0;
    let endPoint = 0;

    // PC 클릭 이벤트 (드래그)
    slide.addEventListener("mousedown", (e) => {
        startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    });

    slide.addEventListener("mouseup", (e) => {
        endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
        if (startPoint < endPoint) {
            // 마우스가 오른쪽으로 드래그 된 경우
            prevMove();
        } else if (startPoint > endPoint) {
            // 마우스가 왼쪽으로 드래그 된 경우
            nextMove();
        }
    });

    // 모바일 터치 이벤트 (스와이프)
    slide.addEventListener("touchstart", (e) => {
        startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
    });
    slide.addEventListener("touchend", (e) => {
        endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
        if (startPoint < endPoint) {
            // 오른쪽으로 스와이프 된 경우
            prevMove();
        } else if (startPoint > endPoint) {
            // 왼쪽으로 스와이프 된 경우
            nextMove();
        }
    });

    // 기본적으로 슬라이드 루프 시작하기
    let loopInterval = setInterval(() => {
        nextMove();
    }, 3000);

    // 슬라이드에 마우스가 올라간 경우 루프 멈추기
    slide.addEventListener("mouseover", () => {
        clearInterval(loopInterval);
    });

    // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
    slide.addEventListener("mouseout", () => {
        loopInterval = setInterval(() => {
            nextMove();
        }, 3000);
    });

});

/* 자동 슬라이더코드 끝*/
