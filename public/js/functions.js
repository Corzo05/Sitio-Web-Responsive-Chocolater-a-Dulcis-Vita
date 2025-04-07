//Rutas de acceso
document.querySelectorAll(".inicio").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});

document.querySelectorAll(".productos").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "productos.html";
    });
});

document.querySelectorAll(".servicios").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "servicios.html";
    });
});

document.querySelectorAll(".galeriabutton").forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "galeria.html";
    });
});

//Overflow hidden
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("change", () => {
    document.body.style.overflow = btnMenu.checked ? "hidden" : "";
});

//Header
const handleScroll = () => {
    const Header = document.querySelector("header");
    if (window.scrollY > 0) {
        Header.classList.add('header-active');
    } else {
        Header.classList.remove("header-active");
    }
}

document.addEventListener("scroll", handleScroll);

//Slider de galeria
const galeria = document.querySelector('.galeria');

if (galeria) {
    galeria.style.backgroundImage = "url('../public/img/fondo1.jpg')";

    const images = [
        '../public/img/fondo1.jpg',
        '../public/img/fondo2.jpg',
        '../public/img/fondo3.jpg',
        '../public/img/fondo4.jpg',
        '../public/img/fondo5.jpg',
        '../public/img/fondo6.jpg',
        '../public/img/fondo7.jpg',
        '../public/img/fondo8.jpg'
    ];

    let currentIndex = 0;

    const updateBackground = () => {
        document.querySelector('.galeria').style.backgroundImage = `url("${images[currentIndex]}")`;
    };

    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    }, 5000);

    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackground();
        }, 5000);
    };

    document.getElementById('back-arrow')?.addEventListener('click', () => {
        if (!galeria) return;

        if (currentIndex === 1) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        document.querySelector('.galeria').style.backgroundImage = `url("${images[currentIndex]}")`;
        document.querySelector('.galeria').style.backgroundSize = "cover";
        resetInterval();
    });

    document.getElementById('next-arrow')?.addEventListener('click', () => {
        if (!galeria) return;

        currentIndex = (currentIndex + 1) % images.length;
        document.querySelector('.galeria').style.backgroundImage = `url("${images[currentIndex]}")`;
        document.querySelector('.galeria').style.backgroundSize = "cover";
        resetInterval();
    });
}

//Slideer de Inicio
const landing = document.querySelector('.landing');

if(landing){
    landing.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../public/img/fondo1.jpg')";
    
    const images = [
        '../public/img/fondo1.jpg',
        '../public/img/fondo2.jpg',
        '../public/img/fondo3.jpg'
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        landing.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${images[currentIndex]}")`;
    }, 5000);
}
