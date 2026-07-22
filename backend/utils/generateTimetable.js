import {courseTiming} from "./coursetiming.js"
const coursemap=courseTiming();
export function generateTimetable(selectedCourses) {
    console.log("Generating timetable for selected courses:", selectedCourses);
    const timetable={
            M:{
                "8:30 - 9:50": [],
                "10:00 - 11:20": [],
                "11:30 - 12:50": [],
                "14:00 - 15:20": [],
                "15:30 - 16:50": [],
                "17:00 - 18:20": []
            },
            T:{
                "8:30 - 9:50": [],
                "10:00 - 11:20": [],
                "11:30 - 12:50": [],
                "14:00 - 15:20": [],
                "15:30 - 16:50": [],
                "17:00 - 18:20": []           
            },
            W:{
                "8:30 - 9:50": [],
                "10:00 - 11:20": [],
                "11:30 - 12:50": [],
                "14:00 - 15:20": [],
                "15:30 - 16:50": [],
                "17:00 - 18:20": []
            },
            Th:{
                "8:30 - 9:50": [],
                "10:00 - 11:20": [],
                "11:30 - 12:50": [],
                "14:00 - 15:20": [],
                "15:30 - 16:50": [],
                "17:00 - 18:20": []
            },
            F:{
                "8:30 - 9:50": [],
                "10:00 - 11:20": [],
                "11:30 - 12:50": [],
                "14:00 - 15:20": [],
                "15:30 - 16:50": [],
                "17:00 - 18:20": []
            },
    }
    function addCoursestoTimetable(courseId){
        coursemap[courseId]["Lecture"]?.forEach((lec)=>{
            timetable[lec["day"]][lec["time"]].push(courseId+"(Lec)");
        })
        coursemap[courseId]["Tutorial"]?.forEach((lec)=>{
            timetable[lec["day"]][lec["time"]].push(courseId+"(Tut)");
        })
        coursemap[courseId]["Lab"]?.forEach((lec)=>{
            timetable[lec["day"]][lec["time"]].push(courseId+"(Lab)");
        })
    }
    selectedCourses.forEach(courseid=>{
        addCoursestoTimetable(courseid);
    })
    return timetable;

}