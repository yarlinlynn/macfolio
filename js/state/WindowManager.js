
import { WindowState } from "./WindowState.js";

// responsible for controlling windows 
export class WindowManager {
    open(key, data) {
        WindowState.open(key, data);
        this.render(key)
    }

    close(key) {
        WindowState.close(key);
        this.render(key);
    }

    focus(key) {
        WindowState.focus(key);
        this.render(key);
    }

    render(key) {
        const state = WindowState.windows[key];

        const element = document.getElementById(key);
        if(!element) return;
        element.style.display=state.isOpen ? "block":"none";
        element.style.zIndex=state.zIndex;
    }
}