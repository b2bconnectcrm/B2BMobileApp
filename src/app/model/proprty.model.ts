import { Address } from "./address.model";


export interface Property {

id: number;
propertyName?: string;
companyName?: string;
reraNumber?: string;
guidelineValue?: string;
propertyType?: string;
totalPlots?: number;
poc?: string;
mobile?: string;
amenities?: string;
startDate?: string;
extensionDate?: string;
propertyDescription?: string;
status?: string;
propertyMap?: string;
address?: Address;

}