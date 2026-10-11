// Startup Directory Search & Filter

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const startupCards = document.querySelectorAll(".startup-card");

function filterStartups() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    startupCards.forEach(function(card) {

        const startupName = card.querySelector("h2").textContent.toLowerCase();
        const category = card.getAttribute("data-category");

        const matchesSearch = startupName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Search when user types
if (searchInput) {
    searchInput.addEventListener("input", filterStartups);
}


// Filter when category changes
if (categoryFilter) {
    categoryFilter.addEventListener("change", filterStartups);
}

// Submit Pitch Form

const pitchForm = document.getElementById("pitchForm");
const formMessage = document.getElementById("formMessage");

if (pitchForm) {

    pitchForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const startupName = document.getElementById("startupName").value.trim();
        const founderName = document.getElementById("founderName").value.trim();
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value.trim();
        const funding = document.getElementById("funding").value;

        if (
            startupName === "" ||
            founderName === "" ||
            category === "" ||
            description === "" ||
            funding === ""
        ) {
            formMessage.textContent = "Please fill in all required fields.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent =
            "Your startup pitch has been submitted successfully!";

        formMessage.style.color = "green";

        pitchForm.reset();

    });

}

// Contact Form

const contactForm = document.getElementById("contactForm");
const contactFormMessage = document.getElementById("contactFormMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            contactFormMessage.textContent =
                "Please fill in all fields.";

            contactFormMessage.style.color = "red";

            return;
        }

        contactFormMessage.textContent =
            "Your message has been sent successfully!";

        contactFormMessage.style.color = "green";

        contactForm.reset();

    });

}

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = this.nextElementSibling;
        const icon = this.querySelector("span");

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.textContent = "+";

        } else {

            answer.style.display = "block";
            icon.textContent = "−";

        }

    });

});