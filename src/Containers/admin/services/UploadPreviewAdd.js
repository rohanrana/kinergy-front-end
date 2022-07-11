import React from "react";
import { Button } from "react-bootstrap";

class UploadPreviewAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null, showFile: null };
    // this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
   onChange=(event)=> {
    this.setState(
      {
        file: event.target.files[0],
        showFile: URL.createObjectURL(event.target.files[0]),
      },
      () => {
        console.log("file", this.state.file, this.props);
        if (
          this.props.handleFile &&
          typeof this.props.handleFile === "function"
        ) {
          console.log("file", this.state.file);
          this.props.handleFile(this.state.file);
        }
      }
    );
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <div className="pos-rel d-flex align-items-center justfy-bw">
          <span>Upload Image for Service Category*</span>
          <div className="file_sc">
            <input type="file" onChange={this.onChange} className="file_inp" />
            <Button className="btn btn-theme pl-2 pr-2" id="upload_btn">
              <i className="fa-solid fa-cloud-arrow-up"></i> Upload
            </Button>
          </div>
        </div>
        <div className="img_up" id="add_sc">
          {this.state.file && (
            <div className="dlBtn">
              <button onClick={this.resetFile}>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          )}
          <img alt="no" src={this.state.showFile} />
        </div>
      </div>
    );
  }
}

export default UploadPreviewAdd;
