import api from './api'
import {Events} from '../types/interfaces'

export const getAllEvents = async (page: number = 1, limit: number = 9) => {
    const res = await api.get(`/events?page=${page}&limit=${limit}`)
    return res.data
}

export const registerEvent = async (data: Events) => {
    const res = await api.post("/events", data)
    return res
}
export const updateEvent = async (id_event: number, data:Events) => {
    const res = await api.put("/events/" + id_event, data)
    return res
}
export const deleteEvent = async (id_event: number) => {
    const res = await api.delete("/events/" + id_event)
    return res
}

export const getOneEvent = async (id_event: number) => {
    const res = await api.get("/events/" + id_event)
    return res.data
}

export const getCreatedEventByUser = async () => {
    const res = await api.get("/events/user")
    return res.data
}
export const getJoinedEventByUser = async () => {
    const res = await api.get("/events/user/joined")
    return res.data
}

export const getNumberJoined = async (id_event: number) => {
    const res = await api.get("/events/number/" + id_event)
    return res.data
}