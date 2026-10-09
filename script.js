
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("page-title");

const pageTitles = {
    home: "Welcome Home",
    about: "About Me",
    skills: "My Skills",
    projects: "School Projects",
    contact: "Contact Me"
};

function showPage(pageId) {
    const targetPage = document.getElementById(pageId);

    if (!targetPage) return;

    pages.forEach(page => {
        page.classList.toggle("active", page.id === pageId);
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.dataset.page === pageId);
    });

    pageTitle.textContent = pageTitles[pageId] || "My Portfolio";

    // Start the new view at the top, without smooth scrolling.
    window.scrollTo(0, 0);
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        showPage(link.dataset.page);
    });
});

document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.go);
    });
});