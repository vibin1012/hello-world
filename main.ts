let rps = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Vibhav")
})
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("R")
    } else if (rps == 2) {
        basic.showString("p")
    } else {
        basic.showString("S")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
