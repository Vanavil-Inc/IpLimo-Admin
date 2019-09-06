import React, { Component } from "react";
import Banner from "./Banner";
import FileUpload from "./FileUpload";
import { Redirect } from "react-router";
import ls from "local-storage";
import Header from "./Header";
import Footer from "./Footer";
import HttpRequest from "./HttpRequest";
import Loader from "./Loader";
import BaseFleet from "./BaseFleet";
import AdHoc from "./AdHoc";
import Payment from "./Payment";
import ReportsDetail from "./ReportsDetail";

// import Loader from './Loader';
class Home extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      scheduleResponse: {},
      isTrue: false,
      isLoading: false,

      isLogIn: ls.get("isLogin") === "true" ? true : false
    };
  }

  fileUploadResult = result => {
    this.setState({
      scheduleResponse: result,
      isTrue: true
    });
  };

  componentDidMount() {
    document.title = "IpLimo - Home";
  }
  getShitList = () => {
    HttpRequest.httpSampleGET(
      "http://34.229.17.37:8083/api/getalltimeslots"
    ).then(data => {
      console.log(data);
      this.setState({
        isTrue: true,
        isLoading: false,
        scheduleResponse: data.result
      });
    });
  };

  //   http://api.themoviedb.org/3/movie/popular?api_key=824e6813a740068e24a630f5083b0811

  render() {
    if (!this.state.isLogIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container home-container">
        <Header /> <div>{window.innerWidth <= 768} </div>
        {/* {window.innerWidth >= 768 ? <Banner /> : null} */}
        {/* FileUpload */}
        <Banner />
        <section>
          <FileUpload fileUpload={this.fileUploadResult} />
          <div className="container">
            <Loader loading={this.state.isLoading} />
            {this.state.isTrue ? (
              <div className="grid-container ">
                {this.state.scheduleResponse.map((shift, index) => (
                  <div
                    id={index}
                    key={index}
                    style={styles.gridrounder}
                    className="pt-2 pb-2 mb-sm-3"
                  >
                    <div className="h-text">
                      <h4>{shift.date}</h4>
                    </div>

                    <div className="shift-details">
                      <div className="shift">{shift.shift_name1}</div>
                      <div className="value">- {shift.car_req1}</div>
                      <div className="shift">{shift.shift_name2}</div>
                      <div className="value"> - {shift.car_req2}</div>
                      <div className="shift">{shift.shift_name3}</div>
                      <div className="value"> - {shift.car_req3}</div>
                      <div className="shift">{shift.shift_name4}</div>
                      <div className="value"> - {shift.car_req4}</div>
                      <div className="h-text1">
                        Remarks - &nbsp; &nbsp;{shift.remarks}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
        <BaseFleet />
        <AdHoc />
        <Payment />
        <ReportsDetail />
        <Footer id="footer" />
      </div>
    );
  }
}
export default Home;

let styles = {
  gridrounder: {
    border: "1px solid gray",
    borderRadius: "10px"
  }
};
