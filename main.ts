let p1 = 0
basic.forever(function () {
    p1 = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(p1)
    if (p1 > 400) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
