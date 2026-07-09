// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Typing effect
const title = document.querySelector("header h1");

const text = "Allison Amoabeng";

let i = 0;

title.textContent = "";

function typeWriter(){

    if(i < text.length){
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter,120);
    }

}

window.onload = typeWriter;

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";

observer.observe(section);

});