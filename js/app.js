import { windowManager } from "./state/WindowManager.js";

import { Header } from "./components/header.js";
import { Dock } from "./components/dock.js";
import { Workspace } from "./components/workspace.js";

import { Notes } from "./windows/Notes.js";
import { Files } from "./windows/Files.js";
import { Finder } from "./windows/Finder.js";
import { Gmail } from "./windows/Gmail.js";
import { Terminal } from "./windows/Terminal.js";
import { Images } from "./windows/Images.js";
import { Text } from "./windows/Text.js";
import { Resume } from "./windows/Resume.js";
import { SocialLinks } from "./windows/Socials.js";

document.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace()
    Dock();
    Notes();
    Files();
    Finder();
    Gmail();
    Terminal();
    Images();
    Text();
    Resume();
    SocialLinks();
});

window.addEventListener('DOMContentLoaded', () => {
    Header();
    Workspace();
});

window.addEventListener('resize', () => {
    Header();
    Workspace();
});