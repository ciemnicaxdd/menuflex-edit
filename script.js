


const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigation-bar');

const handleClick = () => 
{
    burger.classList.toggle('burger-active');
    menu.classList.toggle('navigation-active');
    
}

burger.addEventListener('click', handleClick);

window.addEventListener('click', e => 

{
    if(!burger.contains(e.target) && !menu.contains(e.target)){
        burger.classList.remove('burger-active');
        menu.classList.remove('navigation-active');
    }
})