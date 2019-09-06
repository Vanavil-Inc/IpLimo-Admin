import axios from "axios";

//const BASE_URL = "http://localhost:8082/admin";
const BASE_URL = "http://54.90.235.248:8082/admin";

let Config = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
};

export default class HttpRequest {
  static httpGET(url) {
    return axios.get(BASE_URL + url, Config).then(res => {
      return res.data;
    });
  }
  static httpSampleGET(url) {
    return axios.get(url, Config).then(res => {
      return res.data;
    });
  }

  static async httpPOST(url, params) {
    return axios
      .post(BASE_URL + url, params, Config)
      .then(function(res) {
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
