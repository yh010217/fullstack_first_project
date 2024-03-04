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
