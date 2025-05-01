import {pool} from '../bd.js'

export const getAttendees = async (req, res) => {
    const {event_id} = req.params
    try {
        const attendees = await pool.query("SELECT * FROM event_attendees WHERE event_id = $1", [event_id])
        res.status(200).json(attendees.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get all event attendees", error: ex.message})
    }
}

export const postAttendees = async (req, res) => {
    const user_id = req.user.id
    const {event_id} = req.params

    try {
        const isUserRegistered = await pool.query("SELECT COUNT(*) FROM event_attendees WHERE user_id = $1 AND event_id = $2", [user_id, event_id])
        
        if(isUserRegistered.rows[0].count > "0"){
            return res.status(404).json({message: "The user is already registed in the event"})
        }
        await pool.query("INSERT INTO event_attendees (user_id, event_id) VALUES ($1, $2)", [user_id, event_id])
        res.status(201).json({message: "Event attendees registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register the event attendees", error: ex.message})
    }
}

export const deleteAttendees = async (req, res) => {
    const user_id = req.user.id
    const {event_id} = req.params

    try {
        const existUserRegistered = await pool.query("SELECT COUNT(*) FROM event_attendees WHERE user_id = $1 AND event_id = $2", [user_id, event_id])
        if(existUserRegistered.rows[0].count === "0"){
            return res.status(404).json({message: "The user isn't registed in the event"})
        }

        await pool.query("DELETE FROM event_attendees WHERE user_id = $1 AND event_id = $2 RETURNING *", [user_id, event_id])
        res.status(201).json({message: "User attendee in event deleted correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the user in the event", error: ex.message})
    }
}

export const getMyEventAttendee = async (req, res) => {
    const user_id = req.user.id
    const {event_id} = req.params

    try {
        if(!user_id){
            return res.status(401).json({message: "The user isn't logged in"})
        }
        const attendee = await pool.query(
            "SELECT * FROM event_attendees WHERE user_id = $1 AND event_id = $2",
            [user_id, event_id]
        );
        
        if(attendee.rows.length === 0){
            return res.status(404).json({message: "The user isn't registed in the event"})
        }
        res.status(200).json(attendee.rows[0])

    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get my user in the event", error: ex.message})
    }
}

export const getAllAttendees = async (req, res) => {
    try {
        const attendees = await pool.query("SELECT * FROM event_attendees")
        res.status(200).json(attendees.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get all attendees", error: ex.message})
    }
}