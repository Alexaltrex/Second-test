import axios from "axios";
import {NewsType, UserInfoType} from "../Types/types";

const instance = axios.create({
    baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1/'
});

export const newsAPI = {
    async getNews() {
        let response = await instance.get<NewsResponseType>('news')
        return response.data;
    }
};

export const authAPI = {
    async login(email: string, password: string) {
        let response = await instance.post<LoginResponseType>('validate', {email, password});
        return response.data;
    },
    async getUserInfo(userId: number) {
        let response = await instance.get<UserInfoResponseType>(`user-info/${userId}`)
        return response.data;
    }
};

export type NewsResponseType = {
    status: string
    data: Array<NewsType>
}

export type LoginResponseType = {
    status: 'ok'
    data: { id: number }
} | {
    status: 'err'
    message: 'wrong_email_or_password'
}

type UserInfoResponseType = {
    status: 'ok'
    data: UserInfoType
} | {
    status: 'err'
    message: "user_not_found"
}