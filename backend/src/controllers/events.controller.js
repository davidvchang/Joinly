import {pool} from '../bd.js'


export const getEvents = async (req, res) => {
    try {
        const events = await pool.query("SELECT * FROM events")
        res.status(200).json(events.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get all events", error: ex.message})
    }
}

export const postEvent = async (req, res) => {
    const id_user = req.user_id
    const {image_url, title, description, category, location, date, time, user_id} = req.body

    try {
        await pool.query("INSERT INTO events (image_url, title, description, category, location, date, time, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [image_url, title, description, category, location, date, time, user_id])
        res.status(201).json({message: "Event registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register the event", error: ex.message})
    }
}

export const getOneEvent = async (req, res) => {
    const {id_event} = req.params

    try {
        const existEvent = await pool.query("SELECT COUNT(*) FROM events where id_event = $1", [id_event])
        if(existEvent.rows[0].count === "0"){
            return res.status(404).json({message: "The event doesn't exist"})
        }

        const event = await pool.query("SELECT * FROM events where id_event = $1", [id_event])
        res.status(200).json(event.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get the event", error: ex.message})
    }
}

export const deleteEvent = async (req, res) => {
    const {id_event} = req.params

    try {
        const existEvent = await pool.query("SELECT COUNT(*) FROM events where id_event = $1", [id_event])
        if(existEvent.rows[0].count === "0"){
            return res.status(404).json({message: "The event doesn't exist"})
        }

        await pool.query("DELETE FROM events where id_event = $1", [id_event])
        res.status(204).json({message: "Event deleted correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the event", error: ex.message})
    }
}

export const updateUser = async (req, res) => {
    const {image_url, title, description, category, location, date, time} = req.body

    try {
        const existEvent = await pool.query("SELECT COUNT(*) FROM events where id_event = $1", [id_event])
        if(existEvent.rows[0].count === "0"){
            return res.status(404).json({message: "The event doesn't exist"})
        }

        await pool.query("UPDATE events SET image_url = $1, title = $2, description = $3, category = $4, location = $5, date = $6, time = $7 WHERE id_event = $8", [image_url, title, description, category, location, date, time, id_event])
        res.status(204).json({message: "Event updated correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to update the event", error: ex.message})
    }
}