let state = "closed";
document.getElementById("btnMenu").addEventListener("click", () => {
  const menu = document.getElementById("ulMenu");
  menu.classList.toggle("ocultar");
  menu.classList.toggle("mostrar");
});


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

window.onload = function () {
  document
    .getElementById("formulario-contato")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var parametros = {
        nome: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        telefone: document.getElementById("inputTelefone").value,
        mensagem: document.getElementById("inputMensagem").value
      };
      emailjs.send("service_vor8qyg", "template_jgur3wd", parametros).then(
        () => {
          alert("SUCCESSO! Mensagem enviada");
          document.getElementById("inputNome").value = "";
          document.getElementById("inputEmail").value = "";
          document.getElementById("inputTelefone").value = "";
          document.getElementById("inputMensagem").value = "";
        },
        (error) => {
          alert("Falha:", error);
        }
      );
    });
};


AOS.init();
