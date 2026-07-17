import { Header } from "./components/header.js";
import { Dock } from "./components/dock.js";

document.addEventListener('DOMContentLoaded', () => {
    Header();
    Dock();
});

window.addEventListener('DOMContentLoaded', () => {
    Header();
});

window.addEventListener('resize', () => {
    Header();
});