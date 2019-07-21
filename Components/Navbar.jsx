
class Navbar extends React.Component {

    render() {
        return (
            <div className="nav-bar-container">
                <h4 id="logo">Умный университет</h4>

                <div id="menu-button">
                    <span onClick={this.props.homeClicked}>Домой</span>
                    <span onClick={this.props.macroClicked}>Макросы</span>
                </div>
            </div>
        );
    }
}