import axios from "axios";
import { UserType } from "@/types/user";
import { TodoResponse } from "@/types/userTest";


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




//  büyük veri listeleme örneği
const Base_Url = 'https://dummyjson.com/todos';

export const getData =async(skip: number, limit: number):Promise <TodoResponse | null>=>{
    try {
        const response =await axios.get<TodoResponse>(`${Base_Url}?limit=${limit}&skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
        return null;
    }
}