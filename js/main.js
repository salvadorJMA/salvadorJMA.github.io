let maincolors = localStorage.getItem("main_colors");
if (maincolors !== null) {
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("main_colors"))
}

// nav bar toggle
var ul_nav = document.querySelector(".links");
var a_nav = document.querySelectorAll(".links li a");
a_nav.forEach(element => {
    element.addEventListener("click", function () {
        ul_nav.querySelector(".active").classList.remove("active")
        element.classList.add("active")
    })
})




//settings box toggle open and close
var icon = document.querySelector(".fa-cog").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open")
}



//switch colors
const colorslist = document.querySelectorAll(".colors-list li")
for (let i = 0; i < colorslist.length; i++) {
    colorslist[i].addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
        localStorage.setItem("main_colors", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")
    });
}


// switch random background 

let backgroundoption = true
let backgroundinterval;

const randomback = document.querySelectorAll(".random-background span ")
for (let i = 0; i < randomback.length; i++) {
    randomback[i].addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });
        e.target.classList.add("active")

        if (e.target.dataset.option === "yes") {
            backgroundoption = true;
            randomize()
        } else {
            backgroundoption = false
            clearInterval(backgroundinterval)
        }

    });
}

function randomize() {
    if (backgroundoption === true) {
        backgroundinterval = setInterval(function () {
            var landingpage = document.querySelector(".landing-page")
            var landingimgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
            let random = Math.floor(Math.random() * landingimgs.length)
            landingpage.style.backgroundImage = `url(imgs/${landingimgs[random]})`;
        }, 5000)
    }
}


// progress animation
let ourskills = document.querySelector(".skills");
window.onscroll = function () {

    let ourskillsoffset = ourskills.offsetTop;
    let ourskillsouterheight = ourskills.offsetHeight;
    let windowheight = window.innerHeight;
    let windowscrolltop = window.pageYOffset;

    if (windowscrolltop >= (ourskillsoffset + ourskillsouterheight - windowheight)) {
        let allskills = document.querySelectorAll(".skill-box .skillprogress span")
        for (let i = 0; i < allskills.length; i++) {
            allskills[i].style.width = allskills[i].dataset.progress
        }
    }
}


// pop up gallery
let ourgallery = document.querySelectorAll(".gallery .img-box img")
ourgallery.forEach(img => {
    img.addEventListener("click", (e) => {

        //craete overlay
        let overlay = document.createElement("div");
        overlay.className = "pop-up-overlay"

        document.body.appendChild(overlay)

        let popup_box = document.createElement("div")
        popup_box.className = "popup_box"

        let pop_img = document.createElement("img")
        pop_img.src = img.src;

        popup_box.appendChild(pop_img);
        document.body.appendChild(popup_box)


        //close span 
        let closebutton = document.createElement("span")
        let closebuttontext = document.createTextNode("X")
        closebutton.appendChild(closebuttontext)

        closebutton.className = "close-button"
        popup_box.appendChild(closebutton)

    })
})

//close pop up
document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        e.target.parentElement.remove()
        document.querySelector(".pop-up-overlay").remove()
    }
})




// smoooth scroll 
const bullets = document.querySelectorAll(".nav-bullets .bullet")
const alllinks = document.querySelectorAll(".links a")


function scroll(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    });
}
scroll(bullets);
scroll(alllinks);


//show hide bullets
let optionbullets = document.querySelector(".showbullets")
let bulletsspan = document.querySelectorAll(".showbullets span");
let bulletscontainer = document.querySelector(".nav-bullets")

bulletsspan.forEach(span => {
    span.addEventListener("click", (e) => {
        optionbullets.querySelector(".active").classList.remove("active")
        span.classList.add("active")
        if (span.dataset.option === "show") {
            bulletscontainer.style.display = "block";
        } else {
            bulletscontainer.style.display = "none";
        }
    })
})


//toggle menu

let tooglebutton = document.querySelector(".toggle-menu")
let menulinks = document.querySelector(".links");

tooglebutton.onclick = function (e) {
    e.stopPropagation()
    this.classList.toggle("menu-active")
    menulinks.classList.toggle("open")

}

//click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {
    if (e.target !== tooglebutton && e.target !== menulinks) {
        tooglebutton.classList.remove("menu-active")
        menulinks.classList.remove("open")
    }
})


// typed.js
var options = {
    strings: ["an Enthusiastic", "an Ambitious", "a Curious"],
    typeSpeed: 80,
    fadeOut: true,
    loop: true,
    showCursor: true
};

var typed = new Typed('.element', options);






particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 75,
        "density": {
          "enable": true,
          "value_area": 550
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 170,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 1200,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });










