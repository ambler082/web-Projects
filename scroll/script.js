//모든 박스를 boxes 상수에 저장
const boxes =document.querySelectorAll('.box');

//윈도우 창에서 스크롤 하면 checkBoxes 함수 실행
window.addEventListener('scroll',checkBoxes);
checkBoxes();

function checkBoxes(){
  //트리거 포인트: 박스를 보여지거나 사라지게 하는 높이
  const triggerBottom = window.innerHeight*0.7; //윈도의 4/5 정도 높이를 설정
  //각각의 박스의 높이를 비교해서
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else { 
      box.classList.remove('show');
    }
  })
}