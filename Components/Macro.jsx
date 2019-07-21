class Macro extends React.Component {

    render() {
        let content = this.props.macros.map(macro => (
            <div className="macro container" key={macro.id}>

                <div className="controls">
                    <h3 className="name">{macro.name}</h3>
                    <div className="controls">
                        <button className="submit-button" onClick={() => this.props.activateMacro(macro.id)}>Активировать</button>
                        <button className="remove-button" onClick={() => this.props.removeMacro(macro.id)}>Удалить</button>
                    </div>
                </div>


                <div className="devices-container container">
                    <h3>Устройства</h3>
                    {macro.devices.map(device => <Device key={device.deviceId} device={device}/>)}
                </div>
            </div>));

        if (!content.length) {
            content = <h1>Нет макросов</h1>;
        }

        return (
            <div className="container macro-container">
                <h1>Макросы</h1>
                {content}
                <button className="submit-button" onClick={this.props.addMacroClicked}>Добавить новый</button>
            </div>
        )
    }

    getLength() {
        if(this.props.macros && this.props.macros.length) {
            return this.props.macro.length;
        }
        return 0;
    }
}