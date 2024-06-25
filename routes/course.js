var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/COURSE1')

/*CREATE COURSE*/
router.post('/CreateCourse',CONTROL.CreateCourse);

/*GET ALL COURSE*/
router.get('/GetAllCourse',CONTROL.GetAllCourse);

/*GET SINGLE COURSE*/
router.get('/GetSingleCourse/:id',CONTROL.GetSingleCourse);

/*UPDATE COURSE*/
router.patch('/UpdateCourse/:id',CONTROL.UpdateCourse);

/*DELETE COURSE*/
router.delete('/DeleteCourse/:id',CONTROL.DeleteCourse);

module.exports = router;