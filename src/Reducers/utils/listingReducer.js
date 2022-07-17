import {
  getErrorObject,
  normalizeResponseWithPagination,
  getExtraDataFromListing,
} from "../../utilities/utils";
import { errorToast } from "../../utilities/utils";
// import { errorToast } from "utilities/utils";

type IListingReducerParams = {
  name: string,
  getApi: () => {},
};

type IListingReducerReturns = {
  reducer: () => {},
  types: {},
  actions: {},
};

export const listingReducer = (
  params: IListingReducerParams
): IListingReducerReturns => {
  const { name, getApi, combinedWith } = params;
  const types = {
    ON_REQUEST: `${name}/ON_REQUEST`,
    ON_SUCCESS: `${name}/ON_SUCCESS`,
    ON_FAILURE: `${name}/ON_FAILURE`,
    ON_SEARCH_REQUEST: `${name}/ON_SEARCH_REQUEST`,
    ON_SEARCH_SUCCESS: `${name}/ON_SEARCH_SUCCESS`,
    ON_SEARCH_FAILURE: `${name}/ON_SEARCH_FAILURE`,
    ON_FILTER_APPLY_REQUEST: `${name}/ON_FILTER_APPLY_REQUEST`,
    ON_FILTER_APPLY_SUCCESS: `${name}/ON_FILTER_APPLY_SUCCESS`,
    ON_FILTER_APPLY_FAILURE: `${name}/ON_FILTER_APPLY_FAILURE`,
    ON_PAGE_CHANGE_REQUEST: `${name}/ON_PAGE_CHANGE_REQUEST`,
    ON_PAGE_CHANGE_SUCCESS: `${name}/ON_PAGE_CHANGE_SUCCESS`,
    ON_PAGE_CHANGE_FAILURE: `${name}/ON_PAGE_CHANGE_FAILURE`,
    ON_MODIFY_AN_ITEM: `${name}/ON_MODIFY_AN_ITEM`,
    RESET_STATE: `${name}/RESET_STATE`,
    RESET_FILTER_STATE: `${name}/RESET_FILTER_STATE`,
  };

  const initialState = {
    ids: [],
    data: {},
    isLoading: false,
    error: null,
    search: null,
    pagination: {
      total: 0,
      total_pages: 0,
      previous_page: 0,
      next_page: 0,
    },
    extraData: {},
    filters: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.ON_REQUEST: {
        const { stateToHydrate } = action.payload;
        return {
          ...initialState,
          ...stateToHydrate,
          isLoading: true,
        };
      }
      case types.ON_SEARCH_REQUEST: {
        const { search } = action.payload;
        return {
          ...state,
          isLoading: true,
          search,
          pagination: initialState.pagination,
        };
      }
      case types.ON_PAGE_CHANGE_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case types.ON_FILTER_APPLY_REQUEST: {
        const { filters } = action.payload;
        return {
          ...state,
          isLoading: true,
          filters: {
            ...state.filters,
            ...filters,
          },
          pagination: initialState.pagination,
        };
      }
      case types.ON_SUCCESS:
      case types.ON_SEARCH_SUCCESS:
      case types.ON_FILTER_APPLY_SUCCESS:
      case types.ON_PAGE_CHANGE_SUCCESS: {
        const { ids, data, pagination, extraData } = action.payload;
        return {
          ...state,
          isLoading: false,
          error: null,
          ids,
          data,
          extraData,
          pagination,
        };
      }
      case types.RESET_FILTER_STATE: {
        return {
          ...state,
          filters: {},
          // search: {},
        };
      }
      case types.ON_FAILURE:
      case types.ON_SEARCH_FAILURE:
      case types.ON_FILTER_APPLY_FAILURE:
      case types.ON_PAGE_CHANGE_FAILURE: {
        const { error } = action.payload;
        return {
          ...state,
          isLoading: false,
          data: null,
          extraData: null,
          ids: [],
          error,
        };
      }
      case types.ON_MODIFY_AN_ITEM: {
        const { id, objectTobeModified } = action.payload;
        return {
          ...state,
          data: {
            ...state.data,
            [id]: {
              ...state.data[id],
              ...objectTobeModified,
            },
          },
        };
      }
      case types.RESET_STATE: {
        return initialState;
      }
      default:
        return state;
    }
  };

  const getReqParams = ({ state, params }) => {
    let reducerState = {};

    if (combinedWith) {
      reducerState = state[combinedWith][name];
    } else {
      reducerState = state[name];
    }

    const { filters, search } = reducerState;
    const reqParams = { ...params, ...filters, search };
    return reqParams;
  };

  /**
   *
   * @description Request the list with initialState (without any filters/search/pagination)
   * @param {object} params
   * @param {object=} params.stateToHydrate load the state with values(filters/search/pagination/data/etc)
   */
  const onRequest = (params, props, is_from_unverified) => {
    let stateToHydrate = {};
    if (params.stateToHydrate) {
      stateToHydrate = params.stateToHydrate;
    }
    return async (dispatch) => {
      dispatch({
        type: types.ON_REQUEST,
        payload: { stateToHydrate },
      });
      try {
        const response = await getApi(params);
        console.log("list Response", response)
        const extraData = getExtraDataFromListing(response);
        const { data, ids, pagination } = normalizeResponseWithPagination({
          response,
        });

        dispatch({
          type: types.ON_SUCCESS,
          payload: { data, ids, pagination, extraData },
        });
      } catch (error) {
        const { message } = getErrorObject(error);
        dispatch({
          type: types.ON_FAILURE,
          payload: { error: message },
        });
        console.log("IN ERROR", error);
        errorToast({ content: message });
      }
    };
  };

  const onSearch = (params) => {
    return async (dispatch, getState) => {
      dispatch({
        type: types.ON_SEARCH_REQUEST,
        payload: { search: params.search },
      });
      try {
        const reqParams = getReqParams({ state: getState(), params });
        const response = await getApi(reqParams);
        const extraData = getExtraDataFromListing(response);
        const { data, ids, pagination } = normalizeResponseWithPagination({
          response,
        });
        dispatch({
          type: types.ON_SEARCH_SUCCESS,
          payload: { data, ids, pagination, extraData },
        });
      } catch (error) {
        const { message } = getErrorObject(error);
        dispatch({
          type: types.ON_SEARCH_FAILURE,
          payload: { error: message },
        });
      }
    };
  };

  type IFilterParams = {
    filters: {},
  };
  const onFilterChange = (params: IFilterParams) => {
    const { filters } = params;
    return async (dispatch, getState) => {
      dispatch({
        type: types.ON_FILTER_APPLY_REQUEST,
        payload: { filters },
      });

      if (filters && filters.search) {
        dispatch({
          type: types.ON_SEARCH_REQUEST,
          payload: { search: filters.search },
        });
      } else {
        dispatch({
          type: types.ON_SEARCH_REQUEST,
          payload: { search: "" },
        });
      }

      try {
        const newParams = { ...params, ...filters };
        newParams.filters = undefined;
        let payload = {
          ...filters,
        };

        const response = await getApi(payload);
        const extraData = getExtraDataFromListing(response);
        const { data, ids, pagination } = normalizeResponseWithPagination({
          response,
        });
        dispatch({
          type: types.ON_FILTER_APPLY_SUCCESS,
          payload: { data, ids, pagination, extraData },
        });
      } catch (error) {
        const { message } = getErrorObject(error);
        dispatch({
          type: types.ON_FILTER_APPLY_FAILURE,
          payload: { error: message },
        });
      }
    };
  };

  const onPageChange = (params) => {
    return async (dispatch, getState) => {
      dispatch({
        type: types.ON_PAGE_CHANGE_REQUEST,
        payload: {},
      });
      try {
        const reqParams = getReqParams({ state: getState(), params });
        const response = await getApi(reqParams);
        const extraData = getExtraDataFromListing(response);
        const { data, ids, pagination } = normalizeResponseWithPagination({
          response,
        });
        dispatch({
          type: types.ON_PAGE_CHANGE_SUCCESS,
          payload: { data, ids, pagination, extraData },
        });
      } catch (error) {
        const { message } = getErrorObject(error);
        dispatch({
          type: types.ON_PAGE_CHANGE_FAILURE,
          payload: { error: message },
        });
      }
    };
  };

  const resetState = () => {
    return {
      type: types.RESET_STATE,
    };
  };
  const resetFilterState = () => {
    return {
      type: types.RESET_FILTER_STATE,
    };
  };
  const factory: IListingReducerReturns = {
    reducer,
    types,
    actions: {
      onRequest,
      onSearch,
      onPageChange,
      onFilterChange,
      resetState,
      resetFilterState,
    },
  };

  return factory;
};
