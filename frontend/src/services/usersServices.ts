import api from './api'
import {Users} from '../types/interfaces'

export const getAllUsers = async () => {
    const res = await api.get("/users")
    return res.data
}

export const registerUser = async (data: Users) => {
    const res = await api.post("/users", data)
    return res
}
export const updateUser = async (id_user: number) => {
    const res = await api.put("/users/" + id_user)
    return res.data
}
export const deleteUser = async (id_user: number) => {
    const res = await api.delete("/users" + id_user)
    return res.data
}

export const loginUser = async (data: {email: string, password: string}) => {
    const res = await api.post("/users/auth/login", data);
    return res;
}

export const logoutUser = async () => {
    const res = await api.post("/users/logout");
    return res.data;
}

export const verifyIsLoggedUser = async () => {
    const res = await api.get("/users/auth/check");
    return res.data;
}