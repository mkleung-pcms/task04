let x = 0
input.onButtonPressed(Button.A, function () {
    x = 0
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        let y = 0
        led.plot(x, y)
        basic.pause(500)
        led.unplot(x, y)
        x += 1
    }
})
