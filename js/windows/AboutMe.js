
import { windowManager } from "../state/WindowManager.js";
import WindowWrapper from "../state/WindowWrapper.js";

import { Images } from "./Images.js";
import { Text } from "./Text.js";

export function AboutMe(parent=document.body) {
    const window = new WindowWrapper("aboutme", { isContainer:true });
    const windowElement = window.mount(parent);

    Text(windowElement, "aboutText");
    Images(windowElement, "aboutImage1");
    Images(windowElement, "aboutImage2");

    window.renderContent=function(item) {
        const text = item.children.find(file => file.fileType === "txt");
        const images = item.children.filter(file => file.fileType === "img");

        windowManager.open("aboutText",text);
        windowManager.open("aboutImage1",images[0]);
        windowManager.open("aboutImage2",images[1]);
    }

    window.enableDrag();
    return window;
}