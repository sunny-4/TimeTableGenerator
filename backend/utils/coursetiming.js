import {parseCourses} from "./parsecourses.js"
import { creaateSlotMap } from "./slotMap.js";
const coursemap=parseCourses();
const slotmap=creaateSlotMap();
function forallslots(key,coursenumber){
    let arr=[];
    coursemap[coursenumber][key]?.split(',').forEach(slot => {
        arr.push({
            "slot":slot,
            "day":slotmap[slot].day,
            "time":slotmap[slot].time
        }) 
    })
    coursemap[coursenumber][key]=arr;
}
function courseTiming(coursemap,slotmap){
    Object.keys(coursemap).forEach(courseNumber =>{
        forallslots("Lecture",courseNumber)
        forallslots("Tutorial",courseNumber)
        forallslots("Lab",courseNumber)
    })
}
courseTiming(coursemap,slotmap);
console.log(coursemap["MA 103 (E)"]);