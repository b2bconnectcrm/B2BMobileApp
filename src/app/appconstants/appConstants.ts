import { environment } from "src/environments/environment";

const baseUrl = `${environment.apiUrl}`;
export class AppConstants {   
    
    public static fileUploadApiPath = `${environment.fileUploadApiPath}`

    public static fileDisplayUrlApiPath = `${environment.fileDisplayUrlApiPath}`;

    public static uploadUrl = `${baseUrl}` + this.fileUploadApiPath;

    public static GET_REMOTE_IMAGE_PATH(remoteFileName: string) {
        return `${baseUrl}` + this.fileDisplayUrlApiPath + remoteFileName;
    }
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

    public static PUT_UPDATE_DEAL(ID:any) {
        return `${baseUrl}` + "deals/" + ID;
    }

    public static GET_ALL_Deals() {
        return `${baseUrl}` + "deals/all";
    }
    public static GET_ALL_Deals_By_Id(id:any) {
        // http://51.8.202.35:9000/deals/one/6
        return `${baseUrl}` + "deals/one/" + id;
    }
    public static delete_deals(id:any) {
        // http://51.8.202.35:9000/deals/one/6
        return `${baseUrl}` + "deals/" + id;
    }
    public static POST_CREATE_Lead() {
        return `${baseUrl}` + "lead/add";
    }
    public static GET_ALL_Leads() {
        return `${baseUrl}` + "lead/all";
    }
    public static GET_ALL_Leads_By_Id(id:any) {        
        return `${baseUrl}` + "lead/" + id;
    }
    public static GET_ALL_properties() {
        return `${baseUrl}` + "property/all";
    }
    public static GET_ALL_Sites_By_Id(id:any) {
        return `${baseUrl}` + "property/" + id;
    }
}
