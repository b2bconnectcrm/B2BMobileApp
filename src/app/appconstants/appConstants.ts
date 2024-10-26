import { environment } from "src/environments/environment";

const baseUrl = `${environment.apiUrl}`;
export class AppConstants {

    
    public static POST_DO_LOGIN() {
        return `${baseUrl}` + "user/login";
    }

    public static POST_CREATE_LEAD_DETAILS() {
        return `${baseUrl}` + "lead/add";
    }

    public static GET_ALL_PROPERTY_DETAILS() {
        return `${baseUrl}` + "property/all";
    }

    
    public static POST_CREATE_DEAL() {
        return `${baseUrl}` + "deals/add";
    }
    public static GET_ALL_Deals() {
        return `${baseUrl}` + "deals/all";
    }
}
