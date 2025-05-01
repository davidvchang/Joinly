import api from './api'
import {Attendees} from '../types/interfaces'

export const getAllAttendees = async (id_event:number) => {
    const res = await api.get("/attendees/" + id_event)
    return res.data
}

export const postAttendees = async (id_event:number) => {
    const res = await api.post("/attendees/" + id_event)
    return res
}

export const deleteAttendees = async (id_event: number) => {
    const res = await api.delete("/attendees/" + id_event)
    return res
}

export const getOneAttendee = async (id_event: number) => {
    const res = await api.get("/attendees/" + id_event + "/me")
    return res.data
}

export const getAttendees = async () => {
    const res = await api.get("/attendees/")
    return res.data
}