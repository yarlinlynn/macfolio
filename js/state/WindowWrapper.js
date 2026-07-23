
import { WindowManager } from "./WindowManager.js";

// responsible for attaching event listeners to each component
export function WindowWrapper(id) {
    const element = document.getElementById(id);

    element.querySelector(".close").onclick=()=>{

        WindowManager.close(id);

    };

    element.addEventListener("mousedown",()=>{

        WindowManager.focus(id);

    });
}