import express from 'express'
import { parseCourses } from '../utils/parsecourses.js';
import { generateTimetable } from '../utils/generateTimetable.js';

import  XLSX from 'xlsx';
const router=express.Router();

router.post('/selectedcourses',(req,res)=>{
    res.json(generateTimetable(req.body.courses));
})
router.get('/courses',(req,res)=>{
    const courses=parseCourses();
    res.json(courses)
})

export default router;