
import { locations } from "../constants/index.js";

export class LocationState {
    constructor() {
        this.activeLocation = locations.work;
    }

    set(location) {
        this.activeLocation = location;
    }

    reset() {
        this.activeLocation = locations.work;
    }
}