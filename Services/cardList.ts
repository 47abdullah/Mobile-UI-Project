import { CartTypes } from "@/types/cardType";
import axios from "axios";


const baseUrl='https://dummyjson.com/carts';

export const getCardData=async(skip:number,limit:number):Promise <CartTypes | null>=>{
try {
    const response =await axios.get<CartTypes>(`${baseUrl}?limit=${limit}&skip=${skip}`);
    return response.data;
    
} catch (error) {
    console.error('API isteği sırasında bir hata oluştu:', error);
        return null;
}
}