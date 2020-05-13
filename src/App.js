import React, { Component } from 'react';
import './global.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pixelBorder: {
                topright: '0',
                topleft: '0',
                bottomright: '0',
                bottomleft: '0',
            },
            porcentBorder: {
                topright: '0',
                topleft: '0',
                bottomright: '0',
                bottomleft: '0',
            }


        }

        this.handlePixelBorder = this.handlePixelBorder.bind(this);
    }


    handlePixelBorder(event) {

        const statePixel = this.state.pixelBorder;

        statePixel[event.target.name] = event.target.value

        this.setState({ pixelBorder: statePixel })

        const elementBox = document.getElementById('box')

        elementBox.style.borderRadius = `

            ${this.state.pixelBorder.topleft}px 
            ${this.state.pixelBorder.topright}px
            ${this.state.pixelBorder.bottomright}px
            ${this.state.pixelBorder.bottomleft}px   
        `

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
                                <input
                                    type="range"
                                    name="topright"
                                    id="rangeTopRight"
                                    value={this.state.pixelBorder.topright}
                                    onChange={this.handlePixelBorder} />
                            </div>

                            <div className="control-option">
                                <strong>Top-Left</strong>
                                <input
                                    type="range"
                                    name="topleft"
                                    id=""
                                    value={this.state.pixelBorder.topleft}
                                    onChange={this.handlePixelBorder} />
                            </div>

                            <div className="control-option">
                                <strong>Bottom-Right</strong>
                                <input
                                    type="range"
                                    name="bottomright"
                                    id=""
                                    value={this.state.pixelBorder.bottomright}
                                    onChange={this.handlePixelBorder} />
                            </div>

                            <div className="control-option">
                                <strong>Bottom-Left</strong>
                                <input
                                    type="range"
                                    name="bottomleft"
                                    id=""
                                    value={this.state.pixelBorder.bottomleft}
                                    onChange={this.handlePixelBorder} />
                            </div>

                        </div>

                    </div>


                    <div className='result'>

                        <strong>
                            {
                                `-moz-border-radius: 
                                ${this.state.pixelBorder.topleft}px
                                ${this.state.pixelBorder.topright}px
                                ${this.state.pixelBorder.bottomright}px
                                ${this.state.pixelBorder.bottomleft}px;`
                            }
                        </strong>
                        <strong>
                            {
                                `-ms-border-radius: 
                                ${this.state.pixelBorder.topleft}px
                                ${this.state.pixelBorder.topright}px
                                ${this.state.pixelBorder.bottomright}px
                                ${this.state.pixelBorder.bottomleft}px;`
                            }
                        </strong>
                        <strong>
                            {
                                `-webkit-border-radius: 
                                ${this.state.pixelBorder.topleft}px
                                ${this.state.pixelBorder.topright}px
                                ${this.state.pixelBorder.bottomright}px
                                ${this.state.pixelBorder.bottomleft}px;`
                            }
                        </strong>
                        <strong>
                            {
                                `border-radius: 
                                ${this.state.pixelBorder.topleft}px
                                ${this.state.pixelBorder.topright}px
                                ${this.state.pixelBorder.bottomright}px
                                ${this.state.pixelBorder.bottomleft}px;`
                            }
                        </strong>



                    </div>


                </div>
            </div>
        );
    }
}


export default App;
