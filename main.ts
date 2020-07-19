let p1 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(p1)
})
basic.forever(function () {
    p1 = pins.analogReadPin(AnalogPin.P1)
    if (250 > p1) {
        basic.showString("L")
    } else if (450 > p1) {
        basic.showString("M")
    } else {
        basic.showString("H")
    }
})
