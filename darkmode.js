let darkmode = localStorage.getItem("darkmode");
const darkmodeToggle = document.getElementById("dark-mode-toggle");

const enableDarkmode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "enabled");
};

const disableDarkmode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", "disabled");
};

if (darkmode === "enabled") {
    enableDarkmode();
}

darkmodeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "enabled") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});