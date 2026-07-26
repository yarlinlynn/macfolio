import { Header } from "./components/header.js";
import { Dock } from "./components/dock.js";
import { Workspace } from "./components/workspace.js";

import { Notes } from "./windows/Notes.js";
import { Files } from "./windows/Files.js";
import { Finder } from "./windows/Finder.js";
import { Gmail } from "./windows/Gmail.js";

document.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace()
    Dock();
    Notes();
    Files();
    Finder();
    Gmail();
});

window.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace();
});

window.addEventListener('resize', () => {
    Header();
    Workspace();
});