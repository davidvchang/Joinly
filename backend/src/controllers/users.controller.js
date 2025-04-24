import {pool} from '../bd.js'
import bcrypt from 'bcryptjs'

export const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json(users.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get all users", error: ex.message})
    }
}

export const postUser = async (req, res) => {
    const {image_url, name, last_name, email, password, phone_number} = req.body

    try {
        const existEmail = await pool.query("SELECT COUNT(*) FROM users WHERE email = $1", [email])
        if(existEmail.rows[0].count > 0){
            return res.status(409).json({message: "The email already exist"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await pool.query("INSERT INTO users (image_url, name, last_name, email, password, phone_number) VALUES ($1, $2, $3, $4, $5, $6)", [image_url, name, last_name, email, hashedPassword, phone_number])
        res.status(201).json({message: "User registered correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to register the user", error: ex.message})
    }
}

export const getOneUser = async (req, res) => {
    const {id_user} = req.params

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM users where id_user = $1", [id_user])
        if(existUser.rows[0].count === 0){
            return res.status(404).json({message: "The user doesn't exist"})
        }

        const user = await pool.query("SELECT * FROM users where id_user = $1", [id_user])
        res.status(200).json(user.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to get the user", error: ex.message})
    }
}

export const deleteUser = async (req, res) => {
    const {id_user} = req.params

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM users where id_user = $1", [id_user])
        if(existUser.rows[0].count === 0){
            return res.status(404).json({message: "The user doesn't exist"})
        }

        await pool.query("DELETE FROM users where id_user = $1", [id_user])
        res.status(204).json({message: "User deleted correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the user", error: ex.message})
    }
}

export const updateUser = async (req, res) => {
    const {id_user} = req.params
    const {image_url, name, last_name, email, password, phone_number} = req.body

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM users where id_user = $1", [id_user])
        if(existUser.rows[0].count === 0){
            return res.status(404).json({message: "The user doesn't exist"})
        }

        await pool.query("UPDATE user SET image_url = $1, name = $2, last_name = $3, email = $4, password = $5, phone_number = $6 where id_user = $7", [image_url, name, last_name, email, password, phone_number, id_user])
        res.status(204).json({message: "User updated correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the user", error: ex.message})
    }
}