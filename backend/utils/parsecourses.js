import XLSX from 'xlsx'
export function parseCourses(){
    const workbook=XLSX.readFile('Timetable.xlsx')
    const courseSheet=workbook.Sheets["Time table"]
    const courseJson=XLSX.utils.sheet_to_json(courseSheet);
    let n=courseJson.length;
    let coursemap={}
    courseJson.forEach(obj =>{
        if(obj['C']!==undefined){
            coursemap[obj["Course Number"]]={
                "Course Name":obj["Course Name"],
                "Lecture":obj['Lecture']?.trim().split(/\s+/)[0],
                "Lab":obj['Lab']?.trim().split(/\s+/)[0],
                "Tutorial":obj['Tutorial']?.trim().split(/\s+/)[0],
                "Credits":obj['C']
            }   
        }
    })
    return coursemap
}

