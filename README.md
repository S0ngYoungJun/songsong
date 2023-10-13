# songsong
개인 웹페이지에 상단에 각 웹사이트 아이콘을 단 메뉴바 제작
미디어쿼리로 700px이하이면 메뉴가 숨겨져있고 토글 버튼을 누르면 메뉴가 나옵니다.
 const toggleBtn = document.querySelector('.toggleBtn'); >>> 토글버튼 변수 선언
const menu = document.querySelector('.menu'); >> 메뉴 변수 선언
const icons = document.querySelector('.icons'); >> 아이콘 변수 선언
console.dir(menu)
toggleBtn.addEventListener('click', () => { >>>> 토글버튼 클릭 이벤트로 메뉴와 아이콘의 클래스리스트를 토글로 기본과 active로 왔다거림( 기본 display none .actvie display flex)
  menu.classList.toggle('active')
  icons.classList.toggle('active')
