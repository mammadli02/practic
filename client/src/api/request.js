import { BASE_URL } from "./base_url";
import axios from 'axios';
export const GETALL=async(name)=>{
    let datas;
    let URL;
    if(!name){
        URL=BASE_URL+'/hello'
    }else{
        URL=BASE_URL+'/hello/'+`?name=${name}`
    }
    await axios.get(URL).then((res)=>{
        datas=res.data.data
    })
    return datas
}

export const GetId=async(ID)=>{
    let single;
    await axios.get(`${BASE_URL}/hello/${ID}`)
.then((res)=>{
    single=res.data.data
})
return single
}
export const Delete=async(ID)=>{
    let deleted;
    await axios.delete(`${BASE_URL}/hello/${ID}`)
    .then((res)=>{
        deleted=res.data.data
    })
    return deleted
}
export const Post=(payload)=>{
    axios.post(`${BASE_URL}/hello`, payload)
}
export const PUT=(ID, payload)=>{
    axios.put(`${BASE_URL}/hello/${ID}`, payload)
}