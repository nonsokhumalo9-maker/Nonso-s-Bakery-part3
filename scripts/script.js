// ==============================
// NONSO'S BAKERY JAVASCRIPT FILE
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // ====================================
    // PRODUCT SEARCH FUNCTION
    // ====================================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const filter = this.value.toUpperCase();

            const products =
                document.querySelectorAll("#productList li");

            products.forEach(product => {

                const text = product.textContent;

                if (text.toUpperCase().indexOf(filter) > -1) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });

        });

    }

    // ====================================
    // TESTIMONIAL SLIDER
    // ====================================

    const testimonials = [

        "????? Best bakery in Johannesburg!",

        "????? Amazing cakes and friendly service!",

        "????? Fresh bread every morning!",

        "????? Beautiful cupcakes and pastries!",

        "????? Highly recommended for birthdays!"

    ];

    let testimonialIndex = 0;

    const testimonialBox =
        document.getElementById("testimonialBox");

    if (testimonialBox) {

        setInterval(() => {

            testimonialIndex++;

            if (testimonialIndex >= testimonials.length) {
                testimonialIndex = 0;
            }

            testimonialBox.innerHTML =
                testimonials[testimonialIndex];

        }, 3000);

    }

    // ====================================
    // ANIMATED COUNTERS
    // ====================================

    function animateCounter(id, target) {

        const element =
            document.getElementById(id);

        if (!element) return;

        let count = 0;

        const speed = target / 100;

        const counter = setInterval(() => {

            count += Math.ceil(speed);

            if (count >= target) {

                count = target;

                clearInterval(counter);

            }

            element.innerHTML = count + "+";

        }, 20);

    }

    animateCounter("customers", 1500);

    animateCounter("cakes", 850);

    animateCounter("orders", 3200);

    // ====================================
    // DAILY SPECIAL MODAL
    // ====================================

    const modal =
        document.getElementById("specialModal");

    const openBtn =
        document.getElementById("specialBtn");

    const closeBtn =
        document.querySelector(".close");

    if (modal && openBtn && closeBtn) {

        openBtn.addEventListener("click", function () {

            modal.style.display = "block";

        });

        closeBtn.addEventListener("click", function () {

            modal.style.display = "none";

        });

        window.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.style.display = "none";

            }

        });

    }

    // ====================================
    // NEWSLETTER FORM
    // ====================================

    const newsletterForm =
        document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (e) {

            e.preventDefault();

            document.getElementById("newsletterMessage")
                .innerHTML =
                "? Thank you for subscribing to our newsletter!";

            newsletterForm.reset();

        });

    }

    // ====================================
    // CONTACT FORM VALIDATION
    // ====================================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const phone =
                document.getElementById("phone").value;

            const message =
                document.getElementById("message").value;

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                message === ""
            ) {

                alert("Please complete all fields.");

                return;
            }

            document.getElementById("successMessage")
                .innerHTML =
                "? Message sent successfully!";

            contactForm.reset();

        });

    }

    // ====================================
    // GALLERY LIGHTBOX
    // ====================================

    const galleryImages =
        document.querySelectorAll(".gallery-img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightboxImg");

    const closeLightbox =
        document.getElementById("closeLightbox");

    if (galleryImages.length > 0) {

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.style.display = "flex";

                lightboxImg.src = image.src;

            });

        });

    }

    if (closeLightbox) {

        closeLightbox.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }

    // ====================================
    // GALLERY SEARCH
    // ====================================

    const gallerySearch =
        document.getElementById("gallerySearch");

    if (gallerySearch) {

        gallerySearch.addEventListener("keyup", function () {

            const filter =
                this.value.toUpperCase();

            const images =
                document.querySelectorAll(".gallery img");

            images.forEach(img => {

                const alt =
                    img.alt.toUpperCase();

                if (
                    alt.indexOf(filter) > -1
                ) {
                    img.style.display = "";
                } else {
                    img.style.display = "none";
                }

            });

        });

    }

    // ====================================
    // BACK TO TOP BUTTON
    // ====================================

    const topBtn =
        document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {

                topBtn.style.display = "block";

            } else {

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ====================================
    // OPENING HOURS ACCORDION
    // ====================================

    const accordions =
        document.querySelectorAll(".accordion");

    accordions.forEach(item => {

        item.addEventListener("click", function () {

            this.classList.toggle("active");

            const panel =
                this.nextElementSibling;

            if (
                panel.style.maxHeight
            ) {

                panel.style.maxHeight = null;

            } else {

                panel.style.maxHeight =
                    panel.scrollHeight + "px";

            }

        });

    });

});