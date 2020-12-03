function Bjelleklang () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
minode.onPIREvent(ConnName.A0, function () {
    music.setTempo(173)
    Bjelleklang()
    Bjelleklang()
    OverSkogOgHei()
})
input.onButtonPressed(Button.A, function () {
	
})
function OverSkogOgHei () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
}
basic.forever(function () {
    minode.RelayControl(ConnName.D12, FanStatus.MINODE_FAN_CLOSE)
    minode.RelayControl(ConnName.D13, FanStatus.MINODE_FAN_OPEN)
    control.waitMicros(1500000)
    minode.RelayControl(ConnName.D12, FanStatus.MINODE_FAN_OPEN)
    minode.RelayControl(ConnName.D13, FanStatus.MINODE_FAN_CLOSE)
    control.waitMicros(3000000)
})
