let math = 0
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
input.onGesture(Gesture.ScreenDown, function () {
    math = randint(1, 6)
    if (math == 1) {
        basic.showString("4")
    } else if (math == 2) {
        basic.showString("6")
    } else if (math == 3) {
        basic.showString("7")
    } else if (math == 4) {
        basic.showString("8")
    } else if (math == 5) {
        basic.showString("6")
    } else {
        basic.showString("9")
    }
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
