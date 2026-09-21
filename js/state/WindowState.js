
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants/index.js";
/*
    Stores the DATA/state of every window in the application
    This class does NOT directly manipulate the DOM
    It only keeps track of things like: 
        - Is the window open?
        - What data is currently inside the window?
        - What is the window's z-index?
        - Has the window just been opened?
*/
class WindowState {
    constructor() {
        // Create an independent copy of the default window 
        // configuration so that the original WINDOW_CONFIG 
        // object is not modified directly.
        this.windows = structuredClone(WINDOW_CONFIG);

        // Keeps track of the next z-index available. 
        // Every time a window is opened or focused, it receives 
        // a higher z-index so that it appears above older windows.
        this.nextZ = INITIAL_Z_INDEX + 1;
    }

    // Marks a window as open and stores any data associated with that window.
    // Example: windowState.open("imgfile", imageItem);
    open(key, data = null) {
        // Find the window's state using its unique key
        const window = this.windows[key];
        if (!window) return; // Stop if the requested window does not exist

        window.isOpen = true; // Mark the window as open
        window.data = data; // Store the data being passed into the window eg image window { name: "profile-1.img", imageUrl: "...", }
        window.zIndex = this.nextZ++; // Give the newly opened window the highest z-index so that it appears above the other windows
        window.justOpened = true; // Used by WindowWrapper to trigger the opening animation
    }

    // Marks a window as closed and removes the data currently associated with it
    close(key) {
        const window = this.windows[key];
        if (!window) return;

        window.isOpen = false; // Hide the window
        window.data = null; // Remove the data currently stored in the window
        window.zIndex = INITIAL_Z_INDEX; // Reset the window's z-index to the starting value
    }

    // Brings an already-open window to the front
    focus(key) {
        const window = this.windows[key];
        if (!window || !window.isOpen) return; // Stop if the window doesn't exist or isn't currently open

        window.zIndex = this.nextZ++; // Give the focused window a new, higher z-index
    } 
}

// Create one shared WindowState instance, this becomes the central source of truth for window state
export const windowState = new WindowState();
