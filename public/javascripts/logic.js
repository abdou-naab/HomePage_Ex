console.log("salam alikom");

const sections = document.querySelectorAll(".content section");
const about = document.querySelector("a[href='#about']");
const projects = document.querySelector("a[href='#projects']");
const contact = document.querySelector("a[href='#contact']");
const navLinks = [about, projects, contact];

let freshUl = document.createElement("ul");
freshUl.innerHTML = `
<li class="about-li"></li>
<li class="projects-li"></li>
<li class="contact-li"></li>
`;

displayAtBreakPoint();
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("resize", displayAtBreakPoint);

function displayAtBreakPoint() {
  if (window.innerWidth <= 870) {
    if (document.querySelector("header nav ul"))
      document.querySelector("header nav ul").remove();
    document.querySelector("section#about .title").appendChild(about);
    document.querySelector("section#projects .title").appendChild(projects);
    document.querySelector("section#contact .title").appendChild(contact);
  } else {
    document.querySelector("header nav").append(freshUl);
    document.querySelector("li.about-li").append(about);
    document.querySelector("li.projects-li").append(projects);
    document.querySelector("li.contact-li").append(contact);
  }
  const images = document.querySelectorAll(".project img");
  images.forEach((img) => {
    if (window.innerWidth <= 480) {
      img.src = img.dataset.imgmobile;
    } else {
      img.src = img.dataset.imgdesktop;
    }
  });
}

function highlightActiveLink() {
  const scrollPosition = window.scrollY + 50;
  const atBottom =
    window.innerHeight + scrollPosition >= document.body.offsetHeight;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      (scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight) ||
      (atBottom && index == sections.length - 1)
    ) {
      navLinks.forEach((link) => link.classList.remove("active-a"));
      navLinks[index].classList.add("active-a");
    }
  });
}
