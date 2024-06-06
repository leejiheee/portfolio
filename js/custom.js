//메인 타이핑
const content = "WELCOME TO \n MY PORTFOLIO";
const text = document.querySelector(".portfolio_title");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 100)

// 헤더 스크롤
const header = document.querySelector('.header_wrap');
const menu = document.querySelector(".menu");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header_scroll');
    menu.classList.add('menu_scroll');
  } else {
    header.classList.remove('header_scroll');
    menu.classList.remove('menu_scroll');
  }
});

// 스크롤 애니메이션
let observer = new IntersectionObserver((e)=>{
  e.forEach((section)=>{
    if(section.isIntersecting){
      section.target.style.opacity=1;
      section.target.style.transform = 'translateY(0)';
    }else{
      section.target.style.opacity=0;
      section.target.style.transform = 'translateY(30px)';
    }
  })
})

let sec = document.querySelectorAll('section')
observer.observe(sec[0])
observer.observe(sec[1])
observer.observe(sec[2])
observer.observe(sec[3])
observer.observe(sec[4])

//포트폴리오 스크롤
$(document).ready(function() {
  var scrollInterval;

  $('.portfolio_right').hover(
      function() {
          var $scrollWebImage = $(this).find('.scroll_web');
          var containerHeight = $(this).height();
          var imageHeight = $scrollWebImage.height();

          $scrollWebImage.css('opacity', 1);

          var scrollTop = 0;
          scrollInterval = setInterval(function() {
              if (scrollTop < imageHeight - containerHeight) {
                  scrollTop += 1;
                  $scrollWebImage.css('top', -scrollTop + 'px');
              } else {
                  clearInterval(scrollInterval);
              }
          }, 7);
      },
      function() {
          var $scrollWebImage = $(this).find('.scroll_web');

          clearInterval(scrollInterval);
          $scrollWebImage.css({
              'opacity': 0,
              'top': '0'
          });
      }
  );
});


// 스크롤 메뉴
const scroll_menu = document.querySelectorAll('.menu_li')
const container = document.querySelectorAll('.container')
const firstTop = container[0].offsetTop + (-100)
const secondTop = container[1].offsetTop + (-100)
const thirdTop = container[2].offsetTop + (-100)
const fourthTop = container[3].offsetTop + (-100)
const fifthTop = container[4].offsetTop + (-100)

scroll_menu[0].onclick = function(){
  window.scroll({top:firstTop,behavior:'smooth'})
}
scroll_menu[1].onclick = function(){
  window.scroll({top:secondTop,behavior:'smooth'})
}
scroll_menu[2].onclick = function(){
  window.scroll({top:thirdTop,behavior:'smooth'})
}
scroll_menu[3].onclick = function(){
  window.scroll({top:fourthTop,behavior:'smooth'})
}
scroll_menu[4].onclick = function(){
  window.scroll({top:fifthTop,behavior:'smooth'})
}
