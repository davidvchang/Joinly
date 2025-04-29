import api from './api'
import {Attendees} from '../types/interfaces'

export const getAllAttendees = async (id_event:number) => {
    const res = await api.get("/attendees/" + id_event)
    return res.data
}

export const postAttendees = async (id_event:number, data: Attendees) => {
    const res = await api.post("/attendees/" + id_event, data)
    return res
}

export const deleteAttendees = async (id_event: number) => {
    const res = await api.delete("/attendees/" + id_event)
    return res.data
}

export const getOneAttendee = async (id_event: number) => {
    const res = await api.get("/attendees/" + id_event)
    return res.data
}