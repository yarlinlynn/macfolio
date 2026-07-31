
import { windowState } from "./WindowState.js";

// import { renderImagePreview } from "../windows/Images.js";

// responsible for controlling windows 
// class WindowManager {
//     constructor() {
//         this.instances = {};
//     }

//     register(key, wrapper) {
//         this.instances[key] = wrapper;
//     }

//     render(key) {
//         this.instances[key]?.update();
//     }

//     open(key, data = null) {
//         windowState.open(key, data);
//         this.render(key);
//         if (key === "imgfile") {
//             renderImagePreview(data);
//         }
//     }

//     close(key) {
//         windowState.close(key);
//         this.render(key);
//     }

//     focus(key) {
//         windowState.focus(key);
//         this.render(key);
//     }
// }

class WindowManager {
    constructor() {
        this.instances = {};
    }

    register(key, wrapper) {
        this.instances[key] = wrapper;
    }

    // render(key) {
    //     this.instances[key]?.update();
    // }
    render(key){

        const wrapper =
            this.instances[key];


        if(!wrapper){
            return;
        }


        const state =
            windowState.windows[key];


        wrapper.update();



        if(
            wrapper.renderContent &&
            state.data
        ){

            wrapper.renderContent(
                state.data
            );

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
