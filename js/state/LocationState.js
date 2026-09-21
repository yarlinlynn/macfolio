
import { locations } from "../constants/index.js";

// Keeps track of which Finder location/folder is currently active. for example: Work, About Me, Projects, etc.
export class LocationState {
    // Set the default Finder location when the application starts
    constructor() {
        this.activeLocation = locations.work;
    }

    // Change the currently active Finder location
    set(location) {
        this.activeLocation = location;
    }

    // Reset the Finder back to the default Work location
    reset() {
        this.activeLocation = locations.work;
    }
}

// Create one shared LocationState, however work is the default
export const locationState = new LocationState();