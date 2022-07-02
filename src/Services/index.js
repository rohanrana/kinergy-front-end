//@flow
// import store from "app/store";
import axios from "axios";
import { loadState } from "../App/localStorage";

export const authTokenKey = "AUTH_TOKEN";
// const dstore = store.dis
export const responseHeaderKeys = {
  pagination: "x-pagination",
};

const apiBaseUrls = {
  prod: "http://18.235.179.99:3000/api/v1",
  dev: "http://18.235.179.99:3000/api/v1",
  stage: "http://18.235.179.99:3000/api/v1",
};

const webSocketURL = {
  prod: "wss://api.alldaydr.com",
  dev: "wss://dev-api.alldaydr.com",
  stage: "wss://staging-api.alldaydr.com",
};

export const appConfig = {
  mockEnv: false,
};

const react_app_env = {
  prod: "prod",
  dev: "dev",
  stage: "stage",
};

let baseUrl = apiBaseUrls.dev;
let baseWebSocketURL = webSocketURL.dev;
if (process.env.REACT_APP_ENV === react_app_env.stage) {
  baseUrl = apiBaseUrls.stage;
  baseWebSocketURL = webSocketURL.stage;
} else if (process.env.REACT_APP_ENV === react_app_env.prod) {
  baseUrl = apiBaseUrls.prod;
  baseWebSocketURL = webSocketURL.prod;
}
export type Irequest = {
  subUrl: string,
  method?: string,
  data?: object,
  params?: object,
  headers?: object,
};

export const get = (request) => {
  return commonFetch({ method: "get", ...request });
};

export const post = (request) => {
  return commonFetch({ method: "post", ...request });
};

export const patch = (request) => {
  return commonFetch({ method: "patch", ...request });
};

export const put = (request) => {
  return commonFetch({ method: "put", ...request });
};

export const deletee = (request) => {
  return commonFetch({ method: "delete", ...request });
};
export const get2 = (request) => {
  return commonFetch2({ method: "get", ...request });
};

export const abortSignal = axios.CancelToken.source();

const commonFetch = (request: Irequest) => {
  // axios.interceptors.request.use(
  //   (config) => {
  //     // perform a task before the request is sent

  //     return config;
  //   },
  //   (error) => {
  //     // handle the error

  //     return Promise.reject(error);
  //   }
  // );
  // axios.interceptors.response.use((response) => {
  //   // do something with the response data
  //   const { data } = response;
  //   if (data.status === 950 || data.status === 419) {
  //     localStorage.clear();
  //     // history.push("/");
  //     window.location.href ="/signin"
  //     // navigateToIndex();
  //     // store.dispatch(navigateToIndex());
  //     // this.props.history.push("/");
  //     // return false
  //     // return Promise.resolve(response);
  //   }
  //   return response;
  // });

  const {
    subUrl,
    method,
    data = {},
    params = {},
    headers = {},
    isOnlyURL,
    isEMDR,
  } = request;
  let url = getFullUrl(subUrl);
  let passedHeaders = headers;
  let commonHeaders = getCommonHeaders();

  if (data.authToken && isEMDR) {
    commonHeaders = getCommonHeaders(data.authToken, data);
    delete data[`authToken`];
  }

  if (params.authToken && isEMDR) {
    commonHeaders = getCommonHeaders(params.authToken, data);
    delete params[`authToken`];
  }

  if (isOnlyURL) {
    url = subUrl;
    passedHeaders = {};
    commonHeaders = {};
  }

  // if (subUrl === "/appointments.json") {
  //   commonHeaders = getCommonHeaders(true);
  // }

  // var arrStr = encodeURIComponent(JSON.stringify(params))

  return axios({
    method,
    url,
    data,
    // cancelToken: abortSignal.token,
    headers: { ...commonHeaders, ...passedHeaders },
    params,
  }).then((response) => {
    //   console.log("API CALLED")
    if (isOnlyURL) {
      if (response) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    } else {
      if (handleResponseStatus(response)) {
        return Promise.resolve(response);
      } else {
        // handleUnauthorizedResponses(response);

        return Promise.reject(response);
      }
    }
  });
};
const commonFetch2 = (request: Irequest) => {
  // axios.interceptors.request.use(
  //   (config) => {
  //     // perform a task before the request is sent

  //     return config;
  //   },
  //   (error) => {
  //     // handle the error

  //     return Promise.reject(error);
  //   }
  // );
  // axios.interceptors.response.use((response) => {
  //   // do something with the response data
  //   const { data } = response;
  //   if (data.status === 950 || data.status === 419) {
  //     localStorage.clear();
  //     // history.push("/");
  //     window.location.href ="/signin"
  //     // navigateToIndex();
  //     // store.dispatch(navigateToIndex());
  //     // this.props.history.push("/");
  //     // return false
  //     // return Promise.resolve(response);
  //   }
  //   return response;
  // });

  const { subUrl, method, data = {} } = request;

  // const url = getFullUrl(subUrl);
  // let commonHeaders = getCommonHeaders();

  // if (subUrl === "/appointments.json") {
  //   commonHeaders = getCommonHeaders(true);
  // }

  // var arrStr = encodeURIComponent(JSON.stringify(params))

  return axios({
    method,
    subUrl,
    data,
    // headers: { ...commonHeaders, ...headers },
    // params,
  }).then((response) => {
    // alert()
    // store.dispatch({
    // 	API
    // })
    console.log("API Called");
    if (handleResponseStatus(response)) {
      return Promise.resolve(response);
    } else {
      // handleUnauthorizedResponses(response);
      return Promise.reject(response);
    }
  });
};

// const handleUnauthorizedResponses = (response) => {
//   if (response.data.status === 950 || response.data.status === 419) {
//     localStorage.clear();
//     history.push("/signin");
//     // history.
//     // store.dispatch(navigateToIndex());
//     // navigateToindexFromToken();
//   }
// };
const handleResponseStatus = (response) => {
  if (response && response.data && response.data.response_code === 200) {
    return true;
  }
  return false;
};

const getCommonHeaders = (EMDRtoken) => {
  console.log("EMDRtoken", EMDRtoken);
  const state = loadState();
  let token = null;
  if (state && state.localStore && state.localStore.token) {
    token = state.localStore.token;
  }
  if (state && state.localStore && state.localStore.reset_pass_token) {
    token = state.localStore.reset_pass_token;
  }
  return {
    "Content-Type": "application/json",
    [authTokenKey]: EMDRtoken ? EMDRtoken : token,
  };
};
const getFullUrl = (url) => {
  return `${baseUrl}${url}`;
};

export const getAnyTokenFromState = (state) => {
  const { localStore, session } = state;
  return {
    [authTokenKey]: localStore.token || session.token,
  };
};

export const getBaseUrl = () => {
  let baseUrl = apiBaseUrls.dev;
  if (process.env.REACT_APP_ENV === react_app_env.stage) {
    baseUrl = apiBaseUrls.stage;
  } else if (process.env.REACT_APP_ENV === react_app_env.prod) {
    baseUrl = apiBaseUrls.prod;
  }

  return baseUrl;
};
export { baseWebSocketURL };
