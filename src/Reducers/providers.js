import { getProviders } from "../Services/appointments";
import { listingReducer } from "./utils/listingReducer";

const { reducer, actions, types } = listingReducer({
  name: `providers`,
  getApi: getProviders,
});

const providers = reducer;
export { providers, actions, types };
