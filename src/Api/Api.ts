import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '3c924d97-2d2c-4453-9aea-574f561a646d'
    }
})

export const userApi = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pagesSize}`,).then(response => {
            return response.data
        })
    },

}

export const FoolowedUser = {
    getFollowed(userId: number) {
        return instance.get(`/follow/${userId}`)
    },
    Followed(id: number) {
        return instance.post(`/follow/${id}`,).then(response => {
            return response.data
        })
    },
    unFollowed(id: number) {
        return instance.delete(`/follow/${id}`,).then(response => {
            return response.data
        })
    }
}

export const authApi = {
    login: (arg: ArgLoginType) => {
        return instance.post("auth/login", arg);
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}
export const ProfileContent = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`).then((response) => {
            console.log('api from', response)
            return response.data
        })
    },
    updateProfile(model:any){
  return instance.put('/profile' , model)
        
    }
    updatePhoto(files:any){
    return instance.put('/profile/photo', {image: files})
        
    }, 
    updateStatus(status:string){
        return instance.put('/profile/status', {status})
    }
}
export const authMe = () => {

    return instance.get('auth/me')

}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
}
