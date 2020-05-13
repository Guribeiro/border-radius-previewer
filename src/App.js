import React, { Component } from 'react';
import './global.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topright: '0',
            topleft: '0',
            bottomright: '0',
            bottomleft: '0',
            
        }

        this.handleRightTopRadius = this.handleRightTopRadius.bind(this);
        this.handleLeftTopRadius = this.handleLeftTopRadius.bind(this);
        this.handleRightBottomRadius = this.handleRightBottomRadius.bind(this);
        this.handleLeftBottomRadius = this.handleLeftBottomRadius.bind(this);


    }


    handleLeftTopRadius(event) {

        this.setState({ topleft: event.target.value })

        const state = this.state.topleft

        const pixelValue = state + 'px';

        const element = document.getElementById('box');

        element.style.borderTopLeftRadius = pixelValue

    }

    handleRightTopRadius(event) {

        this.setState({ topright: event.target.value })

        const state = this.state.topright

        const pixelValue = state + 'px';

        const element = document.getElementById('box');

        element.style.borderTopRightRadius = pixelValue

    }

    handleLeftBottomRadius(event) {

        this.setState({ bottomleft: event.target.value })

        const state = this.state.bottomleft

        const pixelValue = state + 'px';

        const element = document.getElementById('box');

        element.style.borderBottomLeftRadius = pixelValue;


    }

    handleRightBottomRadius(event) {

        this.setState({ bottomright: event.target.value })

        const state = this.state.bottomright

        const pixelValue = state + 'px';

        const element = document.getElementById('box');

        element.style.borderBottomRightRadius = pixelValue

    }


    render() {
        return (

            <div className='App'>
                <div className="container">
                    <div className="container-box">
                        <div className="box" id='box'>

                        </div>
                        <div className="controls">

                            <div className="control-option">
                                <strong>Top-Right</strong>
                                <input type="range"
                                    name=""
                                    id="rangeTopRight"
                                    value={this.state.topright}
                                    onChange={this.handleRightTopRadius} />
                            </div>

                            <div className="control-option">
                                <strong>Top-Left</strong>
                                <input type="range"
                                    name=""
                                    id=""
                                    value={this.state.topleft}
                                    onChange={this.handleLeftTopRadius} />
                            </div>

                            <div className="control-option">
                                <strong>Bottom-Right</strong>
                                <input type="range"
                                    name=""
                                    id=""
                                    value={this.state.bottomright}
                                    onChange={this.handleRightBottomRadius} />
                            </div>

                            <div className="control-option">
                                <strong>Bottom-Left</strong>
                                <input type="range"
                                    name=""
                                    id=""
                                    value={this.state.bottomleft}
                                    onChange={this.handleLeftBottomRadius} />
                            </div>

                        </div>

                    </div>


                    <div className='result'>
                        <p>
                            <strong>
                                -webkit-border-radius: {this.state.topleft}px
                                 {this.state.topright}px
                                    {this.state.bottomright}px
                                    {this.state.bottomleft}px;
                            </strong>
                            <strong>
                                -moz-border-radius: 20px;
                            </strong>
                            <strong>
                                border-radius: 20px;
                            </strong>
                        </p>
                    </div>


                </div>
            </div>
        );
    }
}


export default App;
