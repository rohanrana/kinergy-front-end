import React from "react";
import { Button } from "react-bootstrap";

class UploadPreviewEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: 'https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Images.png' };
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
          
          <div className="pos-rel d-flex align-items-center justfy-bw">
            <span>Upload Image for Service Category*</span>
            <div className="file_sc">
              <input type="file" onChange={this.onChange} className="file_inp" />
              <Button className="btn btn-theme pl-2 pr-2" id="upload_btn"><i className="fa-solid fa-cloud-arrow-up"></i> Upload</Button>
            </div>
          </div>
          <div className="img_up">
            {this.state.file && (
              <div className="dlBtn">
                <button onClick={this.resetFile}><i className="fa-solid fa-circle-xmark"></i></button>
              </div>
            )}
            <img alt="" src={this.state.file} />
          </div>
        </div>
      );
    }
}
  
export default UploadPreviewEdit;