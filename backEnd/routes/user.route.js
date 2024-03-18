import express from 'express'
import { deleteUser, test, updateUser,adminUser,createUser ,adminUpdate,adminDelete} from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'


const router = express.Router()


router.get('/',test)
router.post("/update/:id",verifyToken,updateUser)
router.delete("/delete/:id",verifyToken,deleteUser)
router.get('/admin',adminUser)
router.post('/createUser',createUser)
router.put('/adminUpdate/:id',adminUpdate)
router.delete('/adminDelete/:id', adminDelete);


export default router