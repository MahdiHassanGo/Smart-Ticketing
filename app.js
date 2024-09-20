const menuBtn= document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');
const totalBookEl=document.getElementById('total-booked')
const selectedSeatEl = document.getElementById ('selected-seat');
const availableSeatEl= document.getElementById('available-seat');

menuBtn .addEventListener('click',function(){
    menuBtn.children[0].classList.toggle('hidden');
    
    const menuCloseBtn = document.getElementById('close-icon');


    menuCloseBtn.classList.toggle('hidden');
    mobileMenuEl.classList.toggle('hidden');
    mobileMenuEl.classList.toggle('flex');
})
let selectedSeat= [];

function handleSelectSeat (event){
 

event.classList.add('bg-primary');
event.classList.add('text-white');

selectedSeat.push(event.innerText);
totalBookEl.innerText=selectedSeat.length;
const availableSeatValue = parseFloat(availableSeatEl.innerText);
const newAvailableSeatValue = availableSeatValue-1;
availableSeatEl.innerText= newAvailableSeatValue  ;  




    //     selectedSeatEl.innerHTML=`<li class="text-base font-normal flex justify-between">
// <span>${event.innerText}</span>
// <span>Economy</span>
// <span>550</span>

//     </li>`
}