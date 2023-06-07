
const tabContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    });
};

hideTabContent()

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();




tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, index) => {
            if (target === item) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
});

let currentSlide = 0;
let interval = setInterval(nextSlide, 1000);

function nextSlide()  {
    tabContent[currentSlide].classList.remove('active');
    tabs[currentSlide].classList.remove('tabheader__item_active');

    currentSlide = (currentSlide + 1) % tabContent.length;

    tabContent[currentSlide].classList.add('active');
    tabs[currentSlide].classList.add('tabheader__item_active');
}

function prevSlide() {
    tabContent[currentSlide].classList.remove('active');
    tabs[currentSlide].classList.remove('tabheader__item_active');

    currentSlide = (currentSlide - 1 + tabContent.length) % tabContent.length;

    tabContent[currentSlide].classList.add('active');
    tabs[currentSlide].classList.add('tabheader__item_active');
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 1000);
}

prevSlide();
// resetInterval();

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        resetInterval();
    });

    tab.addEventListener('mouseover', () => {
        clearInterval(interval);
    });

    tab.addEventListener('mouseout', () => {
        resetInterval();
    });
});





const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            modal.style.display = "block";
        }
    };
};

openModalBtn.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";

    window.onclick = function(event) {
        if (event.target == modal || event.target == closeModalBtn) {
            modal.style.display = "none";
        }
    };
};

closeModalBtn.addEventListener("click",closeModal);




const url = 'https://example.com/api/endpoint';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 400) {
      throw new Error('Ошибка 400: Неверный запрос');
    } else if (response.status === 500) {
      throw new Error('Ошибка 500: Внутренняя ошибка сервера');
    }
  })
  .then(data => {
    // Обработка успешного ответа
    console.log(data);
  })
  .catch(error => {
    // Обработка ошибок
    showErrorModal(error.message);
  });

