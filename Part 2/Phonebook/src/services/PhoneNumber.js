import axios from "axios";
const baseUrl='http://localhost:3001/persons'
const getAllPhoneNumber=()=>{
    const request=axios.get(baseUrl)
    return request.then((response)=>{
        return response.data
    })
}
const createPhoneNumber=(phoneNumber)=>{
    const request = axios.post(baseUrl,phoneNumber)
    return request.then((response)=>{
        return response.data
    })
}
const deletePhoneNumber=(id)=>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response)=>{
        return response.statusText
    })
}
const updatePhoneNumber = (person) => {
    const url = `${baseUrl}/${person.id}`
    const request =axios.put(url,person)
    return request.then((response)=>{
        return response.data
    })
  }

export default{getAllPhoneNumber,createPhoneNumber,deletePhoneNumber,updatePhoneNumber}