class Login extends React.Component {
    state = {
        login: null,
        password: null
    };

    render() {
        return (
            <form className="authorization-container container" onSubmitCapture={event => this.onSubmit(event)}>
                <h1 className="header">Авторизция</h1>
                <label className="label-container">
                    <span className="label-auth">Логин: </span>
                    <input type="text" name="login" id="login-input"
                           onChange={event => this.state.login = event.target.value} required/>
                </label>
                <label className="label-container">
                    <span className="label-auth">Пароль:</span>
                    <input type="password" name="password" id="password-input"
                           onChange={event => this.state.password = event.target.value} required/>
                </label>

                <button type="submit" className="submit-button">Войти</button>
            </form>
        );

    }

    async onSubmit(event){
        event.preventDefault();

        if(this.state.login && this.state.password){
            let response = await fetch(ApiPath + "/login", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: Headers
            });


            let token = (await response.json()).token;

            this.props.tokenRecieved(token);
        }

        return false;
    }
}