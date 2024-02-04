const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
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

let close_btn = document.querySelectorAll('.close-btn')
let close_btn_modal = document.getElementById('close_btn')

for(let i = 0; i < close_btn.length; i++)
  close_btn[i].addEventListener('click', () => {
      modal.style.display = 'none'
  })

close_btn_modal.addEventListener('click', () => {
  modal.style.display = 'none'
})

let submit_btn = document.getElementById("submit_btn")
let nameModal = document.getElementById("name")
let phone = document.getElementById("phone_form")

const phoneMask = new IMask(phone, {
  mask: "+{7}(000)000-00-00",
});

nameModal.addEventListener('change', () => {
  if(nameModal.value != '' && phoneMask.masked.isComplete){
    submit_btn.classList.add('active')
    submit_btn.style.pointerEvents = 'all'
  } else {
    submit_btn.classList.remove('active')
    submit_btn.style.pointerEvents = 'none'
  }
})

phone.addEventListener("input", () => {
  if (phoneMask.masked.isComplete && nameModal.value != '') {
    submit_btn.classList.add("active");
    submit_btn.style.pointerEvents = 'all'
  } else {
    submit_btn.classList.remove("active");
    submit_btn.style.pointerEvents = 'none'
  }
});


let modalCongrat = document.querySelector('.modal-congratulation')
let modalWindow = document.querySelector('.modal-window') 

submit_btn.addEventListener('click', async () => {
  modalWindow.style.display = 'none'
  modalCongrat.style.display = 'flex'
  return await new Promise(resolve => {
    const data = {
      name: nameModal.value,
      phone: phone.value
    }
    resolve(data)
  })
})