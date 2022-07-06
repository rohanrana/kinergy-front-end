import { getFacilities } from "../Services/facilities";
import { listingReducer } from "./utils/listingReducer";


const { reducer, actions, types } = listingReducer({
    name: `facilities`,
    getApi: getFacilities,
});

const facilities = reducer;
export { facilities, actions, types };
