import {Auto} from 'auto';

export class Truck extends Auto {
    constructor(data) {
        super(data);
        this.is4by4 = data.is4by4;
    }

    getDetails() {
        return `${super.getDetails()} 4x4: ${this.is4by4}`;
    }
}
