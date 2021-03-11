import axios from 'axios'
import { UserType } from '../redux/store'

type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2b6e2e12-95e4-4959-af89-fb3a85f352e8"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: any) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
   
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, { status: status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image/', photoFile)

        return instance.put(`profile/photo/`, formData, {
            headers: {
               " Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put(`profile/`,profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email: any, password: any, rememberMe = false, captcha=null) {
        return instance.post(`auth/login`, { email, password, rememberMe,captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}