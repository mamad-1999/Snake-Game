import { scale, ctx, row, column } from "./feture.js";

class Food {
    constructor() {
        this.x;
        this.y;
    }

    generateRandomFoodLocation() {
        this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * column - 1) + 1) * scale;
    }

    foodDraw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}

export default Food