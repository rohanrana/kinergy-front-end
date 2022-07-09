import React, { Component } from "react";
import FontPicker from "font-picker-react";
 
export default class FontsPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFontFamily: "Font Name",
        };
    }
 
    render() {
        return (
            <FontPicker
                    apiKey="AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k"
                    activeFontFamily={this.state.activeFontFamily}
                    onChange={(nextFont) =>
                        this.setState({
                            activeFontFamily: nextFont.family,
                        })
                    }
                />
        );
    }
}
