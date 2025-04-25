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