input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("V")
    basic.showString("V")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("F")
    basic.showString("F")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("H")
    basic.showString("H")
})
radio.setGroup(12)
