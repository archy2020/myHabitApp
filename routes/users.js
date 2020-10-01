const express=require('express');
const router=express.Router(); 
const usersController=require('../controllers/users_controller');

router.post('/create_habit',usersController.create_habit);
router.get('/delete_habit',usersController.delete_habit);
router.get('/week',usersController.week);
router.get('/update/:id&:newstatus',usersController.update);
// router.get('/find',usersController.find);
// router.get('/detail',usersController.detail);
// router.get('/delete/:habit',usersController.delete);

module.exports=router;