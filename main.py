minode.relay_control(ConnName.D12, FanStatus.MINODE_FAN_OPEN)
minode.relay_control(ConnName.D13, FanStatus.MINODE_FAN_OPEN)

def on_forever():
    pass
basic.forever(on_forever)
