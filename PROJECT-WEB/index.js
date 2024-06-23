

const listimg = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images .img');
const length = imgs.length;
const btnleft=document.querySelector('.btn-left');
const btnright=document.querySelector('.btn-right');

let current = 0;

const handechangeslide = () => {
    let width = imgs[0].offsetWidth;
    if (current == length - 1) {
        current = 0;
        listimg.style.transform = `translateX(${width * -1 * current}px)`;
    } else {
        current++;
        listimg.style.transform = `translateX(${width * -1 * current}px)`;
    }
    updateActiveIndex();
}

const updateActiveIndex = () => {
    document.querySelector('.index-items.active').classList.remove('active');
    document.querySelector(`.index-items-${current}`).classList.add('active');
}
let handleeventchangeslide = setInterval(handechangeslide , 4000);


btnright.addEventListener('click', () => {
    clearInterval(handleeventchangeslide)
    handechangeslide();
    handleeventchangeslide = setInterval(handechangeslide , 4000);
})

btnleft.addEventListener('click' , () => {
    clearInterval(handleeventchangeslide)
    let width = imgs[0].offsetWidth;
    
    if (current == 0) {
        current = length - 1;
        listimg.style.transform = `translateX(${width * -1 * current}px)`;
        
    } else {
        current--;
        listimg.style.transform = `translateX(${width * -1 * current}px)`;
    }   
    updateActiveIndex();
    
    handleeventchangeslide = setInterval(handechangeslide , 4000);
})







