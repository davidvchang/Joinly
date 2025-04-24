import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import usersRoutes from './routes/users.route.js'
import eventsRoutes from './routes/events.route.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/events', eventsRoutes)

export default app