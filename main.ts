input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.showNumber(randint(0, 9))
})
