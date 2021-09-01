//Pre-loading Animation
const preloader= document.querySelector('.pre-text')
const preloaderTexts=document.querySelectorAll('.pre-text h1');
preloaderTexts.forEach((heading,index)=>{
    heading.style.animation=`move-up 1s ease-in-out ${index/2}s forwards`;
})

function initWebsite(){
    preloader.style.animation='slide-out 1s ease-in-out 2s forwards';
}

//Making Navbar Responsive
const hamburger=document.querySelector('.hamburger');
const navlinks=document.querySelector('.navlinks');
const navItems=document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click',()=>{
    navItems.forEach((li,index)=>{
    li.style.transition=`all 0.5s ease ${(index+1)/5}s`;
    })
    navlinks.classList.toggle('open');
})

//Making the Carousel Functional
const carouselView=document.querySelector('.carousel-view');
const nextBtn= document.querySelector('.right-chevron');
const prevBtn= document.querySelector('.left-chevron');
let carouselSlide=document.querySelector('.carousel-slide')
let carouselDots= document.querySelectorAll('.dot');
let activeDot=document.querySelector('.active-dot');

let slideCounter=0;

function showSlide(slide){
    let width=carouselSlide.getBoundingClientRect().width;
    slideCounter=slide;
    carouselView.style.transform=`translateX(${-slideCounter*width}px)`;
    activeDot.classList.remove('active-dot');
    carouselDots[slideCounter].classList.add('active-dot')
    activeDot=carouselDots[slideCounter]
}

nextBtn.addEventListener('click',()=>{
    if(slideCounter!=carouselDots.length-1){
        slideCounter++;
        showSlide(slideCounter);
    }else{
        slideCounter=0;
        showSlide(slideCounter);
    }
})

prevBtn.addEventListener('click',()=>{
    if(slideCounter!=0){
        slideCounter--;
        showSlide(slideCounter);
    }else{
        slideCounter=carouselDots.length-1;
        showSlide(slideCounter);
    }
})

carouselDots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        showSlide(index);
    })
})

setInterval(()=>{
    if(slideCounter!=carouselDots.length-1){
        slideCounter++;
        showSlide(slideCounter);
    }else{
        slideCounter=0;
        showSlide(slideCounter);
    }
},4000)

//Adding Intersection Observers for Sections

//Card Section
let cards=document.querySelectorAll('.card');
const cardSection=document.querySelector('#card-section');
let cardSectionOptions={
    threshold:0.2,
}

let cardSectionObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            cards.forEach((card)=>{
                card.classList.add('open-card');
            })
        }
    })
},cardSectionOptions)

cardSectionObserver.observe(cardSection);

//Contact Information Section
const contactInfoSection= document.querySelector('#contact-information-section');
let contactInfoBlocks=document.querySelectorAll('.contact-info-block');

let contactSectionObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            contactInfoBlocks.forEach((block)=>{
                block.classList.add('active-block');
            })
        }
    })
})

contactSectionObserver.observe(contactInfoSection);

//Countdown Timer
const date=new Date('Aug 28 2021').getTime();
const hourBlock=document.querySelector('#hours');
const minuteBlock=document.querySelector('#minutes');
const secondBlock=document.querySelector('#seconds');

function loop(){
    let newDate= new Date().getTime();
    let difference=date-newDate;
    let hours=Math.floor((difference/(60*60*1000)));
    let minutes=Math.floor((difference%(60*60*1000))/(60*1000));
    let seconds=Math.floor((difference%(60*1000))/1000);

    hourBlock.textContent=hours;
    minuteBlock.textContent=minutes;
    secondBlock.textContent=seconds;
}

setInterval(loop,1000);
