import {axiosService} from "../Helper";
export const getAll=()=>{
    return axiosService.get('/');
}