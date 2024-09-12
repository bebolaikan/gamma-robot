radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 128)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (receivedNumber == 2) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 128)
    } else if (receivedNumber == 3) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    } else if (receivedNumber == 4) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 255)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 255)
    } else if (receivedNumber == 5) {
        motionbit.brakeMotor(MotionBitMotorChannel.All)
    }
})
radio.setGroup(99)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showNumber(99)
})
