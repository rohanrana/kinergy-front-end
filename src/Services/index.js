//@flow
// import store from "app/store";
import axios from "axios";
import { loadState } from "../App/localStorage";

export const authTokenKey = "AUTH_TOKEN";
// const dstore = store.dis
export const responseHeaderKeys = {
  pagination: "x-pagination",
};

export const baseURL = `http://18.235.179.99:3000`;

const apiBaseUrls = {
  prod: `${baseURL}/api/v1`,
  dev: `${baseURL}/api/v1`,
  stage: `${baseURL}/api/v1`,
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
  // let finalRequest = { ...request, data: { ...request.data, token: token } }

  return commonFetch({ method: "get", ...request });
};

export const post = (request) => {
  return commonFetch({ method: "post", ...request });
};

export const patch = (request) => {
  // let finalRequest = { ...request, data: { ...request.data, token: token } }
  return commonFetch({ method: "patch", ...request });
};

export const put = (request) => {
  return commonFetch({ method: "put", ...request });
};

export const deletee = (request) => {
  return commonFetch({ method: "delete", ...request });
};

export const postFormData = (request) => {
  return commonFetchFormData({ method: "post", ...request });
};

export const abortSignal = axios.CancelToken.source();

const commonFetchFormData = (request: Irequest) => {
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
    // isFile,
    isEMDR,
    isOnlyURL,
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
  // let token = getToken();

  return axios({
    method,
    url,
    data,
    // cancelToken: abortSignal.token,
    headers: { ...commonHeaders, ...passedHeaders },
    // ...forTokenParams,
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
    isFile,
    isEMDR,
    isOnlyURL,
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
  let token = getToken();

  console.log("token", data, token);
  let forTokenParams = {
    data: data,
  };
  if (token) {
    if (isFile) {
      forTokenParams = {
        data: data,
        params: params,
      };
    }
    if (method === "post") {
      forTokenParams = {
        data: { ...data, token: token },
        params: params,
      };
    }

    if (method === "get") {
      forTokenParams = {
        data: { params: { ...params, token: token }, data: data },
      };
    }
  }

  return axios({
    method,
    url,
    // data: { ...data, token: token },
    // cancelToken: abortSignal.token,
    headers: { ...commonHeaders, ...passedHeaders },
    ...forTokenParams,
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

const getCommonHeaders = () => {
  const state = loadState();
  let token = null;
  if (state && state.localStore && state.localStore.token) {
    token = state.localStore.token;
  }

  return {
    "Content-Type": "application/json",
    [authTokenKey]: token,
  };
};

const getToken = () => {
  const state = loadState();
  let token = null;
  if (state && state.localStore && state.localStore.token) {
    token = state.localStore.token;
  }
  return token;
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
