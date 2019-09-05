import React, { Component } from "react";
import * as Util from "../constant/Utils";
import { Form, Button } from "react-bootstrap";
import HttpRequest from "./HttpRequest";
import Alert from "./Alert";

const formData = new FormData();

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filePath: null,
      file: null,
      msg: ""
    };
    this.child = React.createRef();
  }
  handleChange = event => {
    try {
      this.setState({
        file: event.target.files[0],
        filePath: event.target.files[0].name
      });
    } catch (e) {
      //error
    }
  };

  returnShiftResult = shiftDetail => {
    this.props.fileUpload(shiftDetail);
  };

  uploadShift = e => {
    e.preventDefault();
    console.log(this.state.filePath);
    formData.append("file", this.state.file);

    try {
      if (formData !== undefined && this.state.filePath !== null) {
        HttpRequest.httpPOST("/shiftupload", formData).then(data => {
          console.log(data);
          formData.delete("file");
          this.setState({
            filePath: null,
            isLoading: false,
            shiftDetail: null
          });
          try {
            if (data != null && data.success) {
              this.setState({
                home: true
              });
              this.returnShiftResult(data.result);
            } else {
              this.child.current.enableError(data.message);
            }
          } catch (e) {
            console.log(e);
          }
        });
      } else {
        console.log("Non Empty block");
        //error
        this.setState({
          isLoading: false,
          shiftDetail: null
        });
        this.child.current.enableError(Util.CHOOSE_FILE);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <section id="fileUpload">
        <div className="input-group d-block">
          {/* <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div> */}

          <h3 className="text-center mb-3 mt-5">{Util.browse_file} </h3>

          <Form
            encType="multipart/form-data"
            className="col-xl-4 col-md-8 col-sm-10 col-centered  text-center"
          >
            <Alert ref={this.child} msg={this.state.msg} />
            <div className="custom-file col-centered text-center w-100 ">
              <input
                type="file"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                name="file"
                onChange={this.handleChange}
                className="custom-file-input"
                aria-describedby="inputGroupFileAddon01"
              />
              <label
                className="custom-file-label  text-left"
                htmlFor="inputGroupFile01"
              >
                {this.state.filePath != null
                  ? this.state.filePath
                  : "Choose file"}
              </label>
            </div>
            <div className="col-centered mt-4 mb-5 text-center">
              <Button
                className="input-group-text d-inline"
                id="fileUpload"
                onClick={this.uploadShift}
              >
                Upload
              </Button>
            </div>
          </Form>
        </div>
      </section>
    );
  }
}

export default FileUpload;
