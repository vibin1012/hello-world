rps = 0
math = 0

def on_button_pressed_a():
    basic.show_leds("""
        # . # # #
                # . # . #
                # . # . #
                # . # . #
                # . # # #
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_down():
    global rps
    rps = randint(1, 3)
    if rps == 1:
        basic.show_string("R")
    elif rps == 2:
        basic.show_string("p")
    else:
        basic.show_string("S")
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("Vibhav")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global math
    math = randint(1, 6)
    if math == 1:
        basic.show_string("4")
    elif math == 2:
        basic.show_string("6")
    elif math == 3:
        basic.show_string("7")
    elif math == 4:
        basic.show_string("8")
    elif math == 5:
        basic.show_string("6")
    else:
        basic.show_string("9")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
