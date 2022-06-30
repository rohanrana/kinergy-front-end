import { toast, cssTransition } from "react-toastify";
import { responseHeaderKeys } from "../Services/index";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { get, isArray } from "lodash";

const Zoom = cssTransition({
  enter: "zoomIn",
  exit: "zoomOut",
  duration: 300,
});

const commonDateFormats = {
  input: {
    dateAndTime: "",
    date: "YYYY-MM-DD",
    time: "",
  },
  output: {
    dateAndTime: "Do MMM YYYY, h:mm a",
    date: "Do MMM YYYY",
    time: "h:mm a",
  },
};

export const dateFormats = {
  common: commonDateFormats,
  customers: {
    input: {
      created_at: "",
      date_of_birth: "YYYY-MM-DD",
    },
    output: {
      created_at: commonDateFormats.output.dateAndTime,
      date_of_birth: commonDateFormats.output.date,
    },
  },
};

export const formatDate = (params) => {
  const { date, format } = params;
  if (!date) {
    return null;
  }

  return moment(date, format.input).format(format.output);
};

export const formatFullDateTime = ({ date }) => {
  if (!date) {
    return null;
  }
  return formatDate({
    date,
    format: {
      input: commonDateFormats.input.dateAndTime,
      output: commonDateFormats.output.dateAndTime,
    },
  });
};

export const formatJustDate = ({ date }) => {
  if (!date) {
    return null;
  }
  return formatDate({
    date,
    format: {
      input: commonDateFormats.input.date,
      output: commonDateFormats.output.date,
    },
  });
};

export const getErrorObject = (error) => {
  let message = "Error!";
  console.log("getErrorObject", error)
  if (error && error.data && error.data.response_message) {
    // API server error message
    message = error.data.response_message;
  } else if (error && error.response_message) {
    // js error message
    message = error.response_message;
  }
  return {
    message,
  };
};

export const errorToast = ({ content, options = { closeOnClick: true, } }) => {
  if (!content) {
    return;
  }
  return toast.error(content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    containerId: "container_main",
    ...options
  });
};

export const successToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast.success(content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    containerId: "container_main",
    ...options
  });
};

export const infoToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: "info",
    ...options,
  });
};

export const warningToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: "warning",
    ...options,
  });
};

export const normalize = ({ data, key = "id" }) => {
  let obj = {};
  let ids = [];
  data &&
    data.length > 0 &&
    data.forEach((element, i) => {
      if (element[key]) {
        obj[element[key]] = element;
        ids.push(element[key]);
      } else {
        obj[i] = element;
        ids.push(i);
      }
    });
  // console.log("IBJ", ids);
  return { data: obj, ids };
};
export const generateParamsURL = (data) => {
  return "?q=" + JSON.stringify(data);
};
export const normalizeByGroup = ({ data, key, groupKey }) => {
  let obj = {};
  let ids = [];
  let group = {};
  let groupIds = new Set();
  data.forEach((element) => {
    obj[element[key]] = element;
    groupIds.add(element[groupKey]);
    if (!group[element[groupKey]]) {
      group[element[groupKey]] = [];
    }
    group[element[groupKey]].push(element[key]);
    ids.push(element[key]);
  });
  return { data: obj, ids, groupIds: [...groupIds], group };
};

export const currencies = {
  inr: { key: "inr", symbol: "₹" },
  euro: { key: "euro", symbol: "€" },
  pound: { key: "pound", symbol: "£" },
};

export const normalizeResponseWithPagination = ({ response, key = "id" }) => {
  const dataArr = response.data.data ? response.data.data : [];
  // console.log("dataArr", dataArr);

  //Current workaround
  let resPagination = response.headers[responseHeaderKeys.pagination];
  if (resPagination) {
    resPagination = JSON.parse(resPagination);
  } else {
    resPagination = {
      total: 0,
      total_pages: 0,
      previous_page: null,
      next_page: null,
    };
  }

  const { data, ids } = normalize({ data: dataArr, key });

  const { total, total_pages, previous_page, next_page } = resPagination;

  return {
    data,
    ids,
    pagination: { total, total_pages, previous_page, next_page },
  };
};
let pubNubCr = {};
if (process.env.REACT_APP_ENV === "prod") {
  pubNubCr.publishKey = "pub-c-6d2a67ad-f642-4ab1-948b-e4c4cd2b7087";
  pubNubCr.subscribeKey = "sub-c-f6dcaefe-c0c4-11e8-91cd-c6d399a24064";
} else {
  pubNubCr.publishKey = "pub-c-0817e702-1f50-49bd-b0e3-3473128601f5";
  pubNubCr.subscribeKey = "sub-c-17b49a9a-57fe-11e8-9796-063929a21258";
}

