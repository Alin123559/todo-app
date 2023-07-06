const {Router} = require("express")
const {getList,postList,deleteList, updateList} = require('../controllers/Listcontroller');
const router = Router()
 

router.get('/',getList)
router.post('/post',postList)
router.post('/delete',deleteList)
router.post('/update',updateList)
module.exports = router;