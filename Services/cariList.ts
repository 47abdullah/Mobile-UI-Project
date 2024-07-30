import axios from "axios";
import { UserType } from "@/types/user";

const baseUrl='https://jsonplaceholder.typicode.com/users';

export const fetchUsers=async():Promise <UserType[]> =>{
    try {
        const response =await axios.get<UserType[]>(`${baseUrl}`);
        return response.data;

    } catch (error) {
         console.error('API isteği sırasında bir hata oluştu:', error);
         return[];
    }
}