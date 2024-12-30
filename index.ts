import express from 'express'
import tasks from './src/tasks/tasks.router'
import cors from 'cors'
import 'dotenv/config'
import './src/mongo'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './src/swaggerConfig'

const app = express()
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(express.json())
app.use('/api/tasks', tasks)

app.listen(process.env.PORT || 3000, () =>
  console.log(`server running on port ${process.env.PORT}`)
)

export default app
