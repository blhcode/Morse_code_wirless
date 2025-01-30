radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(16)
basic.forever(function () {
    radio.sendNumber(pins.digitalReadPin(DigitalPin.P0))
})
