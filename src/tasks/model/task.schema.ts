import {Schema, model, Document} from 'mongoose'

interface task extends Document {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
}

const taskSchema = new Schema<task>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
)

export const Task = model<task>('Task', taskSchema)

taskSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
  },
})
