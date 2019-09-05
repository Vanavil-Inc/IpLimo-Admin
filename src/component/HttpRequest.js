import axios from "axios";

//const BASE_URL = "http://localhost:8082/api";
const BASE_URL = "http://34.229.17.37:8083/api";

let Config = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
    
  }
};

export default class HttpRequest {
  static httpGET(url) {
    return axios.get(BASE_URL + url, Config).then(res => {
      console.log("GET DATA");
      console.log(res.data);
      return res.data;
    });
  }
  static httpSampleGET(url) {
    return axios.get(url, Config).then(res => {
      console.log("GET DATA");
      console.log(res.data);
      return res.data;
    });
  }

  static async httpPOST(url, params) {
    console.log(params);
    console.log(url);
    return axios
      .post(BASE_URL + url, params, Config)
      .then(function(res) {
        console.log("POST DATA");
        console.log(res.data);
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

// axios
//   .post("/user", {
//     firstName: "Fred",
//     lastName: "Flintstone"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
