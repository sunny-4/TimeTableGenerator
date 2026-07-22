import {parseCourses} from "./parsecourses.js"
import { creaateSlotMap } from "./slotMap.js";

export function courseTiming(){
    const coursemap=parseCourses();
    const slotmap=creaateSlotMap();
    function forallslots(key,coursenumber){
        const slots=coursemap[coursenumber][key];
        if(!slots){
            coursemap[coursenumber][key]=[];
            return;
        }
        let arr=[];
        slots.split(',').forEach(slot => {
            arr.push({
                "slot":slot,
                "day":slotmap[slot].day,
                "time":slotmap[slot].time
            }) 
        })
        coursemap[coursenumber][key]=arr;
    }
    Object.keys(coursemap).forEach(courseNumber =>{
        forallslots("Lecture",courseNumber)
        forallslots("Tutorial",courseNumber)
        forallslots("Lab",courseNumber)
    })
    return coursemap;
}
// courseTiming(coursemap,slotmap);
// console.log(coursemap["MA 103 (E)"]);