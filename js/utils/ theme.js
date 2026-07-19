
export function toggleTheme() {
    const themeBtn = document.querySelector(".toggle-theme");

    if (!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
    }

    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
    });
}