input.onButtonPressed(Button.A, function () {
    count += 1
    OLED.writeNumNewLine(count)
})
input.onButtonPressed(Button.AB, function () {
    count = 0
    OLED.writeNumNewLine(count)
})
input.onButtonPressed(Button.B, function () {
    count += -1
    OLED.writeNumNewLine(count)
})
let count = 0
OLED.init(128, 64)
count = 0
OLED.writeNumNewLine(count)
basic.forever(function () {
	
})
