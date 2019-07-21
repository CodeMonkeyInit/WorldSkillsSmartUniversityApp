
class Device extends React.Component {

    render() {
        if(this.props.device) {
            let device = this.props.device;
            return (
                <div className="controls">
                    {this.printDeviceId(device.deviceId)}
                    <h4 className="device-name">{device.name}</h4>
                    <h4 className="device value">{device.value}</h4>
                </div>
            );
        }
        return <h1>Error :(</h1>
    }

    printDeviceId(deviceId){
        if(deviceId){
            return <h4 className="device-name">Device Id: {deviceId}</h4>
        }
    }
}