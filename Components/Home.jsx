class Home extends React.Component {

    render() {

        if (this.props.rooms.length) {
            return (
                <div className="room-container container">
                    <h1>Аудитории</h1>
                    {this.props.rooms.map(room => (
                        <div className="room" key={room.id} onClick={() => this.props.roomClicked(room.id)}>
                            <h4 className="room-name">{room.name}</h4>
                            <img className="image" src={ServerPath + room.photo} alt={room.name}/>
                        </div>))}

                </div>
            );
        }

        return (<h1>Нет аудиторий</h1>)


    }

}