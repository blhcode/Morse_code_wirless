radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(16)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    radio.sendNumber(pins.digitalReadPin(DigitalPin.P0))
})
