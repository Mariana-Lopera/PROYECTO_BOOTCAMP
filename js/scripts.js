function showcontent(){
    const welcomeDiv = document.getElementById("welcome");
    welcomeDiv.style.opacity = "0";
    welcomeDiv.style.backgroundColor = "#f8f8f8ff";
    setTimeout(() => {
        welcomeDiv.style.visibility = "hidden";
    }, 500); 

    const mainContent = document.getElementById("homeview");
    mainContent.style.opacity = "1";
    mainContent.style.visibility = "visible";

    const menudiv = document.getElementById("menu");
    menudiv.classList.add("show");

    document.body.style.backgroundColor = "white";

    setTimeout(() => {
    document.getElementById("sec1").classList.add("show");},
    300);
    setTimeout(() => {
    document.getElementById("sec2").classList.add("show");},
    300);

}



function showtitle() {
    const titlenew = document.getElementById("titlesec2");
    titlenew.classList.add("show");
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.getElementById("titlesec2").classList.add("show");
    }
  });
}, { threshold: 0.3 });

observer.observe(document.getElementById("sec2"));













