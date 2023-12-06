import express from 'express'
import { addSlot,getSlot } from '../components/controller/SlotsController.js';

const route = express.Router()




route.post('/createSlot', addSlot);

route.post('/getSlots', getSlot);

export default route
