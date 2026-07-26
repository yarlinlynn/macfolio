
import { windowState } from "./WindowState.js";

// responsible for controlling windows 
class WindowManager {
    constructor() {
        this.instances = {};
    }

    register(key, wrapper) {
        this.instances[key] = wrapper;
    }

    render(key) {
        this.instances[key]?.update();
    }

    open(key, data = null) {
        windowState.open(key, data);
        this.render(key);
    }

    close(key) {
        windowState.close(key);
        this.render(key);
    }

    focus(key) {
        windowState.focus(key);
        this.render(key);
    }
}

export const windowManager = new WindowManager();
