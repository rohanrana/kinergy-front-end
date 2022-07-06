import { get, post } from "./index";


export const getFacilities = (data) => {
    
    const request = {
        subUrl: `/facility/facilityList`,
        data
    };
    return post(request);
};


