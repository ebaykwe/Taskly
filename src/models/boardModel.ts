import { Schema, model, Document } from 'mongoose';

export interface IBoard extends Document {
  name: string;
  organization: Schema.Types.ObjectId; 
  description?: string;
  createdDate: Date;
  updatedDate: Date;
  members: Schema.Types.ObjectId[]; 
  status: 'active' | 'archived';
  tasks: Schema.Types.ObjectId[]; 
}

const boardSchema = new Schema<IBoard>({
  name: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    ref: 'Organization',
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  status: {
    type: String,
    enum: ['active', 'archived'],
    default: 'active',
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

const Board = model<IBoard>('Board', boardSchema);

export default Board;
