import { ICategory } from "./category.model";

export interface IProduct{
    id : number;
    productTitle : string;
    price : number;
    description : string;
    productImage : string[];
    category : ICategory

}