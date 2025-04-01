document.addEventListener("DOMContentLoaded", function() {
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    menuOpenButton?.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton?.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grapCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

  // Inicializa EmailJS con tu User ID
emailjs.init('VlSVjsqe96ln1wVn-');

// Función para enviar el mensaje
function sendEmail() {
    const serviceID = 'service_v1ynlns';  // El ID de tu servicio
    const templateID = 'template_sqa6ate'; // El ID de la plantilla que configuraste

    // Recoge los datos del formulario
    const form = document.getElementById('formulario');
    const formData = new FormData(form);
    
    // Llama a la API de EmailJS para enviar el correo
    emailjs.sendForm(serviceID, templateID, formData)
        .then(response => {
            console.log('Correo enviado con éxito:', response);
            alert('Mensaje enviado correctamente');
        })
        .catch(err => {
            console.error('Error al enviar el correo:', err);
            alert('Hubo un error al enviar el mensaje');
        });
}

// Asocia el evento de envío del formulario a la función
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de forma tradicional
    sendEmail();  // Llama a la función para enviar el mensaje
});
