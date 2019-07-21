class AddMacro extends React.Component {
    state = {
      json: '{\n' +
          '    "name": "Открыть дверь",\n' +
          '    "devices": [\n' +
          '        {\n' +
          '            "id": 3601,\n' +
          '            "value": "opened"\n' +
          '        }\n' +
          '    ]\n' +
          '}'
    };

    render() {


        return (
            <form onSubmitCapture={(event) => this.submit(event)} className="container macro-container">
                <h1>Добавление макроса</h1>
                <textarea placeholder="Тут я ожидаю JSON добавления макроса" value={this.state.json} onChange={event => this.setState({json: event.target.value})} cols="30" rows="10"/>
                <button type="submit" className="submit-button">Добавить новый</button>
            </form>
        )
    }

    submit(event){
        event.preventDefault();

        this.props.addMacro(this.state.json);

        return false;
    }

}