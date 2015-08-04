import {Auto} from 'auto';

export class Car extends Auto {
    constructor(data) {
        super(data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    getDetails() {
        return `${super.getDetails()} Electric: ${this.isElectric} Hatchback: ${this.isHatchback}`;
    }
}