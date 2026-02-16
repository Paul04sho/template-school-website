// PREDEFINED WHATSAPP MESSAGE
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".whatsapp-link");
    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault(); // prevent default behavior
            const message = encodeURIComponent("Bonjour, je souhaite avoir des informations sur votre école.");
            const waUrl = 'https://wa.me/2250565656518?text=' + message;
            window.open(waUrl, '_blank'); // open whatsapp chat in new tab
        });
    }) ;

    // SLIDER FEATURE
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    next.addEventListener("click", () => {
        current++;
        if(current >= slides.length) current = 0;
        showSlide(current);
    });

    prev.addEventListener("click", () => {
        current--;
        if(current < 0) current = slides.length - 1;
        showSlide(current);
})
});
