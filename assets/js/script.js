const openPopup = document.querySelector('.open__popup'),
fopmPopup = document.querySelector('.form__popap'),
closePopup = document.querySelector('.fa-close'),
nav = document.querySelector('.mobile__open'),
burger = document.querySelector('.mobile__burger'),
navigation = document.querySelectorAll('a[href*="#"]');

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


openPopup.addEventListener('click', () =>{
    show(fopmPopup);
    scrollOf();
});

closePopup.addEventListener('click', () => {
    hide(fopmPopup);
    scrollOn();
});

burger.addEventListener(('click'),()=>{
    if(burger.classList.contains('active')){
        hide(nav);
        scrollOn();
        burger.classList.add('fa-bars');
        burger.classList.remove('fa-close');
        burger.classList.remove('active');
    }
    else{
        show(nav);
        scrollOf();
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-close');
        burger.classList.add('active');
    }
});

navigation.forEach(element => {
    element.addEventListener(('click'), () => {
        if (screen.width < 650){
            hide(nav);
            burger.classList.remove('fa-close');
            burger.classList.add('fa-bars');
        }
    });
});


