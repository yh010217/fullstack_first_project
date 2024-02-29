//
// document.addEventListener('DOMContentLoaded', function () {
//     let subLists = document.querySelectorAll('.subList');
//
//     subLists.forEach(subList => {
//         //  console.log('test', subList);
//
//
//         // clear 처리
//         subList.addEventListener('click', function (event) {
//
//          //   console.log(event.target, 'target_......');
//
//             for (let i = 0; i < subLists.length; i++) {
//                 const subList_lis = subLists[i].querySelector('.subList_ul');
//
//                 if (subList_lis !== null) {
//                     const lis = subList_lis.querySelectorAll('.subList_li');
//                     lis.forEach(item => {
//                         item.style.display = 'none';
//                     });
//
//                 }
//             }  //for
//
//             let a_tag = event.target;
//             let parent_Node = a_tag.parentElement;
//            let lis = parent_Node.querySelector('.subList_ul');
//
//                  if (lis !==null){
//                     let sublist_lis=   lis.querySelectorAll('.subList_li');
//                        sublist_lis.forEach(item=>{
//                              item.style.display='block';
//                        });
//                  } //if
//
//
//             });
//         });
//     });
//
