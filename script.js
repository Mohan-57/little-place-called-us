
// ==========================
// CREATE DREAMY STARS
// ==========================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 75; i++) {
    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = (1.5 + Math.random() * 3) + "s";

    starsContainer.appendChild(star);
}

// ==========================
// FLOATING HEART ANIMATION
// ==========================

const heartsContainer = document.getElementById("floating-hearts");

function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.classList.add("float-heart");

    const hearts = ["❤️", "💕", "💗", "♡", "💖"];

    heart.textContent = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createFloatingHeart, 900);

// ==========================
// OPEN MY HEART BUTTON
// ==========================

const openButton = document.getElementById("open-heart");

openButton.addEventListener("click", () => {

    const hero = document.getElementById("hero-content");

    hero.style.transition = "all 0.6s ease";
    hero.style.opacity = "0";
    hero.style.transform = "translateY(-25px)";

    setTimeout(() => {
        document.getElementById("apology").scrollIntoView({
            behavior: "smooth"
        });

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 500);

});

// ==========================
// APOLOGY SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// ==========================
// HEARTS WHENEVER SHE TAPS
// ==========================

document.addEventListener("click", function(event) {

    // Avoid creating extra hearts when clicking a button
    // The tap still works everywhere else.
    const heart = document.createElement("span");

    heart.className = "click-heart";

    const heartTypes = ["❤️", "💗", "💕", "💖", "💜"];

    heart.textContent =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);

});


// ==========================
// BLOOMING ROSE
// ==========================

const rose = document.getElementById("rose");
const bloomButton = document.getElementById("bloom-button");
const roseMessage = document.getElementById("rose-message");

bloomButton.addEventListener("click", function() {

    rose.classList.toggle("bloomed");

    if (rose.classList.contains("bloomed")) {

        roseMessage.textContent =
            "Just like this rose, you make everything beautiful. 🌹";

        bloomButton.textContent = "Your Rose Has Bloomed ❤️";

    } else {

        roseMessage.textContent =
            "A little flower, with a lot of love.";

        bloomButton.textContent = "Make My Rose Bloom 🌹";

    }

});


// ==========================
// HOW SPECIAL YOU ARE
// ==========================

const specialButton = document.getElementById("special-button");
const specialReveal = document.getElementById("special-reveal");

specialButton.addEventListener("click", function() {

    specialReveal.classList.toggle("show");

    if (specialReveal.classList.contains("show")) {

        specialButton.textContent = "Hide My Message 💗";

    } else {

        specialButton.textContent =
            "Tap to see how special you are ❤️";

    }

});


// ==========================
// SECRET LOVE LETTER
// ==========================

const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letter-button");
const secretLetter = document.getElementById("secret-letter");

letterButton.addEventListener("click", function() {

    const isOpening = !secretLetter.classList.contains("show");

    envelope.classList.toggle("open", isOpening);
    secretLetter.classList.toggle("show", isOpening);

    if (isOpening) {

        letterButton.textContent = "Close Your Secret Letter 💌";

        setTimeout(() => {
            secretLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);

    } else {

        letterButton.textContent = "Open Your Secret Letter 💌";

    }

});


// ==========================
// COUNTDOWN SURPRISE
// ==========================

const countdownButton =
    document.getElementById("countdown-button");

const countdownNumber =
    document.getElementById("countdown-number");

const countdownReveal =
    document.getElementById("countdown-reveal");

let countdownRunning = false;

countdownButton.addEventListener("click", function() {

    if (countdownRunning) return;

    countdownRunning = true;

    countdownReveal.classList.remove("show");

    let count = 3;

    countdownNumber.textContent = count;
    countdownButton.disabled = true;
    countdownButton.textContent = "Something special is coming...";

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdownNumber.textContent = count;

        } else {

            clearInterval(timer);

            countdownNumber.textContent = "";

            countdownReveal.classList.add("show");

            countdownButton.textContent = "You Are So Special ❤️";

            countdownRunning = false;
            countdownButton.disabled = false;

        }

    }, 1000);

});

// ==========================
// REASONS CARDS ANIMATION
// ==========================

const reasonCards = document.querySelectorAll(".reason-card");

const reasonObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const index = Array.from(reasonCards)
                    .indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 150);

                reasonObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

reasonCards.forEach((card) => {
    reasonObserver.observe(card);
});

// ================================
// MEMORIES GALLERY IMAGE LOADING
// ================================

const memoryImages = document.querySelectorAll(".memory-photo img");

memoryImages.forEach((image) => {

    function showMemory() {
        image.parentElement.classList.add("has-image");
    }

    image.addEventListener("load", showMemory);

    // Handle images that have already loaded
    if (image.complete && image.naturalWidth > 0) {
        showMemory();
    }

});


// FINAL SURPRISE - MILLION HUGS BUTTON

const hugButton = document.getElementById("hug-button");
const heartExplosion = document.getElementById("heart-explosion");

if (hugButton && heartExplosion) {

    hugButton.addEventListener("click", () => {

        // Create a beautiful heart explosion
        const heartEmojis = ["❤️", "💗", "💕", "💖", "💘", "💝", "🩷"];

        for (let i = 0; i < 45; i++) {

            const heart = document.createElement("span");

            heart.classList.add("explosion-heart");

            heart.textContent =
                heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDelay = Math.random() * 1.2 + "s";
            heart.style.fontSize = (18 + Math.random() * 25) + "px";

            heartExplosion.appendChild(heart);

            // Remove hearts after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        hugButton.textContent = "A Million Hugs Sent! ❤️🤗";

    });

}

