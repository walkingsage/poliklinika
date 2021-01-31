const openPopup = document.querySelector('.open__popup'),
fopmPopup = document.querySelector('.form__popap'),
closePopup = document.querySelector('.fa-close'),
nav = document.querySelector('.mobile__open'),
burger = document.querySelector('.mobile__burger'),
navigation = document.querySelectorAll('a[href*="#"]'),
phones = document.querySelectorAll('.phone'),
name = document.querySelectorAll('.name');


let show = element =>{
    element.style.display = 'block';
};

let hide = element =>{
    element.style.display = 'none';
};

const scrollOf = () => {
    document.body.style.overflow = 'hidden';
};

const scrollOn = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.overflowX = 'hidden';
};

let popapOpen;

openPopup.addEventListener('click', () =>{
    show(fopmPopup);
    scrollOf();
    popapOpen = true;
});

closePopup.addEventListener('click', () => {
    hide(fopmPopup);
    scrollOn();
    popapOpen = false;
});

let menuOpen = false;

navigation.forEach(element => {
    element.addEventListener(('click'), () => {
        if (screen.width < 650){
            hide(nav);
            burger.classList.remove('fa-close');
            burger.classList.add('fa-bars');
            menuOpen = false;
        }
    });
});


name.forEach(element => {
    element.addEventListener('input',function(){
        element.value = element.value.replace(/[0-9,-.,:+/*]/g, '');
    });
});


phones.forEach(element => {
    element.addEventListener('input',function(){
        element.value = element.value.replace(/[a-z,A-Z,а-я,А-Я,-.,:+/*]/g, '');
    });
});

$(document).mouseup(function (e) {
    if (menuOpen) {
      let menu  = $(".mobile__open");
      if (!menu.is(e.target) && menu.has(e.target).length === 0) {
        $(burger).click();
        menuOpen = false;
      }
    }
    burger.addEventListener(('click'),()=>{
        if(menuOpen){
            hide(nav);
            scrollOn();
            burger.classList.add('fa-bars');
            burger.classList.remove('fa-close');
            burger.classList.remove('active');
            menuOpen = false;
        }
        else{
            show(nav);
            scrollOf();
            burger.classList.remove('fa-bars');
            burger.classList.add('fa-close');
            burger.classList.add('active');
            menuOpen = true;
        }
    });
});



$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
};


$("#phone__first").click(function(){
    $(this).setCursorPosition(3);
  }).mask("+7(999)-999-99-99");

$("#phone__second").click(function(){
$(this).setCursorPosition(3);
}).mask("+7(999)-999-99-99");

$("#phone__three").click(function(){
    $(this).setCursorPosition(3);
}).mask("+7(999)-999-99-99");

