import React from "react";
import { Button } from "react-bootstrap";

class UploadPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: null };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }
    onChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
  
    resetFile(event) {
      event.preventDefault();
      this.setState({ file: null });
    }
    render() {
      return (
        <div>
            <div className="pos-rel">
                  <input type="file" onChange={this.onChange} />
                  <Button className="btn btn-theme pl-2 pr-2" id="upload_btn"></Button>
            </div>
          {this.state.file && (
            <div style={{ textAlign: "center" }}>
              <button onClick={this.resetFile}>Remove File</button>
            </div>
          )}
          <img src={this.state.file} />
        </div>
      );
    }
}
  
export default UploadPreview;