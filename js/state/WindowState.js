
import { 
    INITIAL_Z_INDEX, 
    WINDOW_CONFIG 
} from "../constants/index.js";

// stores window information
export class WindowState {
    constructor() {
        this.windows = structuredClone(WINDOW_CONFIG);
        this.nextZ = INITIAL_Z_INDEX + 1;
    }

    open(key, data = null) {
        const window = this.windows[key];
        if(!window) return;

        window.isOpen = true;
        window.zIndex = this.nextZ++;
        window.data = data;
    }

    close(key) {
        const window = this.windows[key];

        if(!window) return;

        window.isOpen = false;
        window.zIndex = INITIAL_Z_INDEX;
        window.data = null;
    }

    focus(key) {
        const window = this.windows[key];
        if(!window) return;
        window.zIndex = this.nextZ++;
    }
}