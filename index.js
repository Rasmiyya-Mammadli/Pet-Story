//navbar//

let burgerMenu = document.querySelector('.fa-bars');
let navMenu = document.createElement('div');
navMenu.innerHTML = `
  <div class="w-full h-[186px] bg-black absolute top-[34px] sm:h-[339px]"> 
    <ul class="text-white font-bold text-base mx-6 mt-6">
      <li class="hover:bg-orange-500 h-[40px]"><a href="./index.html">About</a></li>
      <li class="hover:bg-orange-500 h-[40px]"><a href="../donate-page/donate.html">Donate</a></li>
      <li class="hover:bg-orange-500 h-[40px]"><a href="../contact-page/contact.html">Contact us</a></li> 
      <li class="hover:bg-orange-500 h-[40px]"><a href="https://rs.school/">Designed by@</a></li>
    </ul>
  </div>
`;
navMenu.style.display = 'none';
document.body.appendChild(navMenu);

burgerMenu.addEventListener('click', (e) => {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
});
////////////////////////////////////////////////////////////////////////
////////////////////pet carousel//////////////////////////////////////
let leftBtn = document.querySelector('.fa-circle-arrow-left');
let rightBtn = document.querySelector('.fa-circle-arrow-right');
let animalContainer = document.querySelector('.myAnimals');

