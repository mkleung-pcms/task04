let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    while (x <= 4) {
        led.plot(x, 0)
        basic.pause(500)
        led.unplot(x, 0)
        x += 1
    }
})
input.onButtonPressed(Button.B, function () {
    y = 0
    while (y <= 4) {
        led.plot(0, y)
        basic.pause(500)
        led.unplot(0, y)
        y += 1
    }
})
basic.forever(function () {
	
})
