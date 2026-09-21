
import { windowManager } from "./WindowManager.js";
import { windowState } from "./WindowState.js";

/*
    Handles the actual DOM element of an application window
    WindowState manages the data/state
    WindowManager coordinates the state and wrapper
    WindowWrapper manages the actual DOM element and behaviour
*/
export default class WindowWrapper {
    constructor(windowKey, options = {}) {
        this.windowKey = windowKey; // Unique identifier used to connect this wrapper to the corresponding WindowState
        this.element = null; // Will hold the actual <section> DOM element after mount() is called
        this.dragInstance = null; // Stores the GSAP Draggable instance
        this.isContainer = options.isContainer ?? false; // Determines whether this window behaves as a normal block or as a container
    }

    // Creates the actual DOM element for the window and registers it with WindowManager
    mount(parent=document.body) {
        this.element = document.createElement("section"); // Create the outer window element
        this.element.id = this.windowKey; // Give the element the same ID as its window key eg; key = "imgfile"
        this.element.className = "window"; // Add the shared window CSS class
        this.element.style.display = "none"; // Windows start hidden until WindowState says that they should be visible
        parent.appendChild(this.element); // Add the window to the DOM

        windowManager.register(this.windowKey, this); // This allows: windowManager.render("imgfile")
        return this.element;

    }

    // Makes the window draggable using GSAP Draggable; window is dragged using its .window-header
    enableDrag() {
        // Disable dragging on small/mobile screens
        if(window.innerWidth < 599){
            return;
        }
        // Make sure GSAP Draggable is available
        if(!window.Draggable){
            console.warn(
                "GSAP Draggable missing"
            );
            return;
        }

        const header = this.element.querySelector(".window-header"); // header acts as the drag handle
        if(!header){
            console.warn("No window header found",this.windowKey);
            return;
        }
        this.dragInstance?.kill(); // If this window already has a draggable instance, destroy it before creating a new one

        // Create a new GSAP draggable instance
        const [instance] = window.Draggable.create(this.element,{
            trigger: header,
            bounds: document.body,
            onPress:()=>{
                windowManager.focus(
                    this.windowKey
                );
            }
        });

        this.dragInstance = instance; // Store the GSAP instance so it can be destroyed later if necessary
    }

    // Reads the current WindowState and applies it to the actual DOM element
    update(){
        const state = windowState.windows[this.windowKey]; // Get the state associated with this wrapper

        if(!state){
            return; // Stop if no matching state exists
        }
        // Window visibility
        if(this.isContainer){
            this.element.style.display = state.isOpen ? "contents" : "none";

        } else {
            this.element.style.display = state.isOpen ? "block" : "none";
        }

        this.element.style.zIndex = state.zIndex; // This determines which window appears on top
        // Only animate when the window has just been opened
        if(state.justOpened){
            this.animateOpen();
            state.justOpened=false;
        }
    }

    // Uses GSAP to animate the window from slightly smaller  and transparent to its normal size and opacity
    animateOpen(){
        gsap.fromTo(this.element, {
            opacity:0,
            scale:.9
        },
        {
            opacity:1,
            scale:1,
            duration:.35,
            ease:"power3.out"
        });
    }
}