let animals = [
  { name: 'Giant Pandas', country: 'Native to Southwest China', src: './assets/Rectangle 5 (6).png' },
  { name: 'Eagles', country: 'Native to South America', src: './assets/Rectangle 5 (7).png' },
  { name: 'Gorillas',  country: 'Native to Congo', src: './assets/Rectangle 5 (8).png' },
  { name: 'Two-toed Sloth', country: 'Mesoamerica, South America', src: './assets/Rectangle 5 (9).png' },
  { name: 'cheetahs', country: 'Native to Africa', src: './assets/Rectangle 5 (10).png' },
  { name: 'Penguins', country: 'Native to Antarctica', src: './assets/Rectangle 5 (11).png' }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

leftBtn.addEventListener('click', () => {
  shuffleArray(animals);
  animalContainer.innerHTML = '';
  animals.forEach(animal => {
    animalContainer.innerHTML += `
    <div class="fade lg:mb-[90px] rounded-md w-[285px] h-[322px] border border-[#FA6F32] m-auto lg:w-[294px] lg:h-[354px] xl:w-[366px] xl:h-[426px]">
    <img src="${animal.src}" alt="">
    <h4 class="text-xs font-medium leading-4 ml-4 uppercase xl:leading-6 xl:font-bold xl:text-base">${animal.name}</h4>
    <p class="ml-4 text-xs">${animal.country}</p>
</div>
    `;
  });
});

rightBtn.addEventListener('click', () => {
  shuffleArray(animals);
  animalContainer.innerHTML = '';
  animals.forEach(animal => {
    animalContainer.innerHTML += `
    <div class="fade lg:mb-[90px] rounded-md w-[285px] h-[322px] border border-[#FA6F32] m-auto lg:w-[294px] lg:h-[354px] xl:w-[366px] xl:h-[426px]">
    <img src="${animal.src}" alt="">
    <h4 class="text-xs font-medium leading-4 ml-4 uppercase xl:leading-6 xl:font-bold xl:text-base">${animal.name}</h4>
    <p class="ml-4 text-xs">${animal.country}</p>
</div>
    `;
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////testimonial carousel/////////////////////////////////////////////////////////
const rangeInput = document.querySelector("input[type='range']");
const reviews = document.querySelectorAll(".testimonial__item");
let rangeCount = 1;

rangeInput.addEventListener("input", () => {
  reviews.forEach((review) => {
    review.classList.remove("dark");
  });
  
  let range = parseInt(rangeInput.value);
  
  reviews.forEach((review, index) => {
    if (index < range - 1) {
      review.classList.add("dark");
    } else {
      review.classList.remove("fade");
      review.offsetWidth = review.offsetWidth;
      review.classList.add("fade");
      review.addEventListener("animationend", () => {
        review.classList.remove("fade");
      });
    }
  });
});


//////////////////////////////////////////////////////////
//popup for 640 and 320px//


let review1=document.querySelector('.review__1')
let review2=document.querySelector('.review__2')
let review3=document.querySelector('.review__3')
let darkened_area1=document.createElement('div')
 darkened_area1.innerHTML= `<div class="darkened-area1 top-[3330px] sm:top-[2530px] lg:hidden">
<div class="rounded-3xl border-2 border-solid border-orange-300 bg-[#F5F7F6]  h-[391px] w-[299px] m-auto">
    <h3 class="font-normal text-base leading-5 text-black mt-[-20px]"><i class="fa-regular fa-circle-user text-4xl pt-6 px-3"></i> Michael John </h3>
    <h4 class="font-light text-sm leading-4 text-[#BDBDBD] mx-10">Local Austria  <i class="fa-solid fa-circle ml-3 text-gray-400"></i>Today</h4>
    <p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3 mt-6">The best online zoo I’ve met. My son delighted very much ljves to watch....</p>
    <p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3">The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
    </p>
</div>
</div>`
darkened_area1.style.display = 'none';
document.body.appendChild(darkened_area1);

review1.addEventListener('click', (e) => {
  if (darkened_area1.style.display === 'none') {
    darkened_area1.style.display = 'block';
    
  }
});

darkened_area1.addEventListener('click', (e) => {
  if ( review1.style.display = 'none') {
    review1.style.display = 'block';
    darkened_area1.style.display = 'none'
  }
})

let darkened_area2=document.createElement('div')
 darkened_area2.innerHTML= `<div class="darkened-area2 top-[3330px] sm:top-[2530px] lg:hidden">
<div class="rounded-3xl border-2 border-solid border-orange-300 bg-[#F5F7F6] h-[391px] w-[299px] m-auto">
<h3 class="font-normal text-base leading-5 text-black mt-[-20px]"><i class="fa-regular fa-circle-user text-4xl pt-6 px-3 text-orange-500"></i> Oska Samborska </h3>
<h4 class="font-light text-sm leading-4 text-[#BDBDBD] mx-10">Local Austria  <i class="fa-solid fa-circle ml-3 text-gray-400"></i>Yesterday</h4>
<p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3 mt-6">The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for </p>
<p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3">The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
</p>
</div>
</div>`
darkened_area2.style.display = 'none';
document.body.appendChild(darkened_area2);

review2.addEventListener('click', (e) => {
  if (darkened_area2.style.display === 'none') {
    darkened_area2.style.display = 'block';
   
  }
});

darkened_area2.addEventListener('click', (e) => {
  if ( review2.style.display = 'none') {
    review2.style.display = 'block';
    darkened_area2.style.display = 'none'
  }
})

let darkened_area3=document.createElement('div')
 darkened_area3.innerHTML= `<div class="darkened-area3 top-[3330px] sm:top-[2530px] lg:hidden">
<div class="rounded-3xl border-2 border-solid border-orange-300 bg-[#F5F7F6] h-[391px] w-[299px] m-auto">
<h3 class="font-normal text-base leading-5 text-black mt-[-20px]"><i class="fa-regular fa-circle-user text-4xl pt-6 px-3 text-green-500"></i> Fredericka Michelin </h3>
<h4 class="font-light text-sm leading-4 text-[#BDBDBD] mx-10">Local Austria  <i class="fa-solid fa-circle ml-3 text-gray-400"></i>Yesterday</h4>
<p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3 mt-6"> Online zoo is one jf the ways to instill a love for animals.</p>
<p class="font-light text-sm leading-4 text-[#4F4F4F] mx-3"> My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
     </p>
</div>
</div>`
darkened_area3.style.display = 'none';
document.body.appendChild(darkened_area3);

review3.addEventListener('click', (e) => {
  if (darkened_area3.style.display === 'none') {
    darkened_area3.style.display = 'block';
   
  }
});

darkened_area3.addEventListener('click', (e) => {
  if ( review3.style.display = 'none') {
    review3.style.display = 'block';
    darkened_area3.style.display = 'none'
  }
})


