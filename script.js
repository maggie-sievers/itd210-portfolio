/* =========================================================
   FULL SITE JAVASCRIPT (CLEAN PRODUCTION VERSION)
   FIXES: FAQ, form validation, nav, scroll effects
   NOTE: This file contains multiple DOMContentLoaded blocks
   (kept as-is for assignment structure, only commented)
========================================================= */


/* =========================================================
   FIRST DOM CONTENT LOADED BLOCK
   PURPOSE: Handles form validation, FAQ, nav, scroll effects
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     CONTACT FORM ELEMENTS
     PURPOSE: grabbing form inputs + UI elements from HTML
  ========================================================= */
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const messageField = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  /* =========================================================
     FORM VALIDATION LOGIC
     WHY: prevents empty/invalid submissions before sending data
  ========================================================= */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stops page refresh

      let isValid = true;

      // input fields
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // clears previous error messages before re-checking
      document.querySelectorAll(".error").forEach(el => {
        el.textContent = "";
      });

      /* NAME VALIDATION */
      if (!name.value.trim()) {
        document.getElementById("nameError").textContent =
          "Please enter your name";
        isValid = false;
      }

      /* EMAIL VALIDATION (basic check) */
      if (!email.value.includes("@") || !email.value.includes(".")) {
        document.getElementById("emailError").textContent =
          "Please enter a valid email";
        isValid = false;
      }

      /* MESSAGE VALIDATION */
      if (message.value.trim().length < 10) {
        document.getElementById("messageError").textContent =
          "Message must be at least 10 characters";
        isValid = false;
      }

      /* SUCCESS STATE HANDLING */
      if (isValid) {
        if (successMessage) {
          successMessage.style.display = "block"; // show success message
        }

        form.reset(); // clears form fields

        if (charCount) {
          charCount.textContent = "0 characters"; // resets counter
        }
      }
    });
  }

  /* =========================================================
     CHARACTER COUNTER
     WHY: gives real-time feedback while user types message
  ========================================================= */
  if (messageField && charCount) {
    messageField.addEventListener("input", () => {
      charCount.textContent = `${messageField.value.length} characters`;
    });
  }

  /* =========================================================
     FAQ ACCORDION (MAIN VERSION)
     WHY: allows only ONE FAQ open at a time
  ========================================================= */
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

      const content = btn.nextElementSibling;
      if (!content) return;

      const isOpen = content.classList.contains("open");

      /* CLOSE ALL FAQ ITEMS FIRST */
      document.querySelectorAll(".faq-content").forEach((item) => {
        item.classList.remove("open");
        item.style.maxHeight = null;
      });

      /* OPEN ONLY CLICKED ITEM */
      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  /* =========================================================
     MOBILE NAV (HAMBURGER MENU)
     WHY: toggles menu visibility on small screens
  ========================================================= */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  /* =========================================================
     SCROLL REVEAL ANIMATION
     WHY: adds animation when sections come into viewport
  ========================================================= */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((section) => {
      const boxTop = section.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // runs once on load

});


/* =========================================================
   SECOND DOM CONTENT LOADED BLOCK
   PURPOSE: duplicated version of form + FAQ logic (same behavior)
   NOTE: likely for testing or assignment iteration
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const success = document.getElementById("successMessage");

  /* CHARACTER COUNTER */
  if (message && charCount) {
    message.addEventListener("input", () => {
      charCount.textContent = `${message.value.length} characters`;
    });
  }

  /* FORM VALIDATION */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");

      document.querySelectorAll(".error").forEach(e => e.textContent = "");

      /* NAME CHECK */
      if (!name.value.trim()) {
        document.getElementById("nameError").textContent = "Required";
        valid = false;
      }

      /* EMAIL CHECK */
      if (!email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email";
        valid = false;
      }

      /* MESSAGE LENGTH CHECK */
      if (message.value.trim().length < 10) {
        document.getElementById("messageError").textContent = "Min 10 characters";
        valid = false;
      }

      if (!valid) return;

      success.style.display = "block";
      form.reset();
      charCount.textContent = "0 characters";
    });
  }

  /* FAQ ACCORDION (SECOND VERSION - SAME BEHAVIOR) */
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const content = btn.nextElementSibling;
      const open = content.classList.contains("open");

      /* CLOSE ALL */
      document.querySelectorAll(".faq-content").forEach(c => {
        c.classList.remove("open");
        c.style.maxHeight = null;
      });

      /* OPEN CLICKED */
      if (!open) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });
  });

});


/* =========================================================
   THIRD DOM CONTENT LOADED BLOCK
   PURPOSE: extended validation including subject field
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const success = document.getElementById("successMessage");
  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  /* CHARACTER COUNTER */
  if (message && charCount) {
    message.addEventListener("input", () => {
      charCount.textContent = `${message.value.length} characters`;
    });
  }

  /* FORM VALIDATION (EXTENDED VERSION) */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    /* NAME REQUIRED */
    if (!name.value.trim()) {
      document.getElementById("nameError").textContent = "Required";
      valid = false;
    }

    /* EMAIL FORMAT CHECK */
    if (!email.value.includes("@")) {
      document.getElementById("emailError").textContent = "Invalid email";
      valid = false;
    }

    /* SUBJECT REQUIRED */
    if (!subject.value.trim()) {
      document.getElementById("subjectError").textContent = "Required";
      valid = false;
    }

    /* MESSAGE LENGTH CHECK */
    if (message.value.trim().length < 10) {
      document.getElementById("messageError").textContent = "Min 10 characters";
      valid = false;
    }

    if (!valid) return;

    success.style.display = "block";
    form.reset();
    charCount.textContent = "0 characters";
  });

  /* FAQ ACCORDION AGAIN (FINAL VERSION) */
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const content = btn.nextElementSibling;
      const open = content.classList.contains("open");

      document.querySelectorAll(".faq-content").forEach(c => {
        c.classList.remove("open");
        c.style.maxHeight = null;
      });

      if (!open) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });
  });

});