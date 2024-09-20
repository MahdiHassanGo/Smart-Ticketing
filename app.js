const menuBtn= document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');

const selectedSeatEl = document.getElementById ('selected-seat');


menuBtn .addEventListener('click',function(){
    menuBtn.children[0].classList.toggle('hidden');
    
    const menuCloseBtn = document.getElementById('close-icon');


    menuCloseBtn.classList.toggle('hidden');
    mobileMenuEl.classList.toggle('hidden');
    mobileMenuEl.classList.toggle('flex');
})


function handleSelectSeat (event){
    console.log(event.innerText);
    selectedSeatEl.innerHTML=`<li class="text-base font-normal flex justify-between">
<span>${event.innerText}</span>
<span>Economy</span>
<span>550</span>

    </li>`
}