import {pool} from '../bd.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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
        if(existEmail.rows[0].count > "0"){
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
        if(existUser.rows[0].count === "0"){
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
        console.log(existUser)
        if(existUser.rows[0].count === "0"){
            return res.status(404).json({message: "The user doesn't exist"})
        }

        await pool.query("DELETE FROM users where id_user = $1", [id_user])
        res.status(204).json()
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the user", error: ex.message})
    }
}

export const updateUser = async (req, res) => {
    const {id_user} = req.params
    const {image_url, name, last_name, email, password, phone_number} = req.body

    try {
        const existUser = await pool.query("SELECT COUNT(*) FROM users where id_user = $1", [id_user])
        if(existUser.rows[0].count === "0"){
            return res.status(404).json({message: "The user doesn't exist"})
        }

        await pool.query("UPDATE user SET image_url = $1, name = $2, last_name = $3, email = $4, password = $5, phone_number = $6 where id_user = $7", [image_url, name, last_name, email, password, phone_number, id_user])
        res.status(204).json({message: "User updated correctly"})
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to delete the user", error: ex.message})
    }
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const existUser = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if(existUser.rowCount === 0){
            return res.status(404).json({message: "The email doesn't exist"})
        }

        const user = existUser.rows[0]

        const passwordIsMatch = await bcrypt.compare(password, user.password)
        if(!passwordIsMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            {
                id: user.id_user, 
                email: user.email, 
                name: user.name, 
                last_name: user.last_name, 
                image_url: user.image_url, 
                phone_number: user.phone_number
            }, 
    
            process.env.JWT_SECRET,{ expiresIn: '1h' }
        )
    
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        })
    
        res.status(200).json({ message: 'Login successful' });

    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to login", error: ex.message})
    }

}

export const logoutUser = async (req, res) => {

    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        })
    
        res.json({ message: 'Logged out successful' });

    } catch (ex) {
        res.status(500).json({message: "An error has ocurred to logged out", error: ex.message})
    }

}