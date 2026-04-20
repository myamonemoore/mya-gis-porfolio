const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.dataset.tab;
        document.getElementById(target).classList.add("active");

    });

});

const popup = document.getElementById("lidarPopup");
const openPopup = document.getElementById("openLidarPopup");
const closePopup = document.querySelector(".close-popup");

openPopup.addEventListener("click", function(e) {
    e.preventDefault();
    popup.style.display = "block";
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});