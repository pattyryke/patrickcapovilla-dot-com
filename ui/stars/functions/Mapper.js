import gsap from "gsap";


export default class Mapper {
    constructor(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }

    initialize(newWidth, newHeight) {
        this.maxWidth = newWidth;
        this.maxHeight = newHeight;
    }

    x(val) {
        var result = gsap.utils.mapRange(-100, 100, 0, this.maxWidth, val);
        return result;
    }

    y(val) {
        var result = gsap.utils.mapRange(-100, 100, 0, this.maxHeight, val);
        return result;
    }
}