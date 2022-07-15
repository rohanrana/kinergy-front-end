import { getServiceByCategoryByID } from "../Services/servicesByCateID";
import { listingReducer } from "./utils/listingReducer";

const { reducer, actions, types } = listingReducer({
  name: `servicesByCateID`,
  getApi: getServiceByCategoryByID,
});

const servicesByCateID = reducer;
export { servicesByCateID, actions, types };
