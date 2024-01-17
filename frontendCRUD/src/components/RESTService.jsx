import {axiosService} from "../Helper";
export const getAll=()=>{
    return axiosService.get('/');
}
export const getById=(id)=>{
    return axiosService.get(`/emp/${id}`);
}
export const addEmployee=(empData)=>{
    return axiosService.post('/addEmp',empData);
}

export const updateEmp=(id,empData)=>{
    return axiosService.put(`/edit/${id}`,empData);
}
export const deleteEmp=(id)=>{
    return axiosService.delete(`/deleteEmp/${id}`);
}