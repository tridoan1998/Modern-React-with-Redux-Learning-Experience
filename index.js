import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errotMessage: err.message})
            );
    }
    

    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error {this.state.errorMessage} </div>;

        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;

    }
    //react need render!
    render(){
        return (
            <div className="border ed">
                {this.renderContent()}
            </div>
        )

        }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')

);