import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import usersRoutes from './routes/users.route.js'
import eventsRoutes from './routes/events.route.js'
import attendeesRoutes from './routes/attendees.route.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser());
app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/events', eventsRoutes)
app.use('/api/attendees', attendeesRoutes)

export default app