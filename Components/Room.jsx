class Room extends React.Component {

    render() {
        if (this.props.room) {
            let room = this.props.room;
            let devices = this.props.devices;

            return (
                <div className="container room-container">
                    
                    <div className="room">
                        <h1 className="room-name">{room.name}</h1>
                        <img className="image" src={ServerPath + room.photo} alt="room"/>

                        <div className="devices-container container">
                            <h3>Устройства</h3>

                            {this.getDevices(devices)}

                        </div>
                    </div>
                </div>

            );
        }
    }

    getDevices(devices) {
        if (devices && devices.length) {
            return devices.map(device => <Device key={device.id} device={device}/>);
        }

        return <h1>Устройств нет</h1>;
    }
}