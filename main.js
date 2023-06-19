const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});
function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "читать подробнее...";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Скрыть";
    more.style.display = "inline";
  }
}
function readtooMore() {
  var dots1 = document.getElementById("dots1");
  var more1 = document.getElementById("more1");
  var btn1 = document.getElementById("btn1");
  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btn1.innerHTML = "читать подробнее...";
    more1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btn1.innerHTML = "Скрыть";
    more1.style.display = "inline";
  }
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23177134812106, lng: -8.628308084432632 },
    zoom: 14,
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 65,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: "50",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
          {
            lightness: "30",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "all",
        stylers: [
          {
            lightness: "40",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            hue: "#ffff00",
          },
          {
            lightness: -25,
          },
          {
            saturation: -97,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [
          {
            lightness: -25,
          },
          {
            saturation: -100,
          },
        ],
      },
    ],
  });
}
window.initMap = initMap;
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
