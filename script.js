const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:tyata.anil@gmail.com?subject=${subject}&body=${body}`;

    if (formNote) formNote.textContent = "Opening your email app.";
    contactForm.reset();
  });
}