export const chatChannelCreator = ({ order_id, order_type, currentTab }) => {
  // const orderIdTemp = `${order_id}_`;
  // switch (order_type) {
  //   case orderTypes.nhs_medication.key: {
  //     const temp = `${orderIdTemp}nhs_`;
  //     if (currentTab === "doctor") {
  //       return `${temp}${currentTab}_patient`;
  //     } else {
  //       return `${temp}patient_${currentTab}`;
  //     }
  //   }
  //   case orderTypes.private_medication.key: {
  //     const temp = `${orderIdTemp}private_medication_`;
  //     if (currentTab === "doctor") {
  //       return `${temp}${currentTab}_patient`;
  //     } else {
  //       return `${temp}patient_${currentTab}`;
  //     }
  //   }
  //   default:
  //     return;
  // }
};
export const getExtraDataFromListing = (response) => {
  const responseData = response.data;
  const extraData = {};
  for (const key in responseData) {
    if (key !== "data") {
      extraData[key] = responseData[key];
    }
  }
  return extraData;
};

export const verifyObject = (obj, param, defaultValue) => {
  let data = get(obj, param, defaultValue);
  return data;
};

export const modifiedDataObjectToArray = (dataObject) => {
  if (dataObject && typeof dataObject === "object") {
    let rectifiedData = [];
    Object.keys(dataObject).map((key) => rectifiedData.push(dataObject[key]));
    return rectifiedData.reverse();
  } else {
    return [];
  }
};

export const modifiedDataObjectToArrayByIDs = (dataSource) => {
  let dataObject = verifyObject(dataSource, "data", {});
  let ids = verifyObject(dataSource, "ids", []);
  let customizedArray = [];
  if (ids && isArray(ids)) {
    ids.map((id) => {
      customizedArray.push(dataObject[id]);
      return null;
    });
    // console.log("customizedArray",customizedArray)
    return customizedArray;
  } else {
    return [];
  }
};

export const calculateBMI = (fac_obj) => {
  var first_height_value = 0,
    second_height_value = 0,
    final_inches = 0;
  var first_weight_value = 0,
    second_weight_value = 0,
    final_weight = 0;
  if (
    (fac_obj.height_obj.selected_feet !== null ||
      fac_obj.height_obj.selected_centimeter !== null) &&
    (fac_obj.weight_obj.selected_stone !== null ||
      fac_obj.weight_obj.selected_kilogram !== null)
  ) {
    if (fac_obj.height_obj.selected_unit_type === "imperial") {
      if (fac_obj.height_obj.selected_feet !== null) {
        first_height_value = parseInt(
          fac_obj.height_obj.selected_feet.split("")[0],
          10
        );
      }
      if (fac_obj.height_obj.selected_inch !== null) {
        second_height_value = parseInt(
          fac_obj.height_obj.selected_inch.split(" ")[0],
          10
        );
      }

      if (first_height_value !== "") {
        final_inches = first_height_value * 12;
        final_inches += second_height_value;
        final_inches = final_inches * 2.54;
      }
    } else {
      if (fac_obj.height_obj.selected_meter !== null) {
        first_height_value = parseInt(
          fac_obj.height_obj.selected_meter.split(" ")[0],
          10
        );
      }
      if (fac_obj.height_obj.selected_centimeter !== null) {
        second_height_value = parseInt(
          fac_obj.height_obj.selected_centimeter.split(" ")[0],
          10
        );
      }
      if (first_height_value !== "") {
        var temp_calc_value = 0;
        temp_calc_value = first_height_value * 100;
        final_inches = temp_calc_value + second_height_value;
      }
    }
    if (fac_obj.weight_obj.selected_unit_type === "imperial") {
      if (fac_obj.weight_obj.selected_stone) {
        first_weight_value = parseInt(
          fac_obj.weight_obj.selected_stone.split(" ")[0],
          10
        );
      }
      if (fac_obj.weight_obj.selected_pound) {
        second_weight_value = parseInt(
          fac_obj.weight_obj.selected_pound.split(" ")[0],
          10
        );
      }
      // var temp_calc_value = 0;
      temp_calc_value = first_weight_value * 14;
      final_weight = temp_calc_value + second_weight_value;
      final_weight = final_weight * 0.45;
    } else if (fac_obj.weight_obj.selected_unit_type === "metric") {
      if (fac_obj.weight_obj.selected_kilogram) {
        first_weight_value = parseInt(
          fac_obj.weight_obj.selected_kilogram.split(" ")[0],
          10
        );
        final_weight = first_weight_value;
      }
    }
  }

  var answer = 0;
  if (final_inches > 0 && final_weight > 0) {
    var final_count_value = 0,
      temp_value;
    temp_value = final_inches / 100;
    final_count_value = temp_value * temp_value;
    answer = (final_weight / final_count_value).toFixed(2);
    var bmi_type = "";
    if (answer <= 18) {
      bmi_type = "Underweight";
    } else if (answer >= 18.5 && answer < 25) {
      bmi_type = "Normal (healthy weight)	";
    } else if (answer >= 25 && answer < 30) {
      bmi_type = "Overweight";
    } else if (answer >= 30 && answer < 35) {
      bmi_type = "Obese Class I";
    } else if (answer >= 35 && answer <= 40) {
      bmi_type = "Obese Class II";
    } else if (answer > 40) {
      bmi_type = "Obese Class III";
    }

    var bmi_value = answer + " " + bmi_type;

    return bmi_value;
  }
};
export { pubNubCr };
