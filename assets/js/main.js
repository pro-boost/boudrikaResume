/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport hehight, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // if validation is fulfilled, we ask what the issues was to know if we activated or deactived
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedTheme === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon Theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== Change Language ===============*/
document
  .getElementById("language-switcher")
  .addEventListener("click", function () {
    // Get the current language from the HTML lang attribute
    var currentLang = document.documentElement.lang;

    // Toggle between English and French
    var newLang = currentLang === "en" ? "fr" : "en";

    // Construct the new URL based on the current page
    var newUrl = currentLang === "en" ? "index_fr.html" : "index.html";

    // Redirect to the new URL with the updated language
    window.location.href = newUrl;
  });

/*==============Toggle list of missions ========*/
function toggleList(listId, iconId) {
  var list = document.getElementById(listId);
  var icon = document.getElementById(iconId);

  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block";
    icon.classList.remove("ri-arrow-down-double-line");
    icon.classList.add("ri-arrow-up-double-line");
  } else {
    list.style.display = "none";
    icon.classList.remove("ri-arrow-up-double-line");
    icon.classList.add("ri-arrow-down-double-line");
  }
}
