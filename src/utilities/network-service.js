import axios from "axios";
import Appstore from "../App/store";
// import { reportIssueAPI } from "../services/reportissue";
import { errorToast, verifyObject } from "./utils";
// import { unsubscribe } from "../reducers/actionCableData";

const interCeptors = {
  setupInterceptors: (store, history) => {
    // Add a response interceptor
    return axios.interceptors.response.use(
      (response) => {
        // do something with the response data
        console.log("API INTERCEPTORS CALLED");

        const { data } = response;
        // let errorObj = {
        //   status: data.status,
        //   message: data.message,
        // };
        let ApiCallTimerMins = verifyObject(
          store.getState(),
          "dynamicTab.ApiCallTimerMins",
          null
        );
        console.log("Tabs", ApiCallTimerMins);

        if (ApiCallTimerMins === 0) {
          Appstore.dispatch({ type: "CALL_API_TIMER", payload: 1 });
        }
        // else {
        //   // Appstore.dispatch({ type: "CALL_API_TIMER", payload: 0 });
        // }
        // if (data.status === 200) {
        // }

        if (data.status !== 200) {
          // let payload = {
          //   error_generator: "tokbox",
          //   platform: "web",
          //   error_log: errorObj,
          // };
          console.log("Error....", response);
          //  reportIssueAPI(payload).then().catch()
        }

        if (data.status === 950 || data.status === 419) {
          history.push("/");
          localStorage.clear();
          Appstore.dispatch({ type: "CLEAR_LOCAL_STATE" });
          // Appstore.dispatch(unsubscribe());
          document.oncontextmenu = document.oncontextmenu = function () {
            return true;
          };
          document.oncopy = document.oncopy = function () {
            return true;
          };
          return response;
        }
        if (data.status === 304) {
          errorToast({ content: data.message || "Error" });
        }
        return response;
      },
      (error) => {
        if (error.message === "Network Error") {
        }
      }
    );
  },
};

export default interCeptors;
