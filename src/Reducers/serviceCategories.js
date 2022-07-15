import { getServiceCategories } from "../Services/serviceCategories";
import { listingReducer } from "./utils/listingReducer";

const { reducer, actions, types } = listingReducer({
  name: `serviceCategories`,
  getApi: getServiceCategories,
});

const serviceCategories = reducer;
export { serviceCategories, actions, types };
