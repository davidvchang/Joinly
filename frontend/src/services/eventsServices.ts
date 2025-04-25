import api from './api'
import {Events} from '../types/interfaces'

export const getAllEvents = async () => {
    const res = await api.get("/events")
    return res.data
}

export const registerEvent = async (data: Events) => {
    const res = await api.post("/events", data)
    return res
}
export const updateEvent = async (id_event: number) => {
    const res = await api.put("/events/" + id_event)
    return res.data
}
export const deleteEvent = async (id_event: number) => {
    const res = await api.delete("/events" + id_event)
    return res.data
}