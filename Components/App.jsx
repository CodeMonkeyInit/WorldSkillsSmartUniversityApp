class App extends React.Component {
    state = {
        activeComponent: <Login tokenRecieved={(token) => this.tokenRecieved(token)}/>,
        componentProps: null,
        token: null
    };

    client = new ApiClient();

    navbarComponent = <Navbar homeClicked={() => this.homeClicked()} macroClicked={() => this.macroClicked()}/>;

    render() {
        return (
            <div className={'main-container'}>
                {this.navbarComponent}
                {this.state.activeComponent}
            </div>);
    }

    tokenRecieved(token) {
        this.setState({token: token,});

        this.homeClicked();
    }

    enableLoading() {
        this.setState({activeComponent: <Loading/>})
    }

    async homeClicked() {
        if (this.state.token) {
            this.enableLoading();
            let rooms = await this.client.getRooms(this.state.token);

            this.setState({
                activeComponent: <Home rooms={rooms} roomClicked={(roomId) => this.roomClicked(roomId, rooms)}/>
            });
        }
    }

    async roomClicked(roomId, rooms) {
        let room = rooms.filter(room => room.id == roomId)[0];

        let devices = await this.client.getDevices(roomId, this.state.token);

        this.setState({activeComponent: <Room devices={devices} room={room}/>});
    }

    async macroClicked() {
        if (this.state.token) {
            this.enableLoading();
            let macros = await this.client.getMacros(this.state.token);
            this.setState({
                activeComponent: <Macro macros={macros}
                                        addMacroClicked={() => this.addMacroClicked()}
                                        activateMacro={macroId => this.activateMacro(macroId)}
                                        removeMacro={macroId => this.removeMacro(macroId)}/>
            });
        }
    }

    async activateMacro(macroId) {
        this.client.activateMacro(macroId, this.state.token);
    }

    async addMacroClicked() {
        this.setState({activeComponent: <AddMacro addMacro={(json) => this.addMacro(json)}/>})
    }

    async addMacro(json) {
        await this.client.addMacro(json, this.state.token);
        await this.macroClicked();
    }

    async removeMacro(macroId) {
        await this.client.removeMacro(macroId, this.state.token);

        await this.macroClicked();
    }
}