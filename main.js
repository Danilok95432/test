const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

let order = document.querySelectorAll('.order')
for(let i = 0; i < order.length; i++)
    order[i].addEventListener('click', () => {
        const scrollTarget = document.querySelector('.deliever')
        const topOffset = 20;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    })

let modal = document.querySelector('.modal')

let connect_btn = document.getElementById('connect').addEventListener('click', () => {
    modal.style.display = 'flex'
})

let close_btn = document.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none'
})