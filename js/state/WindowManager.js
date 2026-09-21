
import { windowState } from "./WindowState.js";

/*
    Connects the window STATE to the actual window COMPONENTS. 
    WindowState answers: 
        - "What should the window look like/do?" 
        - WindowManager answers: 
        - "How do I apply that state to the actual window?"
*/
class WindowManager {
    constructor() {
        this.instances = {}; // Stores the actual WindowWrapper instance
    }

    // Called when a WindowWrapper is mounted allowing the manager to find the actual DOM wrapper, later using its unique window key.
    register(key, wrapper) {
        this.instances[key] = wrapper;
    }

    // Synchronizes the stored WindowState with the actual WindowWrapper/DOM element
    render(key){
        const wrapper = this.instances[key]; // Find the actual WindowWrapper instance
        // Stop if this window hasn't been registered/mounted
        if(!wrapper){
            return;
        }

        const state = windowState.windows[key]; // Get the state associated with this window
        wrapper.update(); // Update the window's visibility, z-index, and opening animation.

        // This allows the same reusable image window to have different styles depending on which file is opened
        if(wrapper.element) {
            wrapper.element.classList.remove("about-image-window", "about-text-window"); // Remove any previous custom identifiers
            // If the current item's data contains a windowClass, apply that class to the actual window element
            if(state.data?.windowClass) {
                wrapper.element.classList.add(state.data.windowClass);
            }
        }

        // pass available data, into renderContent() // function
        if(wrapper.renderContent && state.data) {
            wrapper.renderContent(state.data);
        }
    }

    // Updates the state first, then renders the actual window
    open(key, data = null) {
        windowState.open(key, data); // Update the central window state
        this.render(key); // Apply that state to the actual window
    }

    // Updates the state and then hides the actual window
    close(key) {
        windowState.close(key);
        this.render(key);
    }

    // Updates the z-index of the window and renders the change
    focus(key) {
        windowState.focus(key);
        this.render(key);
    }
}

// Create one shared WindowManager instance, other parts of the application can import this instance to open, close, focus, or render windows
export const windowManager = new WindowManager();
