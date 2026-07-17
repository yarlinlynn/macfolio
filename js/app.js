import { Header } from "./components/header.js";
import { Dock } from "./components/dock.js";
import { Workspace } from "./components/workspace.js";

document.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace()
    Dock();
});

window.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace();
});

window.addEventListener('resize', () => {
    Header();
    Workspace();
});