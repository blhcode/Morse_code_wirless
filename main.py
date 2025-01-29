def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
    pins.digital_write_pin(DigitalPin.P0, 1)
radio.on_received_number(on_received_number)

radio.set_group(1)
radio.set_transmit_power(7)
radio.set_frequency_band(16)

def on_forever():
    basic.show_number(pins.digital_read_pin(DigitalPin.P0))
    radio.send_number(pins.digital_read_pin(DigitalPin.P0))
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
