import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {Pool} = pkg

const connectionString = process.env.POSTGRESQL_URI;

export const pool = new Pool({
    connectionString: connectionString
})

export const openConnection = async () => {
    try {
        await pool.connect()
        console.log("DataBase Connected")
    } catch (ex) {
        console.log("An error has ocurred: " + ex)
    }
}