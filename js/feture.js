import Food from './food.js'
import Snake from './snake.js'

const arrowKey = document.querySelectorAll('.arr')
let canvas = document.getElementById("myConvas")
let ctx = canvas.getContext("2d")

let scale = 10
let speed = 150
const row = canvas.height / scale
const column = canvas.width / scale

window.onload = () => {
    let snake = new Snake()
    let food = new Food()

    food.generateRandomFoodLocation()

    setInterval(() => {
        let deviceWidth = window.innerWidth
        if (deviceWidth > 500) {
            canvas.width = 460
            canvas.height = 460
        } else {
            canvas.width = 360
            canvas.height = 360
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        snake.snakeDraw()
        food.foodDraw()
        snake.snakeMove()

        if (snake.isEatFood(food)) {
            food.generateRandomFoodLocation()
        }
    }, speed);

    window.addEventListener("keydown", (e) => {
        let clicked = e.code.replace("Arrow", "")
        snake.snakeArrowKey(clicked)
    })
    arrowKey.forEach(key => {
        key.addEventListener('click', (e) => {
            let arrowClicked = null
            if (e.target.tagName === "DIV") {
                arrowClicked = e.target.dataset.key
            } else {
                arrowClicked = e.target.parentElement.dataset.key
            }

            snake.snakeArrowKey(arrowClicked)
        })
    })

}

export {
    scale, ctx, row,
    column, canvas
}