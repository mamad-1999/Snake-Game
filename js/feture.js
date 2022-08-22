import Food from './food.js'
import Snake from './snake.js'

let canvas = document.getElementById("myConvas")
let ctx = canvas.getContext("2d")

let scale = 10
const row = canvas.height / scale // 36
const column = canvas.width / scale // 36

window.onload = () => {
    let snake = new Snake()
    let food = new Food()

    food.generateRandomFoodLocation()

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        snake.snakeDraw()
        food.foodDraw()
        snake.snakeMove()

        if (snake.isEatFood(food)) {
            food.generateRandomFoodLocation()
        }
    }, 150);

    window.addEventListener("keydown", (e) => {
        let clicked = e.code.replace("Arrow", "")
        snake.snakeArrowKey(clicked)
    })
}

export {
    scale, ctx, row,
    column, canvas
}