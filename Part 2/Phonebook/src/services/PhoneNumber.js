import axios from "axios";
const baseUrl='http://localhost:3001/persons'
const getAll=()=>{
    const request=axios.get(baseUrl)
    return request.then((response)=>{
        return response.data
    })
}
const create=(phoneNumber)=>{
    const request = axios.post(baseUrl,phoneNumber)
    return request.then((response)=>{
        return response.data
    })
}


export default{getAll,create}