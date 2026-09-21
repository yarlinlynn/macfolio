
import { windowState } from "./WindowState.js";

// responsible for controlling windows 
class WindowManager {
    constructor() {
        this.instances = {};
    }

    register(key, wrapper) {
        this.instances[key] = wrapper;
    }

    render(key){
        const wrapper = this.instances[key];
        if(!wrapper){
            return;
        }

        const state = windowState.windows[key];
        wrapper.update();

        // add window identifier
        if(wrapper.element) {
            // remove already identifier
            wrapper.element.classList.remove("about-image-window", "about-text-window");
            // add identifier to specific image window for about me data
            if(state.data?.windowClass) {
                wrapper.element.classList.add(state.data.windowClass);
            }
        }

        if(wrapper.renderContent && state.data) {
            wrapper.renderContent(state.data);
        }
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
