import api from './api'

export const getAllUsers = async () => {
    const res = await api.get("/users")
    return res.data
}

export const registerUser = async () => {
    const res = await api.post("/users")
    return res.data
}
export const updateUser = async (id_user: number) => {
    const res = await api.get("/users/" + id_user)
    return res.data
}
export const deleteUser = async (id_user: number) => {
    const res = await api.get("/users" + id_user)
    return res.data
}