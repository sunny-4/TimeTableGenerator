import XLSX from 'xlsx'
export function creaateSlotMap(){
    const workbook=XLSX.readFile("Timetable.xlsx");
    const slots=workbook.Sheets["Time Slots"];
    const slotsjson=XLSX.utils.sheet_to_json(slots)
    const n=slotsjson.length;
    const days=['M','T','W','Th','F']
    let slotmap={};
    for(let i=0;i<n-1;i++){
        days.forEach(day =>{
            if(slotsjson[i][day]!==undefined && slotsjson[i][day]!=="Lunch Break"){
                slotmap[slotsjson[i][day]]={
                    day,
                    "time":slotsjson[i]["Slot"]
                }
            }
        }) 
    }
    return slotmap;
}




