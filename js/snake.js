import { scale, ctx, canvas } from "./feture.js";

const sound = new Audio('../assets/sound/1.wav')

class Snake {
    constructor() {
        this.x = 0
        this.y = 20
        this.MoveX = scale
        this.MoveY = 0
        this.CanUse = true
        this.total = 0
        this.tail = []
    }

    snakeDraw() {
        ctx.fillStyle = "#fff"

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
        }

        ctx.fillRect(this.x, this.y, scale, scale)
    }

    snakeMove() {

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y }

        this.x += this.MoveX
        this.y += this.MoveY
        if (this.x > canvas.width) {
            this.x = 0
        }
        if (this.y > canvas.height) {
            this.y = 0
        }
        if (this.x < 0) {
            this.x = canvas.width
        }
        if (this.y < 0) {
            this.y = canvas.height
        }
    }

    snakeArrowKey(key) {
        switch (key) {
            case "Up": {
                if (this.CanUse) {
                    this.MoveX = 0
                    this.MoveY = -scale
                    this.CanUse = false
                }
                break;
            }
            case "Down": {
                if (this.CanUse) {
                    this.MoveX = 0
                    this.MoveY = scale
                    this.CanUse = false
                }
                break;
            }
            case "Right": {
                if (!this.CanUse) {
                    this.MoveX = scale
                    this.MoveY = 0
                    this.CanUse = true
                }
                break;
            }
            case "Left": {
                if (!this.CanUse) {
                    this.MoveX = -scale
                    this.MoveY = 0
                    this.CanUse = true
                }
                break;
            }
            default:
                break;
        }
    }

    isEatFood(food) {
        if (this.x === food.x && this.y === food.y) {
            console.log("yes")
            this.total++
            sound.play()
            return true
        }
        return false
    }
}

export default Snake