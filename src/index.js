// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { Component } from 'preact-compat';
import ReactDOM from 'preact-compat';

class Player extends Component {
    state = {
        show: true
    }

    componentDidMount() {
        document.onclick = () => {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            <div>
                { null }
                { this.state.show && <div></div> }
                { null }
                <video
                    autoplay="true"
                    src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    style={ {width:'400px',height:'300px'} }
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Player />,
    document.getElementById('root')
);
