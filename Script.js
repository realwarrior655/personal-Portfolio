//-------------ABRIR IMAGEN---------------------

// Obtén todos los elementos con la clase 'certificado'

const imgs = document.getElementsByClassName('certificado');

// Itera sobre la colección y agrega el evento a cada elemento
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function () {
        // Obtén la URL de la imagen
        const url = imgs[i].src;
        // Abre la URL en una nueva pestaña
        window.open(url, '_blank');
    });
}

//------------Cambiar Tema con el Switch---------

// Seleccionamos el elemento <link> y el switch
const themeLink = document.getElementById('change');
const themeSwitch = document.getElementById('toggle');

// Función para cambiar de tema
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // Cambiar al tema oscuro
    themeLink.href = 'style_sheet_light.css';
  } else {
    // Cambiar al tema claro
    themeLink.href = 'style_sheet_dark.css';
  }
});

//------------Cambiar Idioma con el Switch---------

   // Seleccionamos los elementos de idioma y el switch
    const englishContent = document.querySelectorAll('.english');
    const spanishContent = document.querySelectorAll('.spanish');
    const switchLanguajeBtn = document.getElementById('switch-languaje-btn');

// Asegúrate de que el contenido esté visible/oculto correctamente al cargar la página
englishContent.forEach((element) => element.classList.add('visible'));
spanishContent.forEach((element) => element.classList.add('hidden'));

// Función para alternar idiomas
switchLanguajeBtn.addEventListener('change', () => {
    if (switchLanguajeBtn.checked) {
        // Mostrar español y ocultar inglés
        spanishContent.forEach((element) => {
            element.classList.replace('hidden', 'visible');
        });
        englishContent.forEach((element) => {
            element.classList.replace('visible', 'hidden');
        });
    } else {
        // Mostrar inglés y ocultar español
        englishContent.forEach((element) => {
            element.classList.replace('hidden', 'visible');
        });
        spanishContent.forEach((element) => {
            element.classList.replace('visible', 'hidden');
        });
    }
});
