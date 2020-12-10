import axios from 'axios'


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"3c81fd9e-287b-43e8-9969-1552db318957"
    }
})

export const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>response.data)
     },
     follow(userId:any){
        return instance.post(`follow/${userId}`)
     },
     unfollow(userId:number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:number){
       return instance.get(`profile/`+ userId)
     
    }
}

export const authAPI={
    me(){
       return instance.get(`auth/me`)
    }
}
